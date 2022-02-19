import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

export const searchPriorityState = atom({
  key: 'searchPriority',
  default: "",
  // 状態を永続化
//  effects_UNSTABLE: [persistAtom],
})

export const searchStatusState = atom({
  key: 'searchStatus',
  default: "",
  // 状態を永続化
//  effects_UNSTABLE: [persistAtom],
})

