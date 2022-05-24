import React from 'react'
import Categories from '../components/categories/Categories'
import PizzaBlock from '../components/pizzaBlock/PizzaBlock'
import Sort from '../components/sort/Sort'
import { Loader } from '../components/ui/Loader'
import { useFetch } from '../hooks/useFetch'

function Home({ addItemToCart, countTotalPriceAndQuantity, cartItems, quantityCalc }) {
  const url = 'https://628bbe0e7886bbbb37be8ea8.mockapi.io/pizzas'
  const { items, loading, errors } = useFetch(url)

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {errors && <p>Ошибка, попробуйте еще раз</p>}
        {loading && <Loader />}
        {items.map(obj => {
          return (
            <PizzaBlock
              countTotalPriceAndQuantity={countTotalPriceAndQuantity}
              addItemToCart={addItemToCart}
              obj={obj}
              cartItems={cartItems}
              key={obj.id}
              quantityCalc={quantityCalc}
              {...obj}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Home
