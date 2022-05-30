import React from 'react'
import { useSelector } from 'react-redux'
import icon from '../assets/img/searching.png'
import Empty from '../components/empty/Empty'
import Products from '../components/Products/Products'

function FavoritesPage() {
  const { favorites } = useSelector(state => state.favorites)

  return (
    <>
      {favorites.length ? (
        <div className='container'>
          <div className='content__items'>
            {favorites.map(obj => (
              <Products key={obj.id} obj={obj} />
            ))}
          </div>
        </div>
      ) : (
        <Empty title='Еще нет ничего в избранном' img={icon} />
      )}
    </>
  )
}

export default FavoritesPage
