import { Reveal } from './reveal'

// 写真を追加する際は、DishImage(components/harekaze/dish-image.tsx)と同様の
// aspect比固定プレースホルダー構造を流用してください。今回はテキストのみで構成しています。

const INSTAGRAM_URL = 'https://www.instagram.com/harekaze.hiyoshidai/'

const FEATURES = [
  {
    title: '隠れ家',
    text: '日吉台のビル、地下1階。',
  },
  {
    title: '席のゆとり',
    text: '22席。カウンター6席と、小上がり座敷。',
  },
  {
    title: '少人数から、貸切まで',
    text: '20名様以下の貸切に対応します。',
  },
  {
    title: '居心地への配慮',
    text: '全席禁煙。屋外に喫煙スペースを設けています。',
  },
]

export function AtmosphereSection() {
  return (
    <section className="py-32 relative" id="atmosphere">
      <div className="max-w-[1080px] mx-auto px-7">

        {/* Section heading */}
        <Reveal>
          <div className="mb-16 flex items-baseline gap-5 flex-wrap">
            <span className="font-serif text-seal text-[1.1rem] tracking-[.2em]">弐</span>
            <h2
              className="font-serif font-normal tracking-[.12em]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
            >
              晴れ風の、時間
            </h2>
            <span className="text-ink-45 text-[.78rem] tracking-[.34em] self-center">
              ATMOSPHERE
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-ink-70 text-[1rem] leading-[2] max-w-[520px]">
            ビルの地下、一階分だけ降りた場所に。
            <br />
            案内がなければ、通り過ぎてしまうかもしれません。
            <br />
            そのぶん、静かな時間が流れています。
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.06 + i * 0.04}>
              <div className="border-l-2 border-amber-brand/40 pl-6 py-1">
                <h3 className="font-serif font-medium text-[1.05rem] tracking-[.08em]">
                  {f.title}
                </h3>
                <p className="text-ink-70 text-[.92rem] mt-2 leading-[1.9]">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 pt-14 border-t border-border">
            <p className="text-ink-70 text-[.98rem] leading-[2]">
              日本酒も、料理も。
              <br />
              その日いちばんを、お出ししています。
              <br />
              移りゆく旬は、Instagramで日々お届けします。
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block font-sans text-[.9rem] tracking-[.12em] px-[30px] py-[15px] rounded-sm transition-colors duration-300 bg-seal text-white hover:bg-[#9e2f24]"
            >
              ＠harekaze.hiyoshidai を見る
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
