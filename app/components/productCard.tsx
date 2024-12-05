import Image from "next/image"
import Link from "next/link"

export type ProductCardProps = {
  id: number
  title: string
  description: string
  category: string
  image: string
  price: number
  rating: {
    rate: number
    count: number
  }
}

export default function ProductCard({ data }: any) {
  return (
    <ul className="flex flex-wrap gap-3">
      {data.map((item: ProductCardProps) => (
        <li
          key={item.id}
          className="hover:cursor-pointer hover:shadow-xl transition-all duration-300 rounded-xl max-w-52 w-48 max-h-80 h-72 px-2 py-2 flex flex-col items-center justify-between gap-2 text-gray-600 border overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.title}
            height={100}
            width={90}
            loading="lazy"
          />
          <Link className="text-sm font-medium" href={"/"}>
            {item.title}
          </Link>
          <p className="self-start font-semibold">&euro;{item.price}</p>
        </li>
      ))}
    </ul>
  )
}
