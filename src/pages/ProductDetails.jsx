import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProductDetails = ({
  products,
  cartItems,
  addToCart,
  removeFromCart,
  updateQuantity,
}) => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState({});
  useEffect(() => {
    const getSingleProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    };
    getSingleProduct();
  }, [id]);

  const [showPopup, setShowPopup] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      setIsInCart(true);
      setQuantity(productInCart.quantity);
    }
  }, [product, cartItems]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: quantity });
    setIsInCart(true);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
    setIsInCart(false);
    setQuantity(1);
  };

  const handleQuantityChange = (product, newQuantity) => {
    // console.log("product: ", product);
    // console.log("qty: ", newQuantity);
    if (newQuantity === 0) {
      removeFromCart(product);
    } else {
      updateQuantity(product, newQuantity);
    }
  };

  return (
    <>
      <Navbar />
      <div className="proDetailPage">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="proInnerImageBox">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="proInnerPageDetails">
                <p className="proCat">Category: {product.category}</p>
                <h2 className="proInnerPageTitle">{product.title}</h2>
                <p className="proInnerPageDesc">{product.description}</p>
                <p className="proInnerPagePrice">Price: ${product.price}</p>
                <p className="proInnerPagePrice">
                  Rating : {product.rating?.rate}
                </p>
                {isInCart ? (
                  <>
                    <div className="quantity-controls my-3">
                      <button
                        onClick={() =>
                          handleQuantityChange(product, quantity - 1)
                        }
                        className="btn btn-secondary btn-sm"
                      >
                        -
                      </button>
                      <span className="mx-2">{quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(product, quantity + 1)
                        }
                        className="btn btn-secondary btn-sm"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={handleRemoveFromCart}
                      className="btn btn-danger"
                    >
                      Remove from Cart
                    </button>
                  </>
                ) : (
                  <button onClick={handleAddToCart} className="btn btn-primary">
                    Add to Cart
                  </button>
                )}
                {showPopup && (
                  <div className="popup">
                    Product successfully added to cart!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
