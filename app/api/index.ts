export const fetchProducts = async (query = ""): Promise<any> => {
  try {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
  } catch (error) {
    throw new Error("Failed to fetch products")
  }
}
