import React from "react"
import ProductsTable from "@/components/products/ProductsTable"
import BackButton from "@/components/BackButton"
import ProductsPagination from "@/components/products/ProductsPagination"


const ProductPage = () => {
  return (
    <>
    <BackButton text="Go Back" link="/"/>
    <ProductsTable />
    <ProductsPagination />
    </>
  )
}

export default ProductPage