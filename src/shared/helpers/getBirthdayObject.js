export const getBirthdayObject = (birthday) => {
  const birthdaySlices = birthday.split('-')
  const [year, month, day] = birthdaySlices

  return { year: Number(year), month: Number(month), day: Number(day) }
}
