export const useLocalStorage = () => {
  const setItem = (name, state) => {
    localStorage.setItem(name, JSON.stringify(state))
  }

  const getItem = (string, callback) => {
    const i = localStorage.getItem(string)
    if (i === undefined || i === null) return
    JSON.parse(i).forEach(item => {
      callback(item)
    })
  }

  return { setItem, getItem }
}
