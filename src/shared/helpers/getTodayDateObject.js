export const getTodayDateObject = () => {
  const today = new Date()

  const day = String(today.getDate()).padStart(2, '0')
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const year = today.getFullYear()

  return { year: Number(year), month: Number(month), day: Number(day) }
}
