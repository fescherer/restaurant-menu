import { TSection } from '@/types/Product'
import { SectionProductHeader } from './SectionProductHeader'
import { SectionProductContent } from './SectionProductContent'

type SectionProductProps = {
  content: TSection
}

export function SectionProduct({ content }: SectionProductProps) {
  return (
    <section className="m-auto max-w-4xl p-4">
      <SectionProductHeader title={content.section} />
      <SectionProductContent products={content.products} />
    </section>
  )
}
