import React, { useState, useEffect } from 'react'
import { Tbody, Tr, Td, Button, Select } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { todoState } from '../../hooks/TodoState'
import { useRouter } from 'next/router'

const TodoListChild = ({ curPage, itemLimit }) => {
  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)

  // 表示中のtodo数を監視するstateを定義
  const [curItems, setCurItems] = useState([])

  const router = useRouter()

  // itemLimit数に応じた新しいtodo配列を生成し、curItemsにセット
  useEffect(() => {
    const offset = curPage * itemLimit
    setCurItems(todos.slice(offset, offset + itemLimit))
  }, [curPage, todos.length])

  return (
    <Tbody>
      {curItems.map((curItem) => (
        <Tr key={curItem.id}>
          <Td
            fontSize="16px"
            fontWeight="bold"
            cursor="pointer"
            // routerを使ってtitle,detail,created_dayをqueryとして渡してShowTodoに遷移させる
            onClick={() => {
              router.push({
                pathname: 'ShowTodo',
                query: {
                  title: curItem.title,
                  detail: curItem.detail,
                  created_day: curItem.created_day,
                },
              })
            }}
          >
            {curItem.title}
          </Td>
          <Td>
            <Button rounded="full" bg="green.50" size="lg" fontSize="12px">
              {curItem.status}
            </Button>
          </Td>
          <Td>
            <Select borderColor="tomato" fontSize="16px">
              <option>High</option>
              <option>Middle</option>
              <option>Low</option>
            </Select>
          </Td>
          <Td fontSize="14px">{curItem.created_day}</Td>
          <Td fontSize="14px">2020-11-8 18:55</Td>
          <Td>
            <EditIcon w={18} h={18} me={5} />
            <DeleteIcon w={18} h={18} />
          </Td>
        </Tr>
      ))}
    </Tbody>
  )
}

export default TodoListChild
