import React from 'react'

import { Container, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'

import Header from '../src/components/organisms/Header/Header'
import DetailCard from '../src/components/organisms/Todo/DetailCard'
import BackButton from '../src/components/atoms/button/BackButton'
import { Comment } from '../src/components/atoms/comment/Comment'
import { CommentModal } from '../src/components/organisms/Modal/CommentModal'
import { useRouter } from 'next/router'

function ShowTodo() {
  const router = useRouter()
  return (
    <>
      <Header />
      <Container maxW="container.lg">
        <Flex py="12px">
          {/* 以下には現在プルリク中のHeadline.jsxが入ります*/}
          <Heading as="h3" size="lg">
            SHOW TODO
          </Heading>
          {/* 以上には現在プルリク中のHeadline.jsxが入ります*/}
          <Spacer />
          <Flex width="25%">
            <CommentModal />
            <Spacer />
            <BackButton />
          </Flex>
        </Flex>
        <HStack spacing={1}>
          {/* 詳細画面に表示するためにpropsとしてtitle,detail,created_dayを渡す */}
          <DetailCard
            title={router.query.title}
            detail={router.query.detail}
            created_day={router.query.created_day}
          />
          {/* <Stack pb="5" h="480" w="xl"> */}
          <Comment />
          {/* </Stack> */}
        </HStack>
        {/* ここにページネーションが入ります */}
      </Container>
    </>
  )
}

export default ShowTodo
