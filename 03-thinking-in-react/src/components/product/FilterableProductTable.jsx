import ProductFilter from '/src/components/product/ProductFilter'
import ProductTable from '/src/components/product/ProductTable'

function FilterableProductTable({ products }) {
    return (
        <>
            <ProductFilter />
            <ProductTable products={products} />

        </>
    )
}

export default FilterableProductTable;
