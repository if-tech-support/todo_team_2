import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const InputStatus = atom({
  key: 'InputStatus',
  default: [],

  effects_UNSTABLE: [persistAtom],
})
