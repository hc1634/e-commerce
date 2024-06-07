import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, addToCart, removeFromCart, updateQuantity }) => {
  // console.log("cartItems", cartItems);

  const handleQuantityChange = (product, quantity) => {
    if (quantity === 0) {
      removeFromCart(product);
    } else {
      updateQuantity(product, quantity);
    }
  };
  const calculateTotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const calculateCartTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <center>
        <h2 className="p-3">Shopping Cart</h2>
      </center>
      <div className="cart">
        <div className="container">
          <div className="content">
            {cartItems.length === 0 ? (
              <div className="content-card">
                <p className="contentDesc">Your cart is empty.</p>
                <Link className="cartlink" to="/">
                  Go back to shop
                </Link>
              </div>
            ) : (
              <div className="cartProduct">
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      <p className="cartProductPrice">{item.category}</p>
                      <h4 className="cartProductTitle">{item.title}</h4>
                      <p className="cartProductPrice">Price : {item.price}</p>
                      <div className="quantity-controls my-3">
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                          className="btn btn-secondary btn-sm"
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                          className="btn btn-secondary btn-sm"
                        >
                          +
                        </button>
                      </div>
                      <p className="cartProductPrice">
                        Total: $ {calculateTotal(item.price, item.quantity)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <h4>Total Amount: ${calculateCartTotal()}</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
