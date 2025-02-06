import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import Link from "next/link"  
import products from "@/data/products"
import { Product } from "@/types/products"

interface ProductsTableProps {
    limit?: number;
    title?: string;
}

const ProductsTable = ({ limit, title } : ProductsTableProps) => {
    //Sort Product in decending order based on date
    const sortedProducts: Product[] = [...products].sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime());

    //Filter product to limit
    const filteredProducts = limit ? sortedProducts.slice(0, limit) : sortedProducts;

  return (
    <div className="mt-10">
        <h3 className="text-2xl mb-4 font-semibold">
            { title? title : 'Products'}
        </h3>
        <Table>
            <TableCaption>A list of recent products</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">Buyer</TableHead>
                    <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                    <TableHead>View</TableHead>
                    
                </TableRow>
            </TableHeader>
            <TableBody>
                { filteredProducts.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell>{product.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{product.brand}</TableCell>
                        <TableCell className="text-right hidden md:table-cell">{product.date}</TableCell>
                        

                        <TableCell>
                            <Link href={`/products/edit/${product.id}`}>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white 
                            font-bold py-2 px-4 rounded text-xs">Edit</button>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}

export default ProductsTable