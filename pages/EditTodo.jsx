import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Box, Flex } from '@chakra-ui/layout'
import Header from '../src/components/organisms/Header/Header'
import { DetailTextarea } from '../src/components/atoms/input/DetailTextarea'
import Title from '../src/components/atoms/input/Title'
import BackButton from '../src/components/atoms/button/BackButton'
import { UpdateButton } from '../src/components/atoms/button/UpdateButton'
import { CreationTime } from '../src/components/molecules/timeStamp/CreationTime'
import { UpdateTime } from '../src/components/molecules/timeStamp/UpdateTime'
import { Headline } from '../src/components/atoms/headline/Headline'
import { editTodoState } from '../src/hooks/EditTodoState'

// 以下はダミーの編集したいtodo
const todo = {
  id: 1,
  title: '掃除',
  detail: 'キッチンの換気扇の油落とす',
  priority: 'High',
  status: 'not_started',
  created_day: '2022-01-12 10:40',
}

export default function EditTodo() {
  // EditTodoState.jsで定義したeditTodoのstateと更新関数を呼び出す
  const [editTodo, setEditTodo] = useRecoilState(editTodoState)
  // todoのタイトルと詳細のstateをローカルに定義
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

  // EditTodo画面のロード時に、編集したいtodoの情報をローカルなstateに保持させる
  useEffect(() => {
    console.log('useEffect発動！')
    setTitle(() => editTodo.title)
    setDetail(() => editTodo.detail)
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
        <DetailTextarea detail={detail} setDetail={setDetail} />
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
