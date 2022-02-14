import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

// TODOリストの状態を保持する Atoms を作成
export const todoState = atom({
  key: 'todos',
  default: [],
  // 状態を永続化
 effects_UNSTABLE: [persistAtom],
})

