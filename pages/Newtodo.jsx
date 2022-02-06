import { useState } from 'react'
import Router from 'next/router'
import { useRecoilState } from 'recoil'

import { Stack, Text, Box, Flex, Spacer, HStack } from '@chakra-ui/react'
import BackButton from '../src/components/atoms/button/BackButton'
import { DetailTextarea } from '../src/components/atoms/input/DetailTextarea'
import Title from '../src/components/atoms/input/Title'
import { DraftButton } from '../src/components/atoms/button/DraftButton'
import { CreateButton } from '../src/components/atoms/button/CreateButton'
import RadioPriority from '../src/components/atoms/input/RadioPriority'
import Header from '../src/components/organisms/Header/Header'

import { todoState } from '../src/hooks/TodoState'
import { getTime } from '../src/utils/Now'

export default function NewTodo() {
  // TodoState.jsで定義したtosos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState)

  // Now.jsで定義したcurerntTimeを呼び出し
  const { currentTime } = getTime()

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [priority, setPriority] = useState('')

  // 新しいTodoのidを定義
  const id =
    // ミリ単位での日付を取得し文字列型に変更
    new Date().getTime().toString() +
    // 乱数を取得し文字列型に変更し文字列連結
    Math.floor(Math.random() * 10).toString()

  // Todosに新しいTodoを追加
  const onSubmit = () => {
    const newTodos = [
      {
        id,
        title,
        detail,
        priority,
        status: 'not_started',
        created_day: currentTime,
        updated_day: currentTime,
      },
      ...todos,
    ]
    setTodos(newTodos)
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
            <BackButton />
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
