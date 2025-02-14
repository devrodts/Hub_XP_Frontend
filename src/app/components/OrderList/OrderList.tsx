import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material"
import Link from "next/link"

// This would typically come from an API
const orders = [
  { id: 1, customer: "John Doe", total: 99.99, status: "Completed" },
  { id: 2, customer: "Jane Smith", total: 149.99, status: "Processing" },
  { id: 3, customer: "Bob Johnson", total: 79.99, status: "Shipped" },
]

export default function OrderList() {
  return (
    <div>
      <h1>Orders</h1>
      <Button component={Link} href="/orders/new" variant="contained" color="primary" style={{ marginBottom: "20px" }}>
        Create New Order
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    href={`/orders/${order.id}/edit`}
                    variant="outlined"
                    size="small"
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Button>
                  <Button variant="outlined" color="secondary" size="small">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

