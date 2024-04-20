'use client'

import { SectionProduct } from './SectionProdut'
import { TDataMenu } from '@/types/data'
import { ScrollToTop } from './ScrollToTop'
import { useState } from 'react'
import { LinkSection } from './LinkSection'
import { LucideTreePalm } from 'lucide-react'

type ContentProps = {
  data: TDataMenu
}

export function Content({ data }: ContentProps) {
  const [search, setSearch] = useState('')

  const safeFilter = search.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const rg = new RegExp(`^(?=.*\\b${safeFilter}).*$`, 'gmi')

  const filteredData = search
    ? data.menu.map(section => ({
      ...section, products: section?.products.filter(product =>
        product.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().match(rg)
      ),
    }))
    : data.menu

  return (
    <div className="m-auto max-w-4xl space-y-6 py-8">
      <input value={search} onChange={e => setSearch(e.target.value)} className=" flex w-full  rounded border border-secondary/20 px-4 py-2 shadow-sm" placeholder="Pesquise..." />

      <div className="flex flex-wrap gap-2">
        {data.menu.map(section => (
          <LinkSection key={section.section} section={section} />
        ))}
      </div>

      <div className="space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="font-balsamiq text-4xl font-medium text-text/80">Bem vindo</h2>
          <p className="text-text/80">Experimente nossos salgados de massa de mandioca 😋</p>
        </div>

        <div className="flex items-center">
          <div className="mx-4 h-1 flex-1 border-b border-secondary/20" />
          <LucideTreePalm />
          <div className="mx-4 h-1 flex-1 border-b border-secondary/20" />
        </div>
      </div>

      <div className="">
        {
          filteredData.map(section => (
            <SectionProduct content={section} key={section.section} />
          ))
        }
      </div>

      <ScrollToTop />
    </div>
  )
}
