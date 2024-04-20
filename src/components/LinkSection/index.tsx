import { TSection } from '@/types/Product'
import { sectionIcons } from '@/utils/icons'
import Link from 'next/link'

type LinkSectionProps = {
  section: TSection
}

export function LinkSection({ section }: LinkSectionProps) {
  return (
    <div className="flex min-h-32 gap-2 overflow-hidden rounded">
      <Link className="w-full bg-center text-xl font-medium text-text/60 shadow-sm transition-all hover:scale-110" style={{ backgroundImage: `url(/pin/${section.id}.png)` }} href={`#${section.id}`}>
        <div className="m-auto flex size-full items-center justify-center gap-2 bg-[#464646bb] px-4 py-2 text-textOnPrimary">
          <span>{sectionIcons[section.id]}</span>
          <span>{section.section}</span>
        </div>
      </Link>
    </div>
  )
}
