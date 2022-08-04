import React, { useEffect, useState } from "react"
import { ProductsItem } from "./ProductsItem"

export function Products() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [productID, setProductID] = useState(0)
    const [deleteProduct, setDeleteProduct] = useState(false)
    const [sorting, setSorting] = useState("")

    //Get all products & get all availavle categories
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => setProducts(res))

        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((res) => setCategories(res))
    }, [])

    //Get products in a specific category
    useEffect(() => {
        //bouncer
        if (!selectedCategory) return
        fetch(
            `https://fakestoreapi.com/products/category/${selectedCategory}?sort=${sorting}`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setProducts(res)
            })
            .catch((error) => console.log(error))
    }, [selectedCategory, sorting])

    //see the product detail:
    useEffect(() => {
        //bouncer
        if (!productID || deleteProduct) return
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then((res) => res.json())
            .then((res) => console.log("the details of the product = ", res))
    }, [productID])

    //Delete a Product
    useEffect(() => {
        //bouncer
        if (!productID || !deleteProduct) return
        fetch(`https://fakestoreapi.com/products/${productID}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((res) => console.log("deleted product = ", res))
    }, [productID, deleteProduct])
    // The product will not be deleted on the database. but if you sent data successfully it will return you the fake deleted product.

    return (
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
                //if you dont pass any product as props and if not design Product props it would be only repeating product based on array length
            })}
        </div>
    )
}
