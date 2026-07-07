import { Reveal } from './reveal'
import { DishImage } from './dish-image'

function DishCard({
  photo,
  badge,
  title,
  en,
  description,
}: {
  photo?: string
  badge?: string
  title: string
  en: string
  description: string
}) {
  return (
    <div className="h-full border border-border bg-white rounded-sm p-6 pb-9 transition-all duration-300 hover:border-amber-brand/40 hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(0,0,0,.06)]">
      <DishImage src={photo} alt={title.replace('\n', ' ')} />
      <div className="pt-7 px-4">
        {badge && (
          <span className="font-serif text-[.68rem] tracking-[.2em] text-amber-brand border border-amber-brand px-[11px] py-1 rounded-sm inline-block mb-4">
            {badge}
          </span>
        )}
        <h3 className="font-serif font-medium text-[1.4rem] tracking-[.06em] leading-[1.5] whitespace-pre-line">
          {title}
        </h3>
        <div className="text-ink-45 text-[.74rem] tracking-[.16em] mt-2">{en}</div>
        <p className="text-ink-70 text-[.92rem] mt-4 leading-[2] whitespace-pre-line">{description}</p>
      </div>
    </div>
  )
}

export function MenuSection() {
  return (
    <section className="py-32 relative" id="menu">
      <div className="max-w-[1080px] mx-auto px-7">

        {/* Section heading */}
        <Reveal>
          <div className="mb-16 flex items-baseline gap-5 flex-wrap">
            <span className="font-serif text-seal text-[1.1rem] tracking-[.2em]">壱</span>
            <h2
              className="font-serif font-normal tracking-[.12em]"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
            >
              おしながき
            </h2>
            <span className="text-ink-45 text-[.78rem] tracking-[.34em] self-center">
              SIGNATURE DISHES
            </span>
          </div>
        </Reveal>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ── 名物: 生鯖刺身定食 (featured, full-width) ── */}
          <Reveal className="md:col-span-2">
            <div className="border border-border bg-white rounded-sm p-6 transition-all duration-300 hover:border-amber-brand/40 hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(0,0,0,.06)] grid grid-cols-1 md:grid-cols-[280px_1fr] gap-9 items-center overflow-hidden">
              <DishImage src={undefined} alt="むじょか 生鯖刺身定食" priority />
              <div className="pr-4 pb-3">
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="font-serif font-extrabold text-seal opacity-90"
                    style={{ fontSize: '1.6rem' }}
                    aria-hidden="true"
                  >
                    鯖
                  </span>
                  <span className="font-serif text-[.68rem] tracking-[.2em] text-amber-brand border border-amber-brand px-[11px] py-1 rounded-sm inline-block">
                    名物
                  </span>
                </div>
                <h3 className="font-serif font-medium text-[1.4rem] tracking-[.06em] leading-[1.5]">
                  むじょか 生鯖刺身定食
                </h3>
                <div className="text-ink-45 text-[.74rem] tracking-[.16em] mt-2">
                  MUJOKA RAW MACKEREL SET
                </div>
                <p className="text-ink-70 text-[.92rem] mt-4 leading-[2] whitespace-pre-line">
                  {'生の鯖を、厚めに引いた刺身で。\n炊きたてのご飯と、自家製の味噌汁と。\n晴れ風といえば、まずこれを。'}
                </p>
              </div>
            </div>
          </Reveal>

          {/* 唐揚げ定食 */}
          <Reveal>
            <DishCard
              badge="人気"
              title={'晴れ式\n鶏の唐揚げ定食'}
              en="HARE-STYLE KARAAGE SET"
              description={'下味からつくる、鶏の唐揚げです。\n外は香ばしく、中はジューシーに。\nランチの定番として、長く愛されています。'}
            />
          </Reveal>

          {/* 刺盛り */}
          <Reveal>
            <DishCard
              title={'刺盛り\n盛り合わせ'}
              en="SASHIMI ASSORTMENT"
              description={'その日の仕入れから、旬の魚を。\n真鯛のお刺身をはじめ、一切れを厚く。\n日本酒との一献に、よく合う盛り合わせです。'}
            />
          </Reveal>
        </div>

      </div>
    </section>
  )
}
