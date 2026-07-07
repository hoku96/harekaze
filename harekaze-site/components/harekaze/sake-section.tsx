import { Reveal } from './reveal'

const SAKE_TAGS = ['日本酒 50種', '全国の地酒', '昼飲み歓迎']

export function SakeSection() {
  return (
    <section
      className="py-32 border-t border-b border-border text-center"
      id="sake"
      style={{ background: 'linear-gradient(180deg, #fdf9f0, #fbeedc)' }}
    >
      <div className="max-w-[780px] mx-auto px-7">

        {/* Vertical tate-quote */}
        <Reveal>
          <div className="flex justify-center">
            <p
              className="sake-quote font-serif font-normal leading-[1.9] tracking-[.14em] text-washi"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
            >
              旬を肴に、
              <br />
              <em className="text-amber-brand not-italic">一献かたむける。</em>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-ink-70 mt-10 text-[.98rem] leading-[2]">
            全国から、<b className="text-washi">日本酒五十種</b>。
            <br />
            仕入れにより、ラインナップは日替わりです。
            <br />
            最新は、
            <a
              href="https://www.instagram.com/harekaze.hiyoshidai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-brand border-b border-amber-brand/40 hover:border-amber-brand transition-colors duration-200"
            >
              Instagram
            </a>
            でお届けしています。
            <br />
            昼飲みも、仕事帰りの一杯も、家族のごはんも。
            <br />
            晴れ風は、そんな時間のための店です。
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-[30px] flex gap-[10px] justify-center flex-wrap">
            {SAKE_TAGS.map((tag) => (
              <span
                key={tag}
                className="font-serif text-[.82rem] tracking-[.1em] text-amber-brand border border-amber-brand/40 px-[16px] py-[6px] rounded-[2px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}
