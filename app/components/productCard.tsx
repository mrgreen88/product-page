import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: string
  title: string
  image: string
  category: string
  price: number
}

export default function ProductCard({ data }: { data: ProductCardProps[] }) {
  return (
    <ul className="flex justify-center flex-wrap gap-3 m-auto">
      {data?.map((item: ProductCardProps) => (
        <Link
          href={`/products/${item.id}`}
          key={item.id}
          className="cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 rounded-xl max-w-80 w-[300px] h-[360px] px-3 pt-1 pb-3 flex flex-col items-center gap-1 text-gray-600 border overflow-hidden [&_p]:self-start"
        >
          <div className="h-3/4 flex items-center overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              className="w-40 h-auto bg-transparent"
              width={160}
              height={160}
              loading="lazy"
            />
          </div>
          <div className="text-sm font-medium capitalize flex flex-col w-full justify-between h-1/4 p-1">
            <p>{item.title.split(" ", 5).slice(0, 5).join(" ")}</p>
            <p className="text-xs font-semibold">{item.category}</p>
            <p className="font-semibold text-lg">&euro;{item.price}</p>
          </div>
        </Link>
      ))}
    </ul>
  )
}
