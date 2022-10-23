export const getFilteredUsersBySearchQuery = (searchQuery, usersList) => {
  if (searchQuery === '') return usersList

  const normalizeQuery = searchQuery.toLowerCase()

  return usersList?.filter(({ firstName, lastName, userTag }) => {
    const filteredByQuery = {
      firstName: firstName.toLowerCase().includes(normalizeQuery),
      lastName: lastName.toLowerCase().includes(normalizeQuery),
      userTag: userTag.toLowerCase().includes(normalizeQuery),
    }

    return filteredByQuery.firstName || filteredByQuery.lastName || filteredByQuery.userTag
  })
}
