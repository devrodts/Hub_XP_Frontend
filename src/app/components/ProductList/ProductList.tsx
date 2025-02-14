import { ProductInterface } from "@/app/interfaces/product"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material"
import Link from "next/link"


export default function ProductList({ products }: { products: ProductInterface[] }) {
  return (
    <div>
      <h1>Products</h1>
      <Button
        component={Link}
        href="/products"
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
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Button
                    component={Link}
                    href={`/products/${product._id}/edit`}
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

