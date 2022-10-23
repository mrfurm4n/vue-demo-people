import { getBirthdayObject, getTodayDateObject } from '@/shared/helpers/index'

const todayDateObject = getTodayDateObject()

export const getYearsSlicesUsersList = (usersList) => {
  if (!Array.isArray(usersList)) return { currentYearList: [], nextYearList: [] }

  const nextYearList = []
  const currentYearList = usersList?.reduce((result, value) => {
    const birthdayObject = getBirthdayObject(value.birthday)

    if (birthdayObject.month >= todayDateObject.month && birthdayObject.day > todayDateObject.day) {
      result.push(value)
    } else {
      nextYearList.push(value)
    }

    return result
  }, [])

  return { currentYearList, nextYearList }
}
