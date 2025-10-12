import { useState, useEffect } from "react";
import Product from "../features/Product/index";
import AddForm from "../features/Product/AddForm";
// import data from "../app/data";
import axios from 'axios';
import styled from "styled-components";
import PropTypes from 'prop-types';

let currentProductId = 9;

function Home({ className }) {
  const [products, setProducts] = useState([]);
  // const [products, setProducts] = useState(data);
useEffect(() => {
  async function getProducts() {
    const products = await axios.get(
      'https://68e9fc47f1eeb3f856e5a63c.mockapi.io/products'
    );
    setProducts(products.data);
  }

  getProducts();
}, []);

  const addProduct = (product) => {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  };

  return (
    <div className={className}>
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
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string,
};

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;
