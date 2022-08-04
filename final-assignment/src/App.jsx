import { ProductsItem } from "./components/ProductsItem"
import React, { useState } from "react"
import { Header } from "./components/Header"
import { Products } from "./components/Products"

export function App() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [productID, setProductID] = useState(0)
    const [deleteProduct, setDeleteProduct] = useState(false)
    const [sorting, setSorting] = useState("")

    return (
        <React.Fragment>
            <div className="Header">
                <Header
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    setSorting={setSorting}
                />
            </div>
            <div className="ProductGrid">
                {products.map((product) => {
                    return (
                        <ProductsItem
                            key={product.id}
                            {...product}
                            setProductID={setProductID}
                            uniqueProductId={product.id}
                            setDeleteProduct={setDeleteProduct}
                        />
                    )
                })}
            </div>
        </React.Fragment>
    )
}
