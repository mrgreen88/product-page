"use client"

import { useQuery } from "@tanstack/react-query"
import ProductCard from "../components/productCard"
import { fetchProducts } from "../api"

export default function Products() {
  const { status, isLoading, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: () => fetchProducts(),
  })

  if (isLoading) {
    return <span>Loading Product List...</span>
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>
  }
  console.log(data)

  return (
    <main className="py-10">
      <ProductCard data={data} />
    </main>
  )
}
