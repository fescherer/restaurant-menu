import { PRODUCTS_DATA } from '@/utils/data'
import { SectionProduct } from './SectionProdut'

const sections = PRODUCTS_DATA

export function Content() {
  return (
    <div className="space-y-6">
      {
        sections.map(section => (
          <SectionProduct content={section} key={section.section} />
        ))
      }
    </div>
  )
}
