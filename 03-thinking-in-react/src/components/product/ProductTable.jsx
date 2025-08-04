
import ProductCategoryRow from '/src/components/product/ProductCategoryRow'
import ProductItemRow from '/src/components/product/ProductItemRow'

function ProductTable() {
    return (
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductCategoryRow />
                    <ProductItemRow />
                    <ProductItemRow />
                    <ProductItemRow />
                    <ProductCategoryRow />
                    <ProductItemRow />
                </tbody>
            </table>
    )
}

export default ProductTable;
