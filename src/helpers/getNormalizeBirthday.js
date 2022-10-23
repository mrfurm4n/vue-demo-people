import { getBirthdayObject } from '@/helpers'

const monthsList = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
]

export const getNormalizeBirthday = (birthday) => {
    if (birthday.length < 1) return ''

    const birthdayObject = getBirthdayObject(birthday)
    return `${birthdayObject.day} ${monthsList[birthdayObject.month]} ${
        birthdayObject.year
    }`
}