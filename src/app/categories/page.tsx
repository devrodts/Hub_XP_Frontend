import CategoryList from "@/app/components/CategoryList/CategoryList"
import { fetchFromAPI } from "@/app/lib/api"

export const revalidate = 60

async function getCategories() {
  return fetchFromAPI("categories")
}

export default async function CategoriesPage() {
  const categories = await getCategories()
  return <CategoryList categories={categories} />
}

