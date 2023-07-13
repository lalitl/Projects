import React from "react";
import products from "../data";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <section className="section">
      <div className="products">
        {products.map((product) => {
          const { id, name} = product;
          return (
            <article key={id}>
              <h5>{name}</h5>
              <Link to={`/products/${id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
