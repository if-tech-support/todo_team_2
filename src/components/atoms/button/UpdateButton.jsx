import { Button } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil'
import { editTodoState } from '../../../hooks/EditTodoState'
import { todoState } from '../../../hooks/TodoState'
import { getTime } from '../../../utils/Now'
import Router from 'next/router'
import { errorState } from '../../../hooks/ErrorState'

export const UpdateButton = (props) => {
  const { title, detail } = props
  // EditTodoState.jsで定義したeditTodoのstateと更新関数を呼び出す
  const [editTodo, setEditTodo] = useRecoilState(editTodoState)
  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)
  // errorState.jsで定義したerrorStateを呼び出し
  const [formErrors, setFormErrors] = useRecoilState(errorState)

  // タイトル欄、詳細欄、ラジオボタンの下に表示させるエラー文を定義
  const validate = (title, detail) => {
    const errors = {}
    if (!title) {
      errors.title = 'Title is required!'
    }
    if (!detail) {
      errors.detail = 'Detail is required!'
    }
    return errors
  }

  // updateボタンを押下後、title,detail,update_timeを更新する。
  const handleClickUpdate = () => {
    if (!title || !detail) {
      // 空欄が一か所でもあれば、validate関数で定義したエラー文を表示し、else以降の処理が行われないようにする
      setFormErrors(validate(title, detail))
    } else {
      // 現在時刻を取得
      const { currentTime } = getTime()

      // editTodoから編集前のオブジェクトを取得し、編集したtitleとdetail内容を更新し、更新時間を追加する。
      const newTodo = {
        ...editTodo,
        title: title,
        detail: detail,
        updated_day: currentTime,
      }

      // 更新前のtodo一覧情報をスプレッド構文でupTodosにコピーして代入。
      const upTodos = [...todos]
      // 更新対象のidを特定し、対象idのオブジェクトを編集した内容（newTodo）に更新する。
      upTodos.map((todo, index) => {
        todo.id === editTodo.id && upTodos.splice(index, 1, newTodo)
      })
      // 編集した内容を、todosに更新。
      setTodos(upTodos)
      // editTodoを初期化
      setEditTodo({})
      // errorStateを初期化
      setFormErrors({})

      Router.push('/')
    }
  }

  return (
    <Button
      onClick={handleClickUpdate}
      backgroundColor="green.600"
      borderRadius="50px"
      border="1px solid"
      borderColor="rgba(0, 0, 0, 0.8)"
      color="white"
      w="112px"
      h="40px"
      _hover={{ backgroundColor: 'green.400' }}
    >
      UPDATE
    </Button>
  )
}
