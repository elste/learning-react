function ProductFilter() {
    return (
        <div>
            <div>
                <input type="text" placeholder="Search..." />
            </div>
            <div>
                <input type="checkbox"></input> <label>Only show products in stock</label>
            </div>
        </div>
    )
}

export default ProductFilter;
