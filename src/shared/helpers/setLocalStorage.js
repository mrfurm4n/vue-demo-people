export const setLocalStorage = (param, value) =>
  window.localStorage.setItem(param, JSON.stringify(value))
