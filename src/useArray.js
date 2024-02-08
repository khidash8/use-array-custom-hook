import { useCallback, useState } from "react"

export const useArray = (initial_array) => {
  const [array, setArray] = useState(initial_array)

  const push = useCallback((element) => {
    setArray((a) => [...a, element])
  }, [])

  const replace = useCallback((index, elemnt) => {
    setArray((a) => {
      return [...a.slice(0, index), elemnt, ...a.slice(index + 1)]
    })
  }, [])

  const filter = useCallback((callback) => {
    return setArray((a) => {
      return a.filter(callback)
    })
  }, [])

  const remove = useCallback((index) => {
    setArray((a) => {
      return [...a.slice(0, index), ...a.slice(index + 1)]
    })
  }, [])

  const clear = useCallback(() => {
    setArray([])
  }, [])

  const reset = useCallback(() => {
    setArray(initial_array)
  }, [])

  return { array, set: setArray, push, replace, filter, remove, clear, reset }
}
