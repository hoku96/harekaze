import { Reveal } from './reveal'

const VOICES = [
  {
    text: '落ち着いた店内で、ゆっくり食事を楽しめました。丁寧で温かみのある接客が印象に残っています。',
    name: 'I.D. さん',
    role: 'ローカルガイド',
    initial: 'I',
  },
  {
    text: 'おすすめの刺盛りを注文。一切れが分厚く、まさに旬を食べていると実感できる贅沢さでした。',
    name: 'S.M. さん',
    role: '',
    initial: 'S',
  },
  {
    text: 'おもてなしの心が詰まった和食屋さん。味噌汁一つ、サラダのドレッシング一つに手間を感じました。',
    name: 'M.F. さん',
    role: 'ローカルガイド',
    initial: 'M',
  },
]

export function VoicesSection() {
  return (
    <section className="py-32 relative" id="voices">
      <div className="max-w-[1080px] mx-auto px-7">

        {/* Section heading */}
        <Reveal>
          <div className="mb-16 flex items-baseline gap-5 flex-wrap">
            <span className="font-serif text-seal text-[1.1rem] tracking-[.2em]">肆</span>
            <h2
              className="font-serif font-normal tracking-[.12em]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
            >
              お客様の声
            </h2>
            <span className="text-ink-45 text-[.78rem] tracking-[.34em] self-center">
              FROM OUR GUESTS
            </span>
          </div>
        </Reveal>

        {/* Voices grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-[900px]:grid-cols-1">
          {VOICES.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.06}>
              <article className="border border-border bg-white rounded-sm px-8 py-9 relative transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,.06)]">
                {/* Opening quote mark */}
                <div
                  className="font-serif text-seal text-[2.4rem] leading-[0.6] opacity-50"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <p className="text-washi text-[.95rem] leading-[1.95] mt-3 mb-5">{v.text}</p>

                {/* Attribution */}
                <div className="flex items-center gap-[11px] text-[.8rem] text-ink-70">
                  {/* Avatar circle */}
                  <div
                    className="w-[34px] h-[34px] rounded-full flex-shrink-0 flex items-center justify-center font-serif font-bold text-sumi text-[.8rem]"
                    style={{ background: 'linear-gradient(135deg, #e8832a, #b23b2e)' }}
                    aria-hidden="true"
                  >
                    {v.initial}
                  </div>
                  <div>
                    <div>{v.name}</div>
                    <div className="text-amber-brand text-[.72rem] tracking-[1px]">
                      ★★★★★{v.role ? ` ・ ${v.role}` : ''}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
