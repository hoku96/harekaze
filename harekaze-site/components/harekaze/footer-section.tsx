import { Reveal } from './reveal'

const FOOTER_LINKS = [
  { label: '品書き', href: '#menu' },
  { label: '日本酒', href: '#sake' },
  { label: '雰囲気', href: '#atmosphere' },
  { label: 'Journey', href: '#journey' },
  { label: 'お客様の声', href: '#voices' },
  { label: '店舗案内', href: '#info' },
  { label: '090-5446-2391', href: 'tel:09054462391' },
]

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
