import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setItems } from '../redux/slices/productsSlice'

export const useFetch = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')
  const dispatch = useDispatch()

  const fetching = async index => {
    const url = `https://628bbe0e7886bbbb37be8ea8.mockapi.io/items/`

    try {
      setLoading(true)
      setErrors(null)
      const { data } = await axios.get(url, {
        params: {
          category: index !== undefined ? index : '',
        },
      })
      if (!Array.isArray(data)) {
        dispatch(setItems([data]))
        console.log([data])
      }

      dispatch(setItems(data))
    } catch (error) {
      dispatch(setItems([]))
      setErrors(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { fetching, loading, errors }
}
