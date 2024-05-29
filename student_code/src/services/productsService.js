import { api } from "./index"

export const getAllProducts = async () => {
  try {
    const { data } = await api.get("products")
    return data
  } catch (error) {
    console.error("Error fetching products: ", error)
  }
}