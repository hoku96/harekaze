import { Reveal } from './reveal'

const FOOTER_LINKS = [
  { label: 'おしながき', href: '#menu' },
  { label: '日本酒', href: '#sake' },
  { label: '雰囲気', href: '#atmosphere' },
  { label: 'お客様の声', href: '#voices' },
  { label: '店舗案内', href: '#info' },
]

const TABELOG_URL = 'https://tabelog.com/chiba/A1204/A120401/12064482/'

export function FooterSection() {
  return (
    <footer className="py-20 pb-14 text-center border-t border-border">
      <div className="max-w-[1080px] mx-auto px-7">

        <Reveal>
          <div className="font-serif font-normal text-[1.8rem] tracking-[.2em]">
            晴れ<span className="text-amber-brand">風</span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-ink-45 text-[.82rem] tracking-[.14em] mt-[14px]">
            名物&ldquo;生鯖&rdquo;と魚の店 ・ 日吉台のご飯処
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-9 flex gap-5 flex-wrap items-center justify-center">
            <a
              href={TABELOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[.85rem] tracking-[.1em] px-7 py-[13px] rounded-sm transition-colors duration-300 bg-seal text-white hover:bg-[#9e2f24]"
            >
              食べログで予約する
            </a>
            <a
              href="tel:09054462391"
              className="text-[.85rem] text-ink-70 border-b border-amber-brand/40 pb-[2px] transition-colors duration-200 hover:text-amber-brand hover:border-amber-brand"
            >
              090-5446-2391
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <nav
            className="flex gap-[26px] justify-center mt-7 text-[.82rem] text-ink-70 flex-wrap"
            aria-label="フッターナビゲーション"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-[.25s] hover:text-amber-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-9 text-[.72rem] text-ink-45 tracking-[.1em]">
            © ご飯処 晴れ風 ｜ 千葉県富里市日吉台3-34-8 B1
          </p>
        </Reveal>

      </div>
    </footer>
  )
}
