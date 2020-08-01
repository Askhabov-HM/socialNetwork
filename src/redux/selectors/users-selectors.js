export const getUsers = (state) => {
    return state.usersPage.users
}
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalCount = (state) => {
    return state.usersPage.totalCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const loading = (state) => {
    return state.usersPage.loading
}
export const followingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
