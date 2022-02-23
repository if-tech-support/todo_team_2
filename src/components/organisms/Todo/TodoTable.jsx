import React, { useState, useEffect } from 'react'
import { Table, Tbody, Thead, Th, Tr } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { todoState } from '../../../hooks/TodoState'
import TodoListChild from '../../atoms/TodoListChild'

export default function TodosTable({ curPage, itemLimit }) {

  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)

  // 表示中のtodo数を監視するstateを定義
  const [curItems, setCurItems] = useState([])

  // itemLimit数に応じた新しいtodo配列を生成し、curItemsにセット
  useEffect(() => {
    const offset = curPage * itemLimit
    setCurItems(todos.slice(offset, offset + itemLimit))
  }, [curPage, todos.length])

  console.log(itemLimit);

  return (
    <Table size="md">
      <Thead bg="green.300">
        <Tr>
          <Th width="30%">Task</Th>
          <Th>Status</Th>
          <Th>Priority</Th>
          <Th>Create</Th>
          <Th>Update</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          // useRecoilValueで呼び出したtodos内のtodoを順に取り出し処理を行う。
          curItems.map((todo, index) => {
            return(
            <TodoListChild
            id={todo.id}
            status={todo.status}
            created_day={todo.created_day}
            updated_day={todo.updated_day}
            title={todo.title}
            />
            )
          })
        }
      </Tbody>
    </Table>
  )
}
