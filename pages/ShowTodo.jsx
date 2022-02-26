import React from 'react'

import { Box, Container, Flex, Spacer } from '@chakra-ui/react'

import Header from '../src/components/organisms/Header/Header'
import DetailCard from '../src/components/organisms/Todo/DetailCard'
import BackButton from '../src/components/atoms/button/BackButton'
import { Comment } from '../src/components/atoms/comment/Comment'
import { CommentModal } from '../src/components/organisms/Modal/CommentModal'
import { Headline } from '../src/components/atoms/headline/Headline'

function ShowTodo() {
  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Flex py="12px">
          <Headline title="SHOW TODO" />
          <Spacer />
          <Flex width="25%">
            <CommentModal />
            <Spacer />
            <BackButton />
          </Flex>
        </Flex>
        <Flex>
          <Box width="50%">
            <DetailCard />
          </Box>
          <Spacer />
          {/* overfllow="auto"ではみ出た部分をスクロールで表示 */}
          <Box width="50%" h={480} overflow="auto">
            <Comment />
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default ShowTodo
