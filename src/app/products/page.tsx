import ProductList from "@/app/components/ProductList/ProductList"
import { fetchFromAPI } from "@/app/lib/api"

export const revalidate = 60

async function getProducts() {
  return fetchFromAPI("products")
}

export default async function ProductsPage() {
  const products = await getProducts()
  return <ProductList products={products} />
}

