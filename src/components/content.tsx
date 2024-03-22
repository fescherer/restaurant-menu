import { SectionProduct } from './SectionProdut'
import { promises as fs } from 'fs'
import { TDataMenu } from '@/types/data'

export async function Content() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8')
  const data = JSON.parse(file) as TDataMenu

  return (
    <div className="space-y-6 py-8">
      {
        data.menu.map(section => (
          <SectionProduct content={section} key={section.section} />
        ))
      }
    </div>
  )
}
