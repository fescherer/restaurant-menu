import { Content } from '@/components/content'
import { TDataMenu } from '@/types/data'
import { promises as fs } from 'fs'

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8')
  const data = JSON.parse(file) as TDataMenu

  return (
    <Content data={data} />
  )
}
