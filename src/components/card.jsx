import React from "react";
import { Link } from "react-router-dom";

const Card = React.memo(({ products }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <div className="proImageBox">
                  <img
                    alt={product.title}
                    src={product.image}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <div className="productDetails">
                  <p className="proCat">{product.category}</p>
                  <p className="proPrice">$ {product.price}</p>
                  <h3 className="productTitle">{product.title}</h3>
                  <p className="proDesc">
                    {product.description.substring(0, 80)}...
                  </p>
                  <Link to={`/category/${product.id}`} className="knowMore">
                    Click here to know more...
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Card;
