import { atom, useRecoilState } from 'recoil'

const todoState = atom({
  key: 'todo',
  default: null,
})

export function TodoState() {
  const [todo, setTodo] = useRecoilState(todoState)
  return { todo, setTodo }
}
