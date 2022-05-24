import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='container container--cart'>
      <div className='cart cart--empty'>
        <h2>
          404 <span>😕</span>
        </h2>
        <p>Ничего не найдено</p>
        <br />
        <Link to='/' className='button button--black'>
          <span>Вернуться на главную</span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
