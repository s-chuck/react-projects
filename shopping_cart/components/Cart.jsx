import React from 'react'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector((state) => {
    console.log(state.cart.data);
    return state.cart.data.map(({ productId, quantity }) => {
      const cartProduct = state.product.data.find(
        (product) => product.id === productId
      );
      console.log(cartProduct);
      return { ...cartProduct, quantity };
    })
      .filter(({ title }) => title);
  });

  const isLoading = useSelector((state) => state.cart.loading)
  const error = useSelector((state) => state.cart.error)
  
  return (
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {isLoading ? (
          <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        ) : error ? (
          <h2 style={{ textAlign: 'center' }}>{error}</h2>
        ) : (
          cartItems.map(({ id, title, rating, price, image, quantity }) => (
            <CartItem
              key={id}
              productId={id}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={image}
              rating={rating}
            />
          ))
        )}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          {!isLoading ||
            (error && (
              <div className="total">
                $
                {cartItems.reduce(
                  (accumulator, currentItem) =>
                    accumulator + currentItem.quantity * currentItem.price,
                  0
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}


