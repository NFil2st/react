import React, { useState } from "react";
import Product from "../features/Product/index";
import AddForm from "../features/Product/AddForm";
import data from "../app/data";

let currentProductId = 9;

function Home() {
  //const [products, setProducts] = useState([]);
  const [products, setProducts] = useState(data);

  const addProduct = (product) => {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <h1>New Products</h1>

      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}

      <AddForm addProduct={addProduct} />
    </>
  );
}

export default Home;
