type SectionProductHeaderProps = {
  title: string
}

export function SectionProductHeader({ title }: SectionProductHeaderProps) {
  return (
    <h2 className="font-bold">{title}</h2>
  )
}
