
import ProductCategoryRow from '/src/components/product/ProductCategoryRow'
import ProductItemRow from '/src/components/product/ProductItemRow'

function ProductTable() {
    return (
        <div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Rows will be rendered here */}
                </tbody>
            </table>
            <ProductCategoryRow />
            <ProductItemRow />
        </div>
    )
}

export default ProductTable;
  