import axios from "axios"

export const allProducts = axios.create({
  baseURL: "https://fakestoreapi.com",
})

export const getAllProducts = async (): Promise<any> => {
  const response = await allProducts.get("/products")
  return response.data
}

export const getAllCategory = async (): Promise<any> => {
  const response = await allProducts.get("/products/categories")
  return response.data
}

export const getProductByCategory = async (category: string): Promise<any> => {
  const response = await allProducts.get(`/products/category/${category}`)
  return response.data
}
