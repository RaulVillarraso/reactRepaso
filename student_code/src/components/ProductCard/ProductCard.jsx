import "./ProductCard.css"
import PropTypes from "prop-types"


function ProductCard({ productData, addToCart }) {
  return (
    <div className="card">
      <div style={{
        backgroundImage: `url(${productData.image})`,
      }}
      className="productImage"
      >
      </div>
      <p>{productData.title}</p>
      <p>{productData.price}</p>
      <button onClick={() => addToCart(productData.price)}>Add to Cart</button>
    </div>
  )
}

ProductCard.propTypes = {
  productData: PropTypes.object
}

export default ProductCard