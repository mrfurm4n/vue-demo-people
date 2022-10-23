export const getLocalStorage = (param, defaultValue) =>
  window.localStorage.getItem(param) ? JSON.parse(window.localStorage.getItem(param)) : defaultValue
