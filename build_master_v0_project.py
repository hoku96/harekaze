"""
v0 Platform API 経由でマスターテンプレート(ご飯処 晴れ風)をv0プロジェクト化するスクリプト。

前提:
- Claude Code等、通常のインターネット接続があるローカル/実行環境で動かすこと
  (Cowork(claude.ai)のサンドボックスは外向き通信が制限されており api.v0.dev には到達できない)
- 環境変数 V0_API_KEY にAPIキーを設定してから実行する(スクリプトにキーを書かない)
- 事前に `pip install requests` を実行しておく
- master_template_harekaze.html を同じディレクトリに置いておく

処理の流れ:
1. 疎通・認証確認 (GET /v1/chats) ※課金なしの想定
2. マスターテンプレートHTMLを読み込み、v0へ「これと同等のNext.js構成で再現してほしい」という
   プロンプトとともに送信 (POST /v1/chats) ※ここで初めてAI生成が走り、課金対象になる
3. 返ってきた chatId / webUrl / projectId を v0_master_project.json に保存
   (以降、店舗ごとのカスタマイズは chats.init() でこのプロジェクトを複製して行う想定)

認証ヘッダーの形式(Authorization: Bearer <key>)は公式ドキュメントのSDK説明から類推した値であり、
実機での動作確認はできていない(Cowork環境からapi.v0.devに到達できなかったため)。
Step1の疎通確認でエラーが出た場合は、v0ダッシュボードのAPIキー設定画面で
ヘッダー形式・キーの有効性を確認すること。
"""

import os
import sys
import json
import requests

API_BASE = "https://api.v0.dev/v1"
TEMPLATE_FILE = "master_template_harekaze.html"
OUTPUT_FILE = "v0_master_project.json"


def get_headers():
    key = os.environ.get("V0_API_KEY")
    if not key:
        print("環境変数 V0_API_KEY が未設定です。export V0_API_KEY=... を実行してから再度呼び出してください。")
        sys.exit(1)
    return {"Authorization": f"Bearer {key}", "Content-Type": "application/json"}


def check_connection():
    print("Step 1: 疎通・認証確認 (GET /v1/chats) ...")
    resp = requests.get(f"{API_BASE}/chats", headers=get_headers(), timeout=30)
    print(f"  HTTPステータス: {resp.status_code}")
    if resp.status_code != 200:
        print("  認証または疎通に失敗。以下を確認:")
        print("  - APIキーがv0ダッシュボード(v0.dev/chat/settings/keys)で有効か")
        print("  - このマシンからapi.v0.devへの外向き通信が許可されているか")
        print(f"  - レスポンス本文: {resp.text[:500]}")
        sys.exit(1)
    print("  OK: 認証・疎通に成功。")


def build_master_project():
    if not os.path.exists(TEMPLATE_FILE):
        print(f"{TEMPLATE_FILE} が見つかりません。同じディレクトリに配置してください。")
        sys.exit(1)

    with open(TEMPLATE_FILE, "r", encoding="utf-8") as f:
        html_content = f.read()

    system_prompt = (
        "あなたは日本の飲食店向け高級LPを専門とするフロントエンドエンジニア件UI/UXデザイナーです。"
        "与えられた静的HTMLモックアップの構成・コピー・トーンを忠実に再現しつつ、"
        "Next.js + Tailwind CSS + shadcn/uiベースの本番相当のコードとして再構築してください。"
        "予約導線は元デザインどおり、電話発信(tel:リンク)とInstagramプロフィールへの誘導のみとし、"
        "新たに予約フォーム(日付・時間・人数などの入力UI)は追加しないでください。"
        "入力フォームやバックエンド接続は次工程で別途検討します。"
    )

    user_message = (
        "以下は「ご飯処 晴れ風」(千葉県富里市の海鮮居酒屋)向けに作成した静的HTMLモックアップです。"
        "このデザイン・構成・文言を忠実に踏襲したNext.jsプロジェクトとして再構築してください。"
        "画像は全て「画像: ○○」というプレースホルダーのままにし、実写真の指定はしないでください。\n\n"
        f"--- 参考HTML ---\n{html_content}\n--- 参考HTML ここまで ---"
    )

    print("Step 2: v0へマスタープロジェクト生成をリクエスト中(ここから課金対象)...")
    payload = {"system": system_prompt, "message": user_message}
    resp = requests.post(f"{API_BASE}/chats", headers=get_headers(), json=payload, timeout=120)
    print(f"  HTTPステータス: {resp.status_code}")

    if resp.status_code not in (200, 201):
        print(f"  生成リクエストに失敗しました: {resp.text[:1000]}")
        sys.exit(1)

    data = resp.json()
    result = {
        "chatId": data.get("id"),
        "webUrl": data.get("webUrl"),
        "projectId": data.get("projectId") or data.get("project", {}).get("id"),
        "raw": data,
    }

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    print("Step 3: 完了。以下のプレビューURLを人間がレビューしてから次工程へ進むこと。")
    print(f"  webUrl: {result.get('webUrl')}")
    print(f"  保存先: {OUTPUT_FILE} (以降のリード別カスタマイズはこのprojectId/chatIdを起点にする)")


if __name__ == "__main__":
    check_connection()
    build_master_project()
