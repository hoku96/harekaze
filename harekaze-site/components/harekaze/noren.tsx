const SWAY_DELAY_CLASSES = ['', 'noren-sway-delay-1', 'noren-sway-delay-2']

function NorenPanel({
  char,
  caption,
  hasSeal = false,
  swayIndex,
}: {
  char: string
  caption?: string
  hasSeal?: boolean
  swayIndex: number
}) {
  return (
    <div className="relative w-[118px] max-[820px]:w-[86px] overflow-hidden rounded-b-[4px]">
      {/* Swaying fabric: transform-only animation, seal stamp lives outside this so it doesn't get dragged along */}
      <div
        className={`noren-sway ${SWAY_DELAY_CLASSES[swayIndex]} h-full flex flex-col items-center pt-10`}
        style={{
          background: 'linear-gradient(180deg, #e8832a, #c86e1e)',
          boxShadow: '0 30px 60px -30px rgba(0,0,0,0.8)',
        }}
      >
        {/* Top cap bar */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-amber-deep" aria-hidden="true" />

        {/* Main character */}
        <span
          className="vertical-rl text-orientation-upright font-serif font-extrabold text-sumi tracking-[.22em]"
          style={{ fontSize: 'clamp(1.9rem, 4vw, 2.6rem)' }}
          aria-hidden="true"
        >
          {char}
        </span>

        {/* Caption text */}
        {caption && (
          <span
            className="noren-caption font-serif font-semibold text-[.72rem] tracking-[.3em] mt-[14px]"
            style={{ color: 'rgba(42,38,34,0.7)' }}
            aria-hidden="true"
          >
            {caption}
          </span>
        )}
      </div>

      {/* Seal stamp: independent of the fabric sway, stays fixed */}
      {hasSeal && (
        <div
          className="absolute -right-[6px] bottom-[44px] z-[5] w-[76px] h-[76px] rounded-full bg-seal text-white flex items-center justify-center font-serif font-bold text-[.72rem] tracking-[.05em] text-center leading-[1.15]"
          style={{
            boxShadow: '0 10px 24px -8px rgba(178,59,46,0.7)',
            transform: 'rotate(-8deg)',
          }}
          aria-hidden="true"
        >
          生鯖
          <br />
          と魚
        </div>
      )}
    </div>
  )
}

export function Noren() {
  return (
    <div
      className="relative flex justify-center items-stretch gap-[18px] h-[520px] max-[820px]:h-[360px]"
      aria-label="暖簾「晴れ風」"
    >
      {/* Decorative wind lines SVG */}
      <svg
        className="absolute inset-0 pointer-events-none opacity-35 w-full h-full"
        viewBox="0 0 300 520"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M10 60 q60 -20 120 0 t150 0"
          stroke="#e8832a"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0 120 q70 -22 140 0 t150 0"
          stroke="#e8832a"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 470 q60 20 120 0 t150 0"
          stroke="#e8832a"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <NorenPanel char="晴" swayIndex={0} />
      <NorenPanel char="れ" swayIndex={1} />
      <NorenPanel char="風" caption="ご飯処" hasSeal swayIndex={2} />
    </div>
  )
}
