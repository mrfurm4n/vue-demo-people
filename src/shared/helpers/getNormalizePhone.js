export const getNormalizePhone = (phone) => {
  if (phone.length < 1) return ''
  return `${phone.slice(0, 2)} (${phone.slice(2, 5)}) ${phone.slice(5, 8)} ${phone.slice(
    8,
    10
  )} ${phone.slice(10, 12)}`
}
