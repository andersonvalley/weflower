import axios from 'axios'
import React, { useState } from 'react'

export const useFetch = url => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')

  React.useEffect(() => {
    const fetching = async () => {
      try {
        setErrors('')
        setLoading(true)
        const { data } = await axios.get(url)
        setItems(data)
      } catch (error) {
        setErrors(error)
        setItems([])
      } finally {
        setLoading(false)
      }
    }

    fetching()
  }, [url])

  return { items, loading, errors }
}
