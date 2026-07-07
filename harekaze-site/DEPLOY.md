# Vercelデプロイ手順

前提: `gh`/`vercel` CLIが未インストール、`harekaze-site/`はまだgitリポジトリ化されていない。
このドキュメントは手順のみを示す。実際のリポジトリ作成・push・デプロイはこのセッションでは実行していない。

## 1. ローカルでビルド確認(実施済み)

```
npm run build
```

直近の実行で成功を確認済み。変更を加えた場合は再実行して確認する。

## 2. GitHubリポジトリを作成してpush

CLIを使う場合(`gh`がインストール済みなら):

```
cd harekaze-site
git init
git add .
git commit -m "Initial commit: harekaze site"
gh repo create harekaze-site --private --source=. --remote=origin
git push -u origin main
```

`gh`が無い場合は GitHub の Web UI で新規リポジトリを作成し、表示される手順に従って
`git remote add origin <URL>` → `git push -u origin main` を実行する。

## 3. Vercelにインポート

1. https://vercel.com/new を開く
2. 上記でpushしたGitHubリポジトリを選択してImport
3. Framework Preset は Next.js が自動検出される(変更不要)
4. Build Command / Output Directory はデフォルトのままでよい
5. 環境変数: 現状APIキー等の連携はないため設定不要

## 4. デプロイ実行と確認

- Deployを押すとビルドが走り、`https://<project-name>.vercel.app` が発行される
- デスクトップ・モバイル両方で表示を確認する
- 全リンク(食べログ・Instagram・電話)が正しく開くか実クリックで確認する

## 5. カスタムドメイン(任意・未着手)

独自ドメインを使う場合:
1. Vercelダッシュボード → Project → Settings → Domains
2. ドメインを追加し、指示されるDNSレコード(A/CNAME)を取得済みドメインの管理画面に設定
3. 反映まで数分〜数時間

ドメイン取得状況は未確認のため、まずは `*.vercel.app` での公開を推奨。
