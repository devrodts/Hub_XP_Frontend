"use client"
import { ProductInterface } from "@/app/interfaces/product"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material"
import Link from "next/link"
import CategoryList from "../CategoryList/CategoryList"
import AddModal from "../AddModal/AddModal"
import { useState } from "react"


export default function ProductList({ products }: { products: ProductInterface[] }) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

  return (
    <div>
      <h1>Products</h1>
      <Button
        onClick={handleOpen}
        variant="contained"
        color="primary"
        style={{ marginBottom: "20px" }}    
      >
        Add New Product
      </Button>
      <AddModal open={open} handleClose={handleClose} handleOpen={handleOpen} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.description}</TableCell>
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

