import { Reveal } from './reveal'

const TAGS = [
  '駐車場あり',
  'お子様連れ大歓迎',
  '日本酒50種',
  '海鮮',
  '昼飲み歓迎',
  'LGBTQ+ フレンドリー',
]

const TABELOG_URL = 'https://tabelog.com/chiba/A1204/A120401/12064482/'
const INSTAGRAM_URL = 'https://www.instagram.com/harekaze.hiyoshidai/'

export function InfoSection() {
  return (
    <section className="py-32 relative" id="info">
      <div className="max-w-[1080px] mx-auto px-7">

        {/* Section heading */}
        <Reveal>
          <div className="mb-16 flex items-baseline gap-5 flex-wrap">
            <span className="font-serif text-seal text-[1.1rem] tracking-[.2em]">伍</span>
            <h2
              className="font-serif font-normal tracking-[.12em]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
            >
              店舗案内
            </h2>
            <span className="text-ink-45 text-[.78rem] tracking-[.34em] self-center">
              INFORMATION
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-16 max-[760px]:gap-10 items-start">

          {/* Info table */}
          <Reveal>
            <table className="w-full border-collapse">
              <tbody>
                <InfoRow label="店名">
                  <b className="text-washi font-medium">ご飯処 晴れ風</b>（定食屋 × 居酒屋）
                </InfoRow>
                <InfoRow label="住所">
                  <b className="text-washi font-medium">〒286-0201</b>
                  <br />
                  千葉県富里市日吉台3丁目34-8 B1（左）
                </InfoRow>
                <InfoRow label="電話">
                  <a
                    href="tel:09054462391"
                    className="text-washi border-b border-amber-brand/40 transition-colors duration-200 hover:text-amber-brand"
                  >
                    090-5446-2391
                  </a>
                </InfoRow>
                <InfoRow label="予算">
                  {'ランチ '}<b className="text-washi font-medium">{'¥1,000〜1,999'}</b>
                  <br />
                  {'ディナー '}<b className="text-washi font-medium">{'¥3,000〜3,999'}</b>
                  <div className="text-ink-45 text-[.78rem] mt-1">
                    ディナーはお通し代 ¥400（税込）を含みます
                  </div>
                </InfoRow>
                <InfoRow label="ご利用">
                  店内飲食 ・ テイクアウト ・ デリバリー
                </InfoRow>
                <InfoRow label="支払い">
                  カード可（VISA・Master・JCB・AMEX・Diners）
                  <br />
                  電子マネー可（QUICPay）・QRコード決済可（PayPay）
                </InfoRow>
                <InfoRow label="席数">
                  22席（カウンター6席・小上がり座敷あり）
                </InfoRow>
                <InfoRow label="貸切">
                  可（20名様以下）
                </InfoRow>
                <InfoRow label="禁煙">
                  全席禁煙（屋外に喫煙スペースあり）
                </InfoRow>
                <InfoRow label="駐車場">
                  隣接ビルに12台
                </InfoRow>
                <InfoRow label="お子様連れ">
                  お子様可・ベビーカーでのご入店可
                </InfoRow>
                <InfoRow label="オープン日">
                  2025年8月1日
                </InfoRow>
                <InfoRow label="予約">
                  <a
                    href={TABELOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-washi border-b border-amber-brand/40 transition-colors duration-200 hover:text-amber-brand"
                  >
                    食べログ
                  </a>
                  {'、またはお電話090-5446-2391で承ります'}
                </InfoRow>
                <InfoRow label="SNS">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-washi border-b border-amber-brand/40 transition-colors duration-200 hover:text-amber-brand"
                  >
                    Instagram
                  </a>
                  {' ＠harekaze.hiyoshidai'}
                </InfoRow>
              </tbody>
            </table>
          </Reveal>

          {/* Hours card */}
          <Reveal delay={0.06}>
            <aside
              className="border border-amber-brand/30 rounded-sm px-10 py-10"
              style={{ background: 'linear-gradient(180deg, rgba(232,131,42,0.08), transparent)' }}
            >
              <h4 className="font-serif font-normal tracking-[.14em] mb-6">営業時間</h4>

              <div className="flex justify-between items-baseline py-3 border-b border-dashed border-border">
                <span className="font-serif text-amber-brand tracking-[.1em] text-[.92rem]">ランチ</span>
                <span className="text-[1.05rem] tracking-[.04em]">11:30 – 15:00</span>
              </div>
              <div className="flex justify-between items-baseline py-3 border-b border-dashed border-border">
                <span className="font-serif text-amber-brand tracking-[.1em] text-[.92rem]">ディナー</span>
                <span className="text-[1.05rem] tracking-[.04em]">17:00 – 22:00</span>
              </div>
              <div className="flex justify-between items-baseline py-3 border-b border-dashed border-border">
                <span className="font-serif text-amber-brand tracking-[.1em] text-[.92rem]">定休日</span>
                <span className="text-[1.05rem] tracking-[.04em]">火曜日</span>
              </div>
              <div className="text-ink-45 text-[.76rem] mt-2 leading-[1.8]">
                食材がなくなり次第、早く閉まる場合があります。
                <br />
                12月はできる限り毎日営業いたします。
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-7">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-[.72rem] tracking-[.08em] text-ink-70 border border-border px-3 py-[5px] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Radio notice */}
              <div className="mt-8 border-l-2 border-seal pl-[18px] py-[6px] text-[.86rem] text-ink-70 leading-[1.85]">
                <b className="text-washi font-serif">ラジオ出演のお知らせ</b>
                <br />
                「わくわくホームプレゼンツ 僕らの秘密基地」に出演。
                <br />
                7月毎週木曜 20:00〜 放送。
              </div>
            </aside>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

function InfoRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <tr className="border-b border-border">
      <th className="text-left py-5 pr-4 font-serif font-semibold text-amber-brand tracking-[.12em] text-[.95rem] whitespace-nowrap align-top w-[120px]">
        {label}
      </th>
      <td className="text-left py-5 text-ink-70 text-[.95rem] align-top">{children}</td>
    </tr>
  )
}
