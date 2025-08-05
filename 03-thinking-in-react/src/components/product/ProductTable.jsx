
import ProductCategoryRow from '/src/components/product/ProductCategoryRow'
import ProductItemRow from '/src/components/product/ProductItemRow'

function ProductTable({ products }) {

    let rows = []
    let cat = null;

    products.forEach(p => {
        if (p.category != cat) {
            rows = [...rows, (<ProductCategoryRow category={p.category} key={p.category}></ProductCategoryRow>)]
            cat = p.category
        }

        rows = [...rows, (<ProductItemRow product={p} key={p.name}></ProductItemRow>)]
    });

    return (
        <>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </>
    )
}

export default ProductTable;
