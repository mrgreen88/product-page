import Image from "next/image"
import Link from "next/link"
import { ProductCardProps } from "../type"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"

export default function ProductCardDetails({
  data,
}: {
  data: ProductCardProps
}) {
  const { description, title, category, image, price, rating } = data

  return (
    <section className="flex gap-5 justify-center w-full">
      <article className="w-2/3 flex flex-col justify-center gap-4 p-2">
        <div className="flex justify-center">
          <Image
            src={image}
            alt={title}
            height={500}
            width={500}
            loading="lazy"
            className="bg-transparent"
          />
        </div>
        <div className="flex flex-col text-lg text-gray-600 self-end mr-10">
          <Link href={"/"}>
            Reviews: <span>{rating.count}</span>
          </Link>
          <p>
            Rating: <span>{rating.rate}</span>
          </p>
        </div>
      </article>
      <article className="w-1/3 p-2">
        <div className="transition-all duration-300 rounded-xl flex flex-col items-center gap-5 justify-between text-gray-600 text-center [&_h3]:text-2xl capitalize">
          <h3>{title}</h3>
          <p className="font-semibold text-2xl">&euro;{price}</p>
          <div className="flex gap-3 items-center">
            <Button variant={"default"} className="text-base font-semibold">
              <span>Add to card</span>
              <ShoppingCart size={24} strokeWidth={3} />
            </Button>
            <Button
              variant={"default"}
              className="text-base font-semibold bg-red-600 hover:bg-red-600/90"
            >
              <span>Save for later</span>
              <Heart size={24} strokeWidth={3} />
            </Button>
          </div>
          <p>{description}</p>
          <Button variant={"outline"}>{category}</Button>
        </div>
      </article>
    </section>
  )
}
