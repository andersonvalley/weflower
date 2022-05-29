import React from 'react'
import { Link } from 'react-router-dom'
import styles from './favorites.module.scss'

function Favorites(props) {
  return (
    <Link to='/favorites' className={styles.favorites} {...props}>
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
    </Link>
  )
}

export default Favorites
