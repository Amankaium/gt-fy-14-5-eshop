import { useState } from 'react';
import './App.css';
import ProductList from './components/Product/ProductList';
import ProductItem from './components/Product/ProductItem';
import BasketItem from './components/Basket/BasketItem';

function App() {
  const [basket, setBasket] = useState([])

  const addToBasket = (product) => {
    setBasket([...basket, product])
  }

  return (
    <div className='App'>
      <ProductList addToBasket={addToBasket}/>
      <h2>Корзина</h2>
      <div>{basket.map((product, index) => <BasketItem item={product} key={index}/>)}</div>
    </div>
  );
}

export default App;
