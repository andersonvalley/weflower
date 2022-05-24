import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Categories from '../components/categories/Categories'
import PizzaBlock from '../components/pizzaBlock/PizzaBlock'
import Sort from '../components/sort/Sort'
import { Loader } from '../components/ui/Loader'
import { useFetch } from '../hooks/useFetch'

function Home({ addItemToCart, searchInput }) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const items = useSelector(state => state.product.items)
  const { fetching, loading, errors } = useFetch()

  React.useEffect(() => {
    fetching()
  }, [])

  const onClickCategory = index => {
    setActiveIndex(index)
    if (index === 0) {
      fetching()
      return
    }
    fetching(`?category=${index}`)
  }

  const searched = useMemo(() => {
    return items.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))
  }, [searchInput, items])

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          onClickCategory={onClickCategory}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {errors && <p>Ошибка, попробуйте еще раз</p>}
        {loading && <Loader />}
        {searched.map(obj => {
          return <PizzaBlock key={obj.id} addItemToCart={addItemToCart} obj={obj} />
        })}
      </div>
    </div>
  )
}

export default Home
