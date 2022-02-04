import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const commentState = atom({
  key: "commentList",
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const dateState = atom({
  key: "dateList",
  default: [],
  effects_UNSTABLE: [persistAtom],
})
