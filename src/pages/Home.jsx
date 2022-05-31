import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/categories/Categories'
import Empty from '../components/empty/Empty'
import SearchIcon from '../assets/img/finder.png'
import Products from '../components/Products/Products'
import Sort from '../components/sort/Sort'
import { Loader } from '../components/ui/Loader'
import { useFetch } from '../hooks/useFetch'
import { searchItems, setCategory } from '../redux/slices/filterSlice'
import { useNavigate } from 'react-router-dom'
import ProductById from '../components/productById/ProductById'

export const ModalContext = React.createContext()

function Home() {
  const [showModal, setShowModal] = React.useState(false)
  const [modalInfo, setModalInfo] = React.useState({})
  const { items } = useSelector(state => state.products)
  const { searchValue, sortBy } = useSelector(state => state.filter)
  const { fetching, loading, errors } = useFetch()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  document.body.style.overflow = showModal ? 'hidden' : ''

  const onClickCategory = index => {
    dispatch(setCategory(index))

    if (!index) {
      fetching()
      dispatch(searchItems(''))
      return
    }

    fetching(index)
    dispatch(searchItems(''))
  }

  function showModalHandler(obj) {
    setShowModal(true)
    setModalInfo(obj)
    navigate(`product/${obj.id}`, { replace: true })
  }

  function closeModal() {
    setShowModal(false)
    navigate('/', { replace: true })
  }

  React.useEffect(() => {
    dispatch(setCategory(0))
    fetching()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  

  const sortedItems = useMemo(() => {
    if (sortBy.prop === 'title') {
      return [...items].sort((a, b) => a.title.localeCompare(b.title))
    }
    return [...items].sort((a, b) => a[sortBy.prop] - b[sortBy.prop])
  }, [sortBy, items])

  const sortedAndSearchedItems = useMemo(() => {
    return sortedItems.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
  }, [searchValue, sortedItems])

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories onClickCategory={onClickCategory} />
        <Sort />
      </div>
      {loading && <Loader />}
      {!sortedAndSearchedItems.length ? (
        <Empty title='Ничего не найдено' img={SearchIcon} />
      ) : (
        <h2 className='content__title'>Все товары</h2>
      )}
      <ModalContext.Provider value={{ setShowModal, setModalInfo, modalInfo, showModalHandler, closeModal }}>
        <div className='content__items'>
          {errors && <p>Ошибка, попробуйте еще раз</p>}
          {showModal && <ProductById />}
          {sortedAndSearchedItems.map(obj => (
            <Products key={obj.id} obj={obj} />
          ))}
        </div>
      </ModalContext.Provider>
    </div>
  )
}

export default Home
