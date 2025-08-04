import ProductFilter from '/src/components/product/ProductFilter'
import ProductTable from '/src/components/product/ProductTable'

function FilterableProductTable() {
    return (
        <div>
            
            <ProductFilter />
            <ProductTable />
        </div>
    )
}

export default FilterableProductTable;
  