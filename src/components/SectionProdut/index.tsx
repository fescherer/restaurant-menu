import { TSection } from '@/types/Product'
import { SectionProductHeader } from './SectionProductHeader'
import { SectionProductContent } from './SectionProductContent'

type SectionProductProps = {
  content: TSection

}

export function SectionProduct({ content }: SectionProductProps) {
  if (!content.products.length) return <></>

  return (
    <section className="p-4" id={content.id}>
      <SectionProductHeader title={content.section} />
      <SectionProductContent products={content.products} isNew={content.section === 'Novidades'} />
    </section>
  )
}
