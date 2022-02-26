import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

export const searchPriorityState = atom({
  key: 'searchPriority',
  default: "",
})

export const searchStatusState = atom({
  key: 'searchStatus',
  default: "",
})

export const searchFormState = atom({
  key: 'searchForm',
  default: "",
})

