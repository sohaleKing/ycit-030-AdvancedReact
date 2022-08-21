import React, { useEffect, useState } from "react"
import { Header } from "./components/Header"

export function App() {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [sorting, setSorting] = useState("")

    const [products, setProducts] = useState([])
    const [productID, setProductID] = useState(0)
    const [deleteProduct, setDeleteProduct] = useState(false)

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
        <React.Fragment>
            <div className="Header">
                <Header
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    setSorting={setSorting}
                    products={products}
                    setProducts={setProducts}
                    productID={productID}
                    setProductID={setProductID}
                    deleteProduct={deleteProduct}
                    setDeleteProduct={setDeleteProduct}
                />
            </div>
        </React.Fragment>
    )
}
