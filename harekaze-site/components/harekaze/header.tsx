export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border backdrop-blur-[10px]"
      style={{ background: 'rgba(250,247,240,0.85)' }}
    >
      <div className="max-w-[1080px] mx-auto px-7 flex items-center justify-between h-16">
        <a href="#top" className="font-serif font-bold tracking-[.18em] text-[1.05rem]">
          晴れ<span className="text-amber-brand">風</span>
        </a>

        <nav className="hidden md:flex gap-[30px] text-[.82rem] tracking-[.14em] text-ink-70" aria-label="メインナビゲーション">
          <a href="#menu" className="transition-colors duration-[.25s] hover:text-amber-brand">品書き</a>
          <a href="#sake" className="transition-colors duration-[.25s] hover:text-amber-brand">日本酒</a>
          <a href="#atmosphere" className="transition-colors duration-[.25s] hover:text-amber-brand">雰囲気</a>
          <a href="#journey" className="transition-colors duration-[.25s] hover:text-amber-brand">Journey</a>
          <a href="#voices" className="transition-colors duration-[.25s] hover:text-amber-brand">お客様の声</a>
          <a href="#info" className="transition-colors duration-[.25s] hover:text-amber-brand">店舗案内</a>
        </nav>

        <a
          href="https://tabelog.com/chiba/A1204/A120401/12064482/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-amber-brand text-amber-brand px-4 py-[7px] rounded-sm text-[.78rem] tracking-[.12em] transition-colors duration-300 whitespace-nowrap hover:bg-amber-brand hover:text-sumi"
        >
          食べログで予約
        </a>
      </div>
    </header>
  )
}
