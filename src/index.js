import React from 'react';
import ReactDOM from 'react-dom/client';
/* import { App } from 'components/App';
import './index.css';

 ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
//===============  1 ======================
/* const elem = React.createElement('div', {
  a:5,
  b:10,
  children:['Hello', 'World'],
});

console.log(elem);

const jsxElem = <div>Hellooooooooooo</div>
console.log(jsxElem);
ReactDOM.createRoot(document.getElementById('root')).render(elem); */
//===============  2 ======================
/* const imageUrl =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const productPrice = 10.99;
const product = (
  <div>
    <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h2>Tacos With Lime</h2>
    <p>Price: {productPrice}$</p>
    <button type="button">Add to cart</button>
  </div>
);
console.log(product);
ReactDOM.createRoot(document.getElementById('root')).render(product); */
//===============  2 ======================
const Product = props => (
  <div>
    <img
      src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      alt="Tacos With Lime"
      width="640"
    />
    <h2>Tacos With Lime</h2>
    <p>Price: 10.99$</p>
    <button type="button">Add to cart</button>
  </div>
);

// В разметке компонент записывается как JSX-тег
ReactDOM.createRoot(document.getElementById("root")).render(<Product />);
