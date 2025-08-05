function ProductFilter({ search, isInStockOnly, onSearchChange, onIsInStockOnlyChange }) {

    function handleSearchChange(e) {
        const val = e.target.value
        onSearchChange(val)
    }

    function handleIsInStockOnlyChange(e) {
        const val = e.target.checked
        onIsInStockOnlyChange(val)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="Search..." value={search} onChange={handleSearchChange} />
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={isInStockOnly} onChange={handleIsInStockOnlyChange} />
                    {' '}
                    Only show products in stock
                </label>
            </div>
        </div>
    )
}

export default ProductFilter;
