import React, { useState, useEffect } from 'react'
import { Table, Tbody, Thead, Th, Tr } from '@chakra-ui/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoState } from '../../../hooks/TodoState'
import TodoListChild from '../../atoms/TodoListChild'
import { useRouter } from 'next/router'
import {
  searchPriorityState,
  searchStatusState,
} from '../../../hooks/SearchStatus'

export default function TodosTable({ curPage, itemLimit }) {
  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)

  // 表示中のtodo数を監視するstateを定義
  const [curItems, setCurItems] = useState([])

  const selectedPriority = useRecoilValue(searchPriorityState)
  const selectedStatus = useRecoilValue(searchStatusState)
  const [isSearched, setIsSearched] = useState(false)

  // 条件に合うtodoの配列を格納するstateを定義
  const [selectedItems, setSelectedItems] = useState([])

  // itemLimit数に応じた新しいtodo配列を生成し、curItemsにセット
  useEffect(() => {
    const offset = curPage * itemLimit
    setCurItems(todos.slice(offset, offset + itemLimit))
  }, [curPage, todos.length])

  // 選択されたpriorityかstatusを含むtodoを抽出
  useEffect(() => {
    if (selectedPriority) {
      setIsSearched(true)
      const searchPriorityItems = todos.filter(
        (todo) => todo.priority === selectedPriority
      )
      setSelectedItems(searchPriorityItems)
    } else if (selectedStatus) {
      setIsSearched(true)
      const searchStatusItems = todos.filter(
        (todo) => todo.status === selectedStatus
      )
      setSelectedItems(searchStatusItems)
    } else {
      setIsSearched(false)
    }
  }, [selectedPriority, selectedStatus])


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
        {isSearched
          ? // useRecoilValueで呼び出したtodos内のtodoを順に取り出し処理を行う。
            selectedItems.map((todo, index) => {
              return (
                <TodoListChild
                  id={todo.id}
                  status={todo.status}
                  created_day={todo.created_day}
                  updated_day={todo.updated_day}
                  title={todo.title}
                />
              )
            })
          : curItems.map((todo, index) => {
              return (
                <TodoListChild
                  id={todo.id}
                  status={todo.status}
                  created_day={todo.created_day}
                  updated_day={todo.updated_day}
                  title={todo.title}
                />
              )
            })}
      </Tbody>
    </Table>
  )
}
