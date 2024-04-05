'use client'

import { SectionProduct } from './SectionProdut'
import { TDataMenu } from '@/types/data'
import Link from 'next/link'
import { ScrollToTop } from './ScrollToTop'
import { useState } from 'react'

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
    <div className="space-y-6 py-8">
      <input value={search} onChange={e => setSearch(e.target.value)} className="m-auto flex w-full max-w-4xl rounded border border-secondary/20 px-4 py-2 shadow-sm" placeholder="Pesquise..." />

      <div className="m-auto flex max-w-4xl flex-wrap gap-2">
        {data.menu.map(section => (
          <Link className="rounded-full border border-text/20 px-4 py-2 text-sm font-medium text-text/60 shadow-sm transition-all hover:border-primary hover:text-primary" href={`#${section.id}`} key={section.section}>{section.section}</Link>
        ))}
      </div>

      {
        filteredData.map(section => (
          <SectionProduct content={section} key={section.section} />
        ))
      }

      <ScrollToTop />
    </div>
  )
}
