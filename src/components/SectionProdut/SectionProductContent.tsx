import { TProduct } from '@/types/Product'
import Image from 'next/image'

type SectionProductContentProps = {
  products: TProduct[]
}

const colors = [
  'hsl(188, 49%, 75%, 0.2)',
  'hsl(14, 86%, 64%, 0.2)',
  'hsl(292, 42%, 70%, 0.2)',
  'hsl(349, 42%, 70%, 0.2)',
  'hsl(131, 42%, 88%, 0.2)',
  'hsl(49, 42%, 89%, 0.2)',
  'hsl(23, 42%, 78%, 0.2)',
  'hsl(54, 77%, 88%, 0.5)',
]

export function SectionProductContent({ products }: SectionProductContentProps) {
  let real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  function getColor(): string {
    const item = colors[Math.floor(Math.random() * colors.length)]
    return item
  }

  return (
    <div className="my-2 grid grid-cols-2 gap-2  md:grid-cols-3 md:gap-3">
      {products.map(product => (
        <div key={product.id} className="flex flex-col rounded  p-4" style={{ backgroundColor: getColor() }}>
          {/* <div className="m-auto h-24 w-32 bg-secondary" /> */}
          <Image src={`/images/${product.id}.png`} className="m-auto" alt={product.name} width={128} height={96} />

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
