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
    <div className="divide-y divide-secondary/20">
      {products.map(product => (
        <div key={product.id} className="flex p-4">
          <div className="h-20 w-16 bg-primary" />

          <div className="mx-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-text/80">{product.description}</p>
          </div>

          <p className="flex flex-1 justify-end font-semibold">
            {real.format(product.price / 100)}
          </p>
        </div>
      ))}
    </div>
  )
}
