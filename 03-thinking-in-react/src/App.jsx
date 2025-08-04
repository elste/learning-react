import { useState } from 'react'
import FilterableProductTable from '/src/components/product/FilterableProductTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FilterableProductTable></FilterableProductTable>
    </>
  )
}

export default App
