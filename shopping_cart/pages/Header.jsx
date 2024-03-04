import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../src/assets/cart-icon (1).svg'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setProduct,setError } from '../store/slices/ProductSlice';
import { fetchCartItems, fetchCartItemsError, loadCartItems } from '../store/slices/CartSlice';
export default function Header() {
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLoading());
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                dispatch(setProduct(json));
            })
            .catch((error) => {
                dispatch(setError(error.message));
            })
            dispatch(fetchCartItems())
            fetch('https://fakestoreapi.com/carts/5')
              .then((res) => res.json())
              .then((data) => {
                dispatch(loadCartItems(data))
              })
              .catch((err) => {
                dispatch(fetchCartItemsError(err))
              })
    }, [dispatch]);
  const cartItems = useSelector((state) => state.cart.data);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/" style={{color:"blue"}}>Shopee</Link>
        </h1>
        <Link className="cart-icon" to="/cart">
          <img src={CartIcon} alt="cart-icon" />
          <div className="cart-items-count">
            {cartItems.reduce(
              (accumulator, currentItem) => accumulator + currentItem.quantity,
              0
            )}
          </div>
        </Link>
      </div>
    </header>
  )
}