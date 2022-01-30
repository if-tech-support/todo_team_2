import React, { useState } from 'react'
import Router from 'next/router'

import { Stack, Text, Box, Flex, Spacer, HStack } from '@chakra-ui/react'
// import { BackButton } from '../src/components/atoms/button/BackButton'
import { DetailTextarea } from '../src/components/atoms/input/DetailTextarea'
import Title from '../src/components/atoms/input/Title'
import { DraftButton } from '../src/components/atoms/button/DraftButton'
import { CreateButton } from '../src/components/atoms/button/CreateButton'
import RadioPriority from '../src/components/atoms/input/RadioPriority'
import Header from '../src/components/organisms/Header/Header'

import { TodoState } from '../src/hooks/TodoState'
import { Now } from '../src/hooks/Now'

export default function NewTodo() {
  // TodoState.jsで定義したtosos,setTodosを呼び出し
  const { todos, setTodos } = TodoState()

  // Now.jsで定義したcurerntTimeを呼び出し
  const { currentTime } = Now()

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [priority, setPriority] = useState('High')

  // 現在のTodosの要素数を取得
  const quantity = Object.keys(todos).length
  // 新しいTodoのidを定義
  const id = quantity + 1

  console.log(todos)

  // Todosに新しいTodoを追加
  const onSubmit = () => {
    // e.preventDefault()
    const newTodos = [
      {
        id,
        title,
        detail,
        priority,
        status: 'not_started',
        created_day: currentTime,
      },
      ...todos,
    ]
    setTodos(newTodos)
    setTitle('')
    setDetail('')
    Router.push('/')
  }

  return (
    <>
      <Header />
      <Box p={10} mr={10} ml={10} height="100vh">
        <Stack spacing={3}>
          <Flex>
            <Text fontSize="2xl" fontWeight="semibold">
              NEW TODO
            </Text>
            <Spacer />
            {/* <BackButton /> */}
          </Flex>
          <Title title={title} setTitle={setTitle} />
          <DetailTextarea detail={detail} setDetail={setDetail} />
          <RadioPriority setPriority={setPriority} />

          <Flex>
            <HStack spacing="24px" pos="absolute" right="20">
              <DraftButton />
              <CreateButton onSubmit={onSubmit} />
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  )
}
