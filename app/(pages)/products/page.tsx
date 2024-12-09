"use client"

import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getAllCategory, getAllProducts, getProductByCategory } from "@/app/api"
import ProductCard from "@/app/components/productCard"
import { ProductListSkeleton } from "@/app/components/productListSkeleton"
import { Input } from "@/components/ui/input"
import { ProductCardProps } from "@/app/type"

const useProductQueries = (categoryName: string) => {
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  })

  const categoryQuery = useQuery({
    queryKey: ["products", "category"],
    queryFn: getAllCategory,
  })

  const categoryDataQuery = useQuery({
    queryKey: ["products", "category", categoryName],
    queryFn: () => getProductByCategory(categoryName),
    enabled: categoryName.length > 0,
  })

  return { productQuery, categoryQuery, categoryDataQuery }
}

const ErrorDisplay = ({ error }: { error: string }) => (
  <span>Error: {error}</span>
)

export default function Products() {
  const [categoryName, setCategoryName] = useState("")
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState<string>("asc")

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.currentTarget.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryName(e.target.value)
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value)
  }

  const { productQuery, categoryQuery, categoryDataQuery } =
    useProductQueries(categoryName)

  const isLoading = productQuery.isLoading || categoryQuery.isLoading
  const hasError =
    productQuery.isError || categoryQuery.isError || categoryDataQuery.isError

  const errorMessage =
    productQuery.error instanceof Error
      ? productQuery.error.message
      : categoryQuery.error instanceof Error
      ? categoryQuery.error.message
      : categoryDataQuery.error instanceof Error
      ? categoryDataQuery.error.message
      : "An unknown error occurred."

  if (isLoading) {
    return <ProductListSkeleton />
  }

  if (hasError) {
    return <ErrorDisplay error={errorMessage} />
  }

  const allCategory = categoryQuery.data ?? []
  const productData = productQuery.data ?? []
  const categoryData = categoryDataQuery.data ?? productData

  const filteredProducts = categoryData.filter((product: ProductCardProps) => {
    if (search.trim() === "") return true
    return product.title.toLowerCase().includes(search.toLowerCase())
  })

  const sortedProducts = [...filteredProducts].sort(
    (a: ProductCardProps, b: ProductCardProps) => {
      const priceA = a.price || 0
      const priceB = b.price || 0

      const multiplier = sortOrder === "asc" ? 1 : -1

      return (priceA - priceB) * multiplier
    }
  )

  return (
    <main className="py-10">
      <section className="flex flex-col gap-2 max-w-3xl m-auto mb-8 p-1">
        <h2 className="text-lg font-bold">Filter products</h2>
        <article className="flex items-center gap-5 h-10 text-sm">
          <select
            name="category"
            className="border rounded-md px-6 py-2 capitalize [&_option]:rounded-sm"
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {allCategory.map((item: string) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <Input placeholder="Search product" onChange={handleChange} />
          <select
            name="sort"
            className="border rounded-md px-6 py-2"
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </article>
      </section>

      <ProductCard data={sortedProducts} />
    </main>
  )
}
