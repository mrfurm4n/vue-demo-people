import { getBirthdayObject } from '@/shared/helpers/index'

export const getSortedUsersByType = (type, usersList) => {
  switch (type) {
    case 'alphabet':
      if (!Array.isArray(usersList)) return null
      return usersList?.sort((a, b) => {
        const firstFirstName = a.firstName
        const secondFirstName = b.firstName

        if (firstFirstName < secondFirstName) return -1
        if (firstFirstName > secondFirstName) return 1
        return 0
      })
    case 'birthday':
      if (!Array.isArray(usersList)) return null
      return usersList
        ?.sort((a, b) => {
          const firstBirthday = getBirthdayObject(a.birthday)
          const secondBirthday = getBirthdayObject(b.birthday)

          if (firstBirthday.month < secondBirthday.month) return -1
          if (firstBirthday.month > secondBirthday.month) return 1
          return 0
        })
        ?.sort((a, b) => {
          const firstBirthday = getBirthdayObject(a.birthday)
          const secondBirthday = getBirthdayObject(b.birthday)

          if (
            firstBirthday.month === secondBirthday.month &&
            firstBirthday.day < secondBirthday.day
          )
            return -1
          if (
            firstBirthday.month === secondBirthday.month &&
            firstBirthday.day > secondBirthday.day
          )
            return 1
          return 0
        })
    default:
      return null
  }
}
