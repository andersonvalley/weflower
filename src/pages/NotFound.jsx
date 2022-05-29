import React from 'react'
import Empty from '../components/empty/Empty'
import icon from '../assets/img/error-404.png'

function NotFound() {
  return <Empty title=' 404' descr='Ничего не найдено' img={icon} />
}

export default NotFound
