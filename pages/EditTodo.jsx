import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Box, Flex, Text } from '@chakra-ui/layout'
import Header from '../src/components/organisms/Header/Header'
import Markdown from '../src/components/molecules/Markdown'
import Title from '../src/components/atoms/input/Title'
import BackButton from '../src/components/atoms/button/BackButton'
import { UpdateButton } from '../src/components/atoms/button/UpdateButton'
import { CreationTime } from '../src/components/molecules/timeStamp/CreationTime'
import { UpdateTime } from '../src/components/molecules/timeStamp/UpdateTime'
import { Headline } from '../src/components/atoms/headline/Headline'
import { editTodoState } from '../src/hooks/EditTodoState'
import { errorState } from '../src/hooks/ErrorState'

export default function EditTodo() {
  // EditTodoState.jsで定義したeditTodoのstateと更新関数を呼び出す
  const editTodo = useRecoilValue(editTodoState)
  // todoのタイトルと詳細のstateをローカルに定義
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  // エラーの表示と非表示を管理するステートを定義
  const formErrors = useRecoilValue(errorState)

  // EditTodo画面のロード時に、編集したいtodoの情報をローカルなstateに保持させる
  useEffect(() => {
    setTitle(editTodo.title)
    setDetail(editTodo.detail)
  }, [])

  return (
    <div>
      <Header />
      <Box px="100px" pt={4}>
        <Flex justifyContent="space-between" alignItems="center" pb={5}>
          <Headline title="EDIT TODO" />
          <BackButton />
        </Flex>
        <Title title={title} setTitle={setTitle} />
        <Text color="red">{formErrors.title}</Text>
        <Markdown detail={detail} setDetail={setDetail} />
        <Text color="red">{formErrors.detail}</Text>
        <Flex justifyContent="space-between" pt={5} alignItems="center">
          <Flex justifyContent="space-between" w="368px">
            <CreationTime created_day={editTodo.created_day} />
            <UpdateTime updated_day={editTodo.updated_day} />
          </Flex>
          <UpdateButton title={title} detail={detail} />
        </Flex>
      </Box>
    </div>
  )
}
