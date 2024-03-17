import { TProduct } from '@/types/Product'

type SectionProductContentProps = {
  products: TProduct[]
}

export function SectionProductContent({ products }: SectionProductContentProps) {
  let real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <div className="divide-y divide-neutral-300">
      {products.map(product => (
        <div key={product.id} className="flex p-4">
          <div className="h-20 w-16 bg-slate-700" />

          <div className="mx-4">
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-neutral-700">{product.description}</p>
          </div>

          <p className="flex flex-1 justify-end font-medium">
            {real.format(product.price / 100)}
          </p>
        </div>
      ))}
    </div>
  )
}
