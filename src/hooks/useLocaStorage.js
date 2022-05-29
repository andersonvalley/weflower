export const useLocalStorage = () => {
  const setItem = (string, state) => {
    localStorage.setItem(string, JSON.stringify(state))
  }

  const getItem = string => {
    const storage = localStorage.getItem(string)
    if (storage !== null && storage !== undefined) {
      return JSON.parse(storage)
    }
  }

  return { setItem, getItem }
}
