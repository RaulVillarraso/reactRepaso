import ProductCard from "../ProductCard/ProductCard"
import "./ProductList.css"
import PropTypes from "prop-types"

function ProductList({ productsData, addToCart, search }) {

  const filterProducts = () => {
    return productsData.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className="productList">
      {filterProducts().map((product, idx) => {
        return <ProductCard key={idx} productData={product} addToCart={addToCart}/>
      })}
    </div>
  )
}

ProductList.propTypes = {
  productsData: PropTypes.array,
  addToCart: PropTypes.func,
  search: PropTypes.string
}

export default ProductList