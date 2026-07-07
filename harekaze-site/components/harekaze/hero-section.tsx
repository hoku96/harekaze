import { Reveal } from './reveal'
import { Noren } from './noren'

const TABELOG_URL = 'https://tabelog.com/chiba/A1204/A120401/12064482/'

export function HeroSection() {
  return (
    <section
      id="top"
      className="max-w-[1080px] mx-auto px-7 relative grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] items-center gap-14 min-h-[92vh] py-20 pb-24 max-[820px]:py-12 max-[820px]:pb-20"
    >
      {/* ── Left: copy ── */}
      <div className="order-2 md:order-1">
        <Reveal>
          <p className="font-serif text-amber-brand tracking-[.4em] text-[.76rem] mb-[30px]">
            千葉県富里市 日吉台 ・ 定食屋 × 居酒屋
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <h1
            className="font-serif font-medium leading-[1.15] tracking-[.06em]"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5.2rem)' }}
          >
            ご飯処
            <br />
            晴れ風
            <span className="block text-[.32em] tracking-[.5em] mt-[20px] font-normal text-ink-70">
              H A R E K A Z E
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-10 text-ink-70 text-[1.02rem] leading-[2]">
            生の<b className="text-washi font-medium">鯖</b>を、その日のうちに。
            <br />
            日本酒は、<b className="text-washi font-medium">五十種</b>。
            <br />
            日吉台の、ご飯処です。
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-11 flex gap-5 flex-wrap items-center">
            <a
              href={TABELOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[.9rem] tracking-[.12em] px-[30px] py-[15px] rounded-sm transition-colors duration-300 bg-seal text-white hover:bg-[#9e2f24]"
            >
              食べログで予約する
            </a>
            <a
              href="#menu"
              className="font-sans text-[.85rem] tracking-[.1em] text-ink-70 border-b border-amber-brand/40 pb-[2px] transition-colors duration-200 hover:text-amber-brand hover:border-amber-brand"
            >
              おしながきを見る
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-16 text-[.78rem] tracking-[.06em] text-ink-45">
            <div className="flex gap-4 flex-wrap items-center">
              <span className="text-amber-brand">★★★★★</span>
              <span>{'4.9 ・ Googleクチコミ 96件'}</span>
            </div>
            <div className="mt-2">
              {'ランチ ¥1,000〜1,999 ・ ディナー ¥3,000〜3,999'}
            </div>
          </div>
        </Reveal>
      </div>

      {/* ── Right: noren ── */}
      <div className="order-1 md:order-2 flex justify-center">
        <Reveal className="w-full">
          <Noren />
        </Reveal>
      </div>
    </section>
  )
}
