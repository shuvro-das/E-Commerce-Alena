import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;

  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img
          className="medium"
          height="200rem"
          // width="400rem"
          src={product.image}
          alt={product.name}
        ></img>
      </Link>
      <div className="card-body">
        <Link to="product.html"></Link>
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="row">
          <div className="price">₹{product.price}</div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
              {product.seller.seller.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
