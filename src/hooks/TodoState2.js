import { atom } from 'recoil'

export const todoTitle = atom({
  key: 'title',
  default: '',
})
export const todoDetail = atom({
  key: 'detail',
  default: '',
})
export const todoPriority = atom({
  key: 'priority',
  default: 0,
})

