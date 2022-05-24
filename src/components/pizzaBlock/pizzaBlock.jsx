import React from 'react'

function PizzaBlock({
  title,
  price,
  imageUrl,
  types,
  sizes,
  addItemToCart,
  obj,
  cartItems,
  quantityCalc,
}) {
  const [activeType, setActiveType] = React.useState(0)
  const [activeSize, setActiveSize] = React.useState(0)

  const typeNames = ['тонкое', 'традиционное']

  function countPrice(price) {
    if (activeSize === 1) {
      return Math.round(price + (price / 100) * 5)
    } else if (activeSize === 2) {
      return Math.round(price + (price / 100) * 10)
    }
    return price
  }

  return (
    <div className='pizza-block'>
      <img className='pizza-block__image' src={imageUrl} alt={title} />
      <h4 className='pizza-block__title'>{title}</h4>
      <div className='pizza-block__selector'>
        <ul>
          {types.map((item, index) => {
            return (
              <li
                onClick={() => setActiveType(index)}
                key={item}
                className={activeType === index ? 'active' : ''}
              >
                {typeNames[item]}
              </li>
            )
          })}
        </ul>
        <ul>
          {sizes.map((item, index) => {
            return (
              <li
                key={item}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? 'active' : ''}
              >
                {item} см.
              </li>
            )
          })}
        </ul>
      </div>
      <div
        onClick={() => addItemToCart(obj, activeSize, typeNames[activeType], countPrice(price))}
        className='pizza-block__bottom'
      >
        <div className='pizza-block__price'>от {countPrice(price)} ₽</div>
        <div
          className={
            cartItems.find(o => o.id === obj.id)
              ? 'button button--outline button--add button--added'
              : 'button button--outline button--add'
          }
        >
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <span>Добавить</span>
        </div>
      </div>
    </div>
  )
}

export default PizzaBlock
