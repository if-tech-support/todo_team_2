import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

// 編集したいTodoの状態を保持するAtoms を作成
export const editTodoState = atom({
  key: 'editTodo',
  default: {},
  // 状態を永続化
  effects_UNSTABLE: [persistAtom],
})

