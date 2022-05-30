import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './categories.module.scss'

function Categories({ onClickCategory }) {
  const categories = [
    'Все',
    'Бонсаи',
    'Пальмы, драцены',
    'Кактусы',
    'Суккулент',
    'Фикусы',
    'Вьющиеся растения',
    'Цветущие растения',
  ]

  const { categoryId } = useSelector(state => state.filter)

  return (
    <div className={styles.categories}>
      <Swiper
        spaceBetween={10}
        slidesPerView={5.3}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          500: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 3.8,
          },

          1100: {
            slidesPerView: 4.3,
          },
        }}
      >
        <div className={styles.categories__list}>
          {categories.map((item, index) => {
            return (
              <SwiperSlide key={index} onClick={() => onClickCategory(index)}>
                <div className={categoryId === index ? [styles.item, styles.active].join(' ') : styles.item}>
                  {item}
                </div>
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
    </div>
  )
}

export default Categories
