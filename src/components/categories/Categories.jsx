import React from 'react'

function Categories({ activeIndex, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className='categories'>
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Categories
