import Image from 'next/image'

export function DishImage({
  src,
  alt,
  priority,
}: {
  src?: string
  alt: string
  priority?: boolean
}) {
  if (!src) {
    return (
      <div
        className="relative aspect-[4/5] w-full rounded-sm border border-border bg-[#F2ECDF] flex items-center justify-center"
        aria-label={`${alt}（画像準備中）`}
      >
        <span className="text-ink-45 text-[.68rem] tracking-[.25em]">画像準備中</span>
      </div>
    )
  }

  return (
    <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  )
}
