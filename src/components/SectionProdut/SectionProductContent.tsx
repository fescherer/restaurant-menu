import { TProduct } from '@/types/Product'
import { LucideStar } from 'lucide-react'

type SectionProductContentProps = {
  products: TProduct[]
  isNew: boolean
}

export function SectionProductContent({ products, isNew }: SectionProductContentProps) {
  let real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div className="my-2 flex flex-col gap-2">
      {products.map(product => (
        <div key={product.id} className="flex flex-col items-start rounded bg-foreground p-4">

          <div className="my-2 flex w-full items-center">
            <div className="flex gap-2">
              {isNew && <LucideStar className=" text-primary" />}
              <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
            </div>

            <div className="mx-4 h-1 flex-1 border-b border-dashed border-secondary/20" />

            <p className="flex justify-end font-semibold">
              {real.format(product.price / 100)}
            </p>
          </div>

          <p className="text-text/80">{product.description}</p>
        </div>

      ))}
    </div>
  )
}
