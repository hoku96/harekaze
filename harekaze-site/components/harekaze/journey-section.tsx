import { Reveal } from './reveal'

const INSTAGRAM_URL = 'https://www.instagram.com/harekaze.hiyoshidai/'

export function JourneySection() {
  return (
    <section className="py-32 relative" id="journey">
      <div className="max-w-[780px] mx-auto px-7 text-center">

        {/* Section heading */}
        <Reveal>
          <div className="mb-10 flex items-baseline gap-5 flex-wrap justify-center">
            <span className="font-serif text-seal text-[1.1rem] tracking-[.2em]">参</span>
            <h2
              className="font-serif font-normal tracking-[.12em]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
            >
              Journey
            </h2>
            <span className="text-ink-45 text-[.78rem] tracking-[.34em] self-center">
              晴れ風の、今日
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-ink-70 text-[.98rem] leading-[2]">
            日本酒も、料理も。
            <br />
            その日いちばんを、お出ししています。
            <br />
            移りゆく旬は、Instagramで日々お届けします。
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-11">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[.9rem] tracking-[.12em] px-[30px] py-[15px] rounded-sm transition-colors duration-300 bg-seal text-white hover:bg-[#9e2f24]"
            >
              ＠harekaze.hiyoshidai を見る
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
