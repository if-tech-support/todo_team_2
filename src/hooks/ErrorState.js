import { atom } from 'recoil'

// Update押下後のerror状態を保持するAtoms を作成
export const errorState = atom({
  key: 'error',
  default: {},
})
