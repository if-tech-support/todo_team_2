import React, { useState, useEffect } from 'react'
import { Table, Tbody, Thead, Th, Tr } from '@chakra-ui/react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoState } from '../../../hooks/TodoState'
import TodoListChild from '../../atoms/TodoListChild'
import {
  searchFormState,
  searchPriorityState,
  searchStatusState,
} from '../../../hooks/SearchStatus'

export default function TodoTable({ curPage, itemLimit }) {
  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)

  // 表示中のtodo数を監視するstateを定義
  const [curItems, setCurItems] = useState([])

  // 選択されたpriorityとstatusとフォームに入力された値を管理するstateを呼び出し
  const selectedPriority = useRecoilValue(searchPriorityState)
  const selectedStatus = useRecoilValue(searchStatusState)
  const inputValue = useRecoilValue(searchFormState)
  // 検索結果の表示か通常の一覧表示かを判定するstateを定義
  const [isSearched, setIsSearched] = useState(false)

  // 条件に合うtodoの配列を格納するstateを定義
  const [selectedItems, setSelectedItems] = useState([])

  // itemLimit数に応じた新しいtodo配列を生成し、curItemsにセット
  useEffect(() => {
    const offset = curPage * itemLimit
    setCurItems(todos.slice(offset, offset + itemLimit))
  }, [curPage, todos])

  useEffect(() => {
    // 選択されたpriorityを含むtodoを抽出
    if (selectedPriority) {
      setIsSearched(true)
      const searchPriorityItems = todos.filter(
        (todo) => todo.priority === selectedPriority
      )
      setSelectedItems(searchPriorityItems)
    // 選択されたstatusを含むtodoを抽出
    } else if (selectedStatus) {
      setIsSearched(true)
      const searchStatusItems = todos.filter(
        (todo) => todo.status === selectedStatus
      )
      setSelectedItems(searchStatusItems)
    // titleに入力された文字列を含むtodoを抽出
    } else if (inputValue) {
      setIsSearched(true)
      const searchStatusItems = todos.filter(
        (todo) => todo.title.indexOf(inputValue) !== -1
      )
      setSelectedItems(searchStatusItems)
    } else {
      setIsSearched(false)
    }
  }, [selectedPriority, selectedStatus, inputValue])

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
            selectedItems.map((todo) => {
              return (
                <TodoListChild
                id={todo.id}
                status={todo.status}
                priority={todo.priority}
                created_day={todo.created_day}
                updated_day={todo.updated_day}
                todo={todo}
                title={todo.title}
                key={todo.id}
                />
              )
            })
          : curItems.map((todo, index) => {
              return (
                <TodoListChild
                id={todo.id}
                status={todo.status}
                priority={todo.priority}
                created_day={todo.created_day}
                updated_day={todo.updated_day}
                todo={todo}
                title={todo.title}
                key={todo.id}
                />
              )
            })}
      </Tbody>
    </Table>
  )
}
