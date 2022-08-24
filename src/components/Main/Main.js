import { useState } from 'react';
import ProductList from '../Product/ProductList';
import BasketList from '../Basket/BasketList';


export default function Main() {
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
        <div>
            <ProductList addToBasket={addToBasket}/>
            <BasketList basket={basket} addToBasket={addToBasket}/>
        </div>
    )
}