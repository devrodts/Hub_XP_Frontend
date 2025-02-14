import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material"
import Link from "next/link"

const products = [
  { id: 1, name: "Product 1", price: 19.99, category: "Category 1" },
  { id: 2, name: "Product 2", price: 29.99, category: "Category 2" },
  { id: 3, name: "Product 3", price: 39.99, category: "Category 1" },
]

export default function ProductList() {
  return (
    <div>
      <h1>Products</h1>
      <Button
        component={Link}
        href="/products/new"
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px" }}
      >
        Add New Product
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    href={`/products/${product.id}/edit`}
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

