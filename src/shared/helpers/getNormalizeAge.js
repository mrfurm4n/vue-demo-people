import { getTodayDateObject, getBirthdayObject } from '@/shared/helpers/index'

export const getNormalizeAge = (birthday) => {
  if (birthday.length < 1) return ''

  const todayObject = getTodayDateObject()
  const birthdayObject = getBirthdayObject(birthday)
  const age = todayObject.year - birthdayObject.year
  const secondAgeNumber = Number(age.toString()[1])

  if (age === 0) return `${age} лет`
  if (age === 1) return `${age} год`

  if (age >= 2 && age <= 4) return `${age} года`
  if (age >= 5 && age < 20) return `${age} лет`

  if (age >= 20 && secondAgeNumber === 1) return `${age} год`
  if (age >= 20 && secondAgeNumber <= 4) return `${age} года`

  return `${age} лет`
}
