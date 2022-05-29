import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchItems } from '../../redux/slices/filterSlice'
import styles from './empty.module.scss'

function Empty({ title, descr, img }) {
  const dispatch = useDispatch()
  
  return (
    <div className='container container--cart'>
      <div className={styles.empty}>
        <h2>
          {title} <span>😕</span>
        </h2>
        <p>{descr}</p>
        <img src={img} alt='Empty cart' />
        <Link onClick={() => dispatch(searchItems(''))} to='/' className='button button--black'>
          <span>На главную</span>
        </Link>
      </div>
    </div>
  )
}

export default Empty
