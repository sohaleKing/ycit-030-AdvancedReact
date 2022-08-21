import { ProductsItem } from "./ProductsItem"

export function Products(props) {
    const { products, setProductID, setDeleteProduct } = props
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
            })}
        </div>
    )
}
