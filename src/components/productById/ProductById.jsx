import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from '../../redux/slices/favoritesSlice'
import { discount } from '../Products/Products'
import styles from './productById.module.scss'

function ProductById({ item, closeModal }) {
  const { favorites } = useSelector(state => state.favorites)
  const dispatch = useDispatch()

  const discountPrice = discount(item)

  const countRating = useCallback(() => {
    let rating = 0
    item.rating.map(num => {
      return rating += num / item.rating.length
    })

    return rating
  }, [item.rating])

  return (
    <div onClick={closeModal} className={styles.product}>
      <div onClick={e => e.stopPropagation()} className={styles.wrapper}>
        <div onClick={closeModal} className={styles.remove}>
          <svg width='15' height='15' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z'
              fill='#EB5A1E'
            />
            <path
              d='M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z'
              fill='#EB5A1E'
            />
          </svg>
        </div>
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
          <div className={styles.recomend}>
            <span>Рекомендации по уходу</span>
            <p>
              Растение любит яркий рассеянный свет, а так же повышенную влажность (можно опрыскивать каждый
              день)
            </p>
          </div>
          <div className={styles.rating}>
            <svg width='20' height='19' viewBox='0 0 12 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6 0l1.763 3.573 3.943.573-2.853 2.781.674 3.927L6 9l-3.527 1.854.674-3.927L.294 4.146l3.943-.573L6 0z'
                fill='#FEBB02'
              ></path>
            </svg>
            <p>
              {countRating()} <span>средняя оценка</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductById
