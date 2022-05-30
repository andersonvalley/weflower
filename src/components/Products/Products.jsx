import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocalStorage } from '../../hooks/useLocaStorage'
import { addItem } from '../../redux/slices/cartItemsSlice'
import { setFavorite } from '../../redux/slices/favoritesSlice'
import styles from './products.module.scss'

function Products({ obj }) {
  const [activeType, setActiveType] = React.useState(0)
  const [activeSize, setActiveSize] = React.useState(0)
  const { cartItems } = useSelector(state => state.cartItems)
  const { favorites } = useSelector(state => state.favorites)
  const dispatch = useDispatch()

  const typeNames = ['только цветок', 'в подарочной упаковке']
  const addedItems = cartItems.find(
    item => item.id === obj.id && item.sizes === obj.sizes[activeSize] && item.types === typeNames[activeType]
  )
  const priceWithDiscount = Math.trunc(obj.price - (obj.price / 100) * obj.discount)

  function countingPrice() {
    const priceOfPackage = 300
    const percentOfSize = [10, 15]
    let newPrice = priceWithDiscount

    if (activeSize === 1)
      newPrice = Math.round(priceWithDiscount + (priceWithDiscount / 100) * percentOfSize[0])
    if (activeSize === 2)
      newPrice = Math.round(priceWithDiscount + (priceWithDiscount / 100) * percentOfSize[1])

    if (activeType > 0) return newPrice + priceOfPackage

    return newPrice
  }

  function addToFavorites() {
    dispatch(setFavorite(obj))
  }

  const addItemToCart = (obj, activeSize, activeType, price) => {
    const newItems = Object.assign({}, obj, {
      types: activeType,
      sizes: obj.sizes[activeSize],
      price: price,
      quantity: 1,
    })

    dispatch(addItem(newItems))
  }

  return (
    <div className={styles.pizzaBlock}>
      {!!obj.discount && (
        <div className={styles.discount}>
          <div className={styles.badges}>
            <div className={styles.badges__left}></div>
            <div className={styles.badges__right}></div>
          </div>
          <svg
            className={styles.discount__icon}
            width='14'
            height='11'
            viewBox='0 0 17 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.608 0.237999L5.624 13.36H3.662L10.646 0.237999H12.608ZM13.022 6.43C14.018 6.43 14.792 6.724 15.344 7.312C15.896 7.888 16.172 8.704 16.172 9.76C16.172 10.816 15.908 11.662 15.38 12.298C14.864 12.922 14.078 13.234 13.022 13.234C12.038 13.234 11.27 12.94 10.718 12.352C10.178 11.764 9.908 10.936 9.908 9.868C9.908 8.788 10.178 7.948 10.718 7.348C11.27 6.736 12.038 6.43 13.022 6.43ZM13.076 7.996C12.5 7.996 12.218 8.578 12.23 9.742C12.23 9.79 12.23 9.826 12.23 9.85C12.23 9.886 12.23 9.934 12.23 9.994C12.23 10.318 12.236 10.576 12.248 10.768C12.26 10.948 12.326 11.14 12.446 11.344C12.578 11.548 12.77 11.65 13.022 11.65C13.334 11.65 13.55 11.512 13.67 11.236C13.79 10.948 13.85 10.432 13.85 9.688C13.85 9.424 13.844 9.226 13.832 9.094C13.82 8.95 13.79 8.782 13.742 8.59C13.706 8.386 13.628 8.236 13.508 8.14C13.4 8.044 13.256 7.996 13.076 7.996ZM3.41 0.381999C4.406 0.381999 5.18 0.676 5.732 1.264C6.284 1.84 6.56 2.656 6.56 3.712C6.56 4.768 6.296 5.614 5.768 6.25C5.252 6.874 4.466 7.186 3.41 7.186C2.426 7.186 1.658 6.892 1.106 6.304C0.566 5.716 0.296 4.888 0.296 3.82C0.296 2.74 0.566 1.9 1.106 1.3C1.658 0.687999 2.426 0.381999 3.41 0.381999ZM3.464 1.948C2.888 1.948 2.606 2.53 2.618 3.694C2.618 3.742 2.618 3.778 2.618 3.802C2.618 3.838 2.618 3.886 2.618 3.946C2.618 4.27 2.624 4.528 2.636 4.72C2.648 4.9 2.714 5.092 2.834 5.296C2.966 5.5 3.158 5.602 3.41 5.602C3.722 5.602 3.938 5.464 4.058 5.188C4.178 4.9 4.238 4.384 4.238 3.64C4.238 3.376 4.232 3.178 4.22 3.046C4.208 2.902 4.178 2.734 4.13 2.542C4.094 2.338 4.016 2.188 3.896 2.092C3.788 1.996 3.644 1.948 3.464 1.948Z'
              fill='#20AC96'
            ></path>
          </svg>
          <div className={styles.hover}>
            <p>Очень приятная скидка: {obj.discount}%</p>
            <span>
              Новая цена: <span>{obj.price} ₽</span> {priceWithDiscount} ₽
            </span>
          </div>
        </div>
      )}

      <div
        onClick={addToFavorites}
        className={
          favorites.find(i => i.id === obj.id)
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

      <div className={styles.img}>
        <img src={obj.imageUrl} alt={obj.title} />
      </div>
      <h4 className={styles.title}>{obj.title}</h4>
      <div className={styles.selector}>
        <ul>
          {obj.types &&
            obj.types.map((item, index) => {
              return (
                <li
                  onClick={() => setActiveType(index)}
                  key={item}
                  className={activeType === index ? [styles.active, styles.types].join(' ') : styles.types}
                >
                  {typeNames[item]}
                </li>
              )
            })}
        </ul>
        <ul>
          {obj.sizes.map((item, index) => {
            return (
              <li
                key={item}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? styles.active : ''}
              >
                {item} см.
              </li>
            )
          })}
        </ul>
      </div>
      <div
        onClick={() => addItemToCart(obj, activeSize, typeNames[activeType], countingPrice())}
        className={styles.bottom}
      >
        <div className={styles.price}>от {countingPrice()} ₽</div>
        <div
          className={
            addedItems
              ? 'button button--outline button--add button--added'
              : 'button button--outline button--add'
          }
        >
          <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>{addedItems ? 'Добавлено' : 'Добавить'}</span>
          <i className={addedItems ? '' : 'hidden'}>{addedItems === undefined ? '' : addedItems.quantity}</i>
        </div>
      </div>
    </div>
  )
}

export default Products
