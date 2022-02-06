import React from 'react'
import {
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Header from '../src/components/organisms/Header/Header'
import DetailCard from '../src/components/organisms/Todo/DetailCard'
import BackButton from '../src/components/atoms/button/BackButton'
import CommentButton from '../src/components/atoms/button/CommentButton'
import Comment from '../src/components/atoms/comment/Comment'

function index() {
  //Routerを定義
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
            <CommentButton />
            <Spacer />
            <BackButton />
          </Flex>
        </Flex>
        <HStack spacing={1}>
          {/* トップから渡ってきたquery情報をDerailCardに渡す */}
          <DetailCard
            title={router.query.title}
            detail={router.query.detail}
            created_day={router.query.created_day}
          />
          <VStack pb="5" h="480" w="xl">
            <Comment />
          </VStack>
        </HStack>
        {/* ここにページネーションが入ります */}
      </Container>
    </>
  )
}

export default index
