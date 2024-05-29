import './App.css'
import products from "./assets/products.json"
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import { getAllProducts } from './services/productsService'


function App() {
  const [ totalProducts, setTotalProducts ] = useState(0)
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ search, setSearch ] = useState("")
  const [ productsApi, setProductsApi ] = useState([])

  const addToCart = (price) => {
    setTotalProducts(totalProducts + 1)
    setTotalPrice(totalPrice + price)
  }

  const wipeCart = () => {
    setTotalProducts(0)
    setTotalPrice(0)
  }

  const searchProduct = (text) => {
    setSearch(text)
  }

  const getProductsApi = async () => {
    const result = await getAllProducts()
    setProductsApi(result)
  }

  useEffect(() => {
    getProductsApi()
  }, [])

  return (
    <>
      <Cart totalPrice={totalPrice} totalProducts={totalProducts} wipeCart={wipeCart}/>
      <SearchBar searchProduct={searchProduct}/>
      <ProductList productsData={productsApi} addToCart={addToCart} search={search}/>
    </>
  )
}

export default App
