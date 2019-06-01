import { SET_USER_LIST, SET_USER_TO_EDIT } from './types'

export const setUserList = item => { return { type: SET_USER_LIST, payload: item } }
export const setUserToEdit = item => { return { type: SET_USER_TO_EDIT, payload: item } }