import { useState } from 'react';
import './App.css';
import ProductList from './components/Product/ProductList';
import ProductItem from './components/Product/ProductItem';
import BasketItem from './components/Basket/BasketItem';

function App() {
  const [basket, setBasket] = useState([])

  const addToBasket = (product, newCount=0) => { // яблоко
    const res = basket.find((element) => { return element.id === product.id})
    if (!res) {
      product.counter = 1
      setBasket([...basket, product]) // [яблоко 1, груша 1]
    } else {
      const newBasket = basket.map((item) => {
        if (item.id === res.id) {
          if (newCount) {
            item.counter = newCount
          } else {
            item.counter += 1
          }
          return item
        }
        return item
      })

      setBasket(newBasket)

    }
  }

  return (
    <div className='App'>
      <ProductList addToBasket={addToBasket}/>
      <h2>Корзина</h2>
      <div>{basket.map((product, index) => <BasketItem item={product} key={index} addToBasket={addToBasket}/>)}</div>
    </div>
  );
}

export default App;
