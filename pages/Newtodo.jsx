import { useState } from 'react'
import Router from 'next/router'
import { useRecoilState } from 'recoil'

import { Stack, Text, Box, Flex, Spacer, HStack } from '@chakra-ui/react'
import BackButton from '../src/components/atoms/button/BackButton'
import Markdown from '../src/components/molecules/Markdown'
import Title from '../src/components/atoms/input/Title'
import { DraftButton } from '../src/components/atoms/button/DraftButton'
import { CreateButton } from '../src/components/atoms/button/CreateButton'
import RadioPriority from '../src/components/atoms/input/RadioPriority'
import Header from '../src/components/organisms/Header/Header'

import { todoState } from '../src/hooks/TodoState'
import { getTime } from '../src/utils/Now'

export default function NewTodo() {
  // TodoState.jsで定義したtosos,setTodosを呼び出し
  const [todos, setTodos] = useRecoilState(todoState);

  // Now.jsで定義したcurerntTimeを呼び出し
  const { currentTime } = getTime()
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [priority, setPriority] = useState('')

  // エラーの表示と非表示を管理するステートを定義
  const [formErrors, setFormErrors] = useState({})

  // 新しいTodoのidを定義
  const id =
    // ミリ単位での日付を取得し文字列型に変更
    new Date().getTime().toString() +
    // 乱数を取得し文字列型に変更し文字列連結
    Math.floor(Math.random() * 10).toString()

  // タイトル欄、詳細欄、ラジオボタンの下に表示させるエラー文を定義
  const validate = (title, detail, priority) => {
    const errors = {}
    if (!title) {
      errors.title = 'Title is required!'
    }
    if (!detail) {
      errors.detail = 'Detail is required!'
    }
    if (!priority) {
      errors.priority = 'Priority is required!'
    }
    return errors
  }
  const onSubmit = () => {
    if (!title || !detail || !priority) {
      // 空欄が一か所でもあれば、validate関数で定義したエラー文を表示し、else以降の処理が行われないようにする
      setFormErrors(validate(title, detail, priority))
    } else {
      //欄が全て埋まっていたらTodosに新しいTodoを追加し、ページ遷移する
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
          <Text color="red">{formErrors.title}</Text>
          <Markdown detail={detail} setDetail={setDetail} />
          <Text color="red">{formErrors.detail}</Text>
          <RadioPriority setPriority={setPriority} />
          <Text color="red">{formErrors.priority}</Text>
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
