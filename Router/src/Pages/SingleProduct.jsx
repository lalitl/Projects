import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productID } = useParams();
  const product = products.find((product) => product.id === productID);
  return (
    <section className="section">
      <div className="product">
        <img src={product.image} alt={product.name} />
        <h5>{product.name}</h5>
      </div>
      <Link to="/products" className="btn">
        back to products
      </Link>
    </section>
  );
};

export default SingleProduct;
