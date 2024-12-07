export const fetchProducts = async (): Promise<any> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products")
    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }
    return response.json()
  } catch (error) {
    throw new Error("Failed to fetch products")
  }
}
