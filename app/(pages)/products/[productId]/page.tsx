"use client"

import ProductCardDetails from "@/app/components/productCardDetails"
import { ProductCardSkeleton } from "@/app/components/productCardSkeleton"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "next/navigation"

export default function ProductId() {
  const { productId } = useParams()
  const { status, isFetching, data, error } = useQuery({
    queryKey: [productId],
    queryFn: async () =>
      fetch(`https://fakestoreapi.com/products/${productId}`).then((response) =>
        response.json()
      ),
  })

  if (isFetching) {
    return (
      <>
        <ProductCardSkeleton />
      </>
    )
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>
  }

  return (
    <main className="py-10 max-w-7xl m-auto">
      <ProductCardDetails data={data} />
    </main>
  )
}
