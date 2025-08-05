import { useState } from 'react';
import ProductFilter from '/src/components/product/ProductFilter'
import ProductTable from '/src/components/product/ProductTable'

function FilterableProductTable({ products }) {

    const [search, setSearch] = useState('');
    const [isInStockOnly, setIsInStockOnly] = useState(false);

    function handleSearchChange(val) {
        setSearch(val)
    }


    function handleIsInStockOnlyChange(val) {
        setIsInStockOnly(val)
    }

    const filteredProducts = () => products.filter(p => p.name.includes(search) && (!isInStockOnly || !!p.stocked))

    return (
        <>
            <ProductFilter search={search} isInStockOnly={isInStockOnly}
                onSearchChange={handleSearchChange} onIsInStockOnlyChange={handleIsInStockOnlyChange} />
            <ProductTable products={filteredProducts()} />
        </>
    )
}

export default FilterableProductTable;
