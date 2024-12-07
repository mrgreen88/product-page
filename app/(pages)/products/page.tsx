"use client"
import { fetchProducts } from "@/app/api"
import ProductCard from "@/app/components/productCard"
import { ProductListSkeleton } from "@/app/components/productListSkeleton"
import { useQuery } from "@tanstack/react-query"

export default function Products() {
  const { status, isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  })

  if (isLoading) {
    return (
      <>
        <ProductListSkeleton />
      </>
    )
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>
  }

  return (
    <main className="py-10">
      <ProductCard data={data} />
    </main>
  )
}
