import OrderList from "@/app/components/OrderList/OrderList"
import { fetchFromAPI } from "@/app/lib/api"

export const revalidate = 60

async function getOrders() {
  return fetchFromAPI("orders")
}

export default async function OrdersPage() {
  const orders = await getOrders()
  return <OrderList orders={orders} />
}

