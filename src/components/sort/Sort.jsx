import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortItems } from '../../redux/slices/filterSlice'
import styles from './sort.module.scss'

function Sort() {
  const sortTypes = ['популярности', 'цене', 'алфавиту']
  const sort = React.useRef(null)
  const [isVisible, setIsVisible] = React.useState(false)
  const dispatch = useDispatch()
  const { sortBy } = useSelector(state => state.filter)

  const sortHandler = item => {
    setIsVisible(false)
    dispatch(sortItems(item))
  }

  React.useEffect(() => {
    function handler(e) {
      if (sort.current && !sort.current.contains(e.target)) setIsVisible(false)
    }
    document.addEventListener('mousedown', handler)

    return () => document.removeEventListener('mousedown', handler)
  }, [sort])

  return (
    <div ref={sort} className={isVisible ? [styles.sort, styles.popupActive].join(' ') : styles.sort}>
      <div className={styles.sortLabel}>
        <svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsVisible(!isVisible)}>{sortBy.name}</span>
      </div>
      {isVisible && (
        <div ref={sort} className={styles.popup}>
          <ul>
            {sortTypes.map(item => {
              return (
                <li
                  key={item}
                  onClick={() => sortHandler(item)}
                  className={sortBy.name === item ? styles.active : ''}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sort
