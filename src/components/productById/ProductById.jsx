import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from '../../redux/slices/favoritesSlice'
import { discount } from '../Products/Products'
import styles from './productById.module.scss'

function ProductById({ item, closeModal }) {
  const { favorites } = useSelector(state => state.favorites)

  const dispatch = useDispatch()

  const discountPrice = discount(item)

  return (
    <div onClick={closeModal} className={styles.product}>
      <div onClick={e => e.stopPropagation()} className={styles.wrapper}>
        <div className={styles.img}>
          <img src={item.imageUrl} alt={item.title} />
          <div
            onClick={() => dispatch(setFavorite(item))}
            className={
              favorites.find(i => i.id === item.id)
                ? [styles.favorites, styles.favorites__active].join(' ')
                : styles.favorites
            }
          >
            <svg
              className={styles.icon}
              version='1.1'
              viewBox='-430 431 139 139'
              xmlSpace='preserve'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
            >
              <style type='text/css'></style>
              <g>
                <path
                  d='M-360.5,464.3c0,0,22.8-20.8,43.5,0c0,0,16.3,15.5,3.3,36.2c0,0-2.3,8.7-46.8,45.8'
                  id='XMLID_3_'
                />
                <path
                  d='M-356.5,464.3c0,0-22.8-20.8-43.5,0c0,0-16.3,15.5-3.3,36.2c0,0,2.3,8.7,46.8,45.8'
                  id='XMLID_4_'
                />
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.text}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <div className={styles.available}>в наличии {item.availible} шт.</div>
          <div className={styles.price}>
            <span className={styles.newPrice}>от {discountPrice} ₽ </span>
            <span className={!item.discount ? 'hidden' : styles.oldPrice}>от {item.price} ₽</span>
          </div>
          <div>
            <span className={!item.discount ? 'hidden' : ''}>Скидка: {item.discount}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductById
