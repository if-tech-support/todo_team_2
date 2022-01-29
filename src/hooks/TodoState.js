import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

// TODOリストの状態を保持する Atoms を作成
const todoState = atom({
  key: 'todos',
  default: [],
  // 状態を永続化
  effects_UNSTABLE: [persistAtom],
})

export function TodoState() {
  // コンポーネントに適用
  const [todos, setTodos] = useRecoilState(todoState)
  return { todos, setTodos }
}
