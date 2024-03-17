type SectionProductHeaderProps = {
  title: string
}

export function SectionProductHeader({ title }: SectionProductHeaderProps) {
  return (
    <h2 className="border-b border-primary/20 font-bold">{title}</h2>
  )
}
