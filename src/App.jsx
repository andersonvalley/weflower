import React from 'react'
import Header from './components/header/Header'
import Categories from './components/categories/Categories'
import Sort from './components/sort/Sort'
import PizzaBlock from './components/pizzaBlock/PizzaBlock'
import './scss/app.scss'
import axios from 'axios'
import { useFetch } from './hooks/useFetch'
import { Loader } from './components/ui/Loader'

function App() {
  const url = 'https://628bbe0e7886bbbb37be8ea8.mockapi.io/pizzas'
  const { items, loading, errors } = useFetch(url)

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {loading && <Loader />}
            {errors && <p>Ошибка, попробуйте еще раз</p>}
            {items.map(obj => {
              return <PizzaBlock key={obj.id} {...obj} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
