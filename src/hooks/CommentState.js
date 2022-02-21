import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
// コメント一覧を配列で管理し永続化
export const commentState = atom({
  key: "comments",
  default: [],
  effects_UNSTABLE: [persistAtom],
})
