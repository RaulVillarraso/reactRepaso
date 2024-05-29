
function Cart({ totalPrice, totalProducts, wipeCart }) {

  return (
    <div>
      <p>Total productos: {totalProducts}</p>
      <p>Total precios: {totalPrice.toFixed(2)}</p>
      <button onClick={wipeCart}>Clear</button>
    </div>
  )
}

export default Cart