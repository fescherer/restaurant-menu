import { TProduct } from '@/types/Product'

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
        <div key={product.id} className={`flex items-center rounded bg-foreground p-4 shadow-sm `} style={{ backgroundColor: isNew ? product.color : '' }}>
          <div className="my-2">
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

  // return (
  //   <div className="divide-y divide-secondary/20">
  //     {products.map(product => (
  //       <div key={product.id} className="flex p-4">
  //         <div className="h-20 w-16 bg-secondary" />

  //         <div className="mx-4">
  //           <h3 className="text-lg font-semibold">{product.name}</h3>
  //           <p className="text-text/80">{product.description}</p>
  //         </div>

  //         <p className="flex flex-1 justify-end font-semibold">
  //           {real.format(product.price / 100)}
  //         </p>
  //       </div>
  //     ))}
  //   </div>
  // )
}
