import React, { useState } from "react"
import { Box, Container, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'
import MainCreateButton from '../src/components/atoms/button/MainCreateButton'
import Header from '../src/components/organisms/Header/Header'
import SearchForm from '../src/components/atoms/search/SearchForm'
import SearchStatus from '../src/components/atoms/search/SearchStatus'
import { SearchPriority } from '../src/components/atoms/search/SearchPriority'
import TodoTable from '../src/components/organisms/Todo/TodoTable'
import { ResetButton } from '../src/components/atoms/button/ResetButton'
import PageRouting from "../src/components/molecules/PageRouting";

export default function Home() {

  // 1ページに表示するtodoItemの数を設定
  const itemLimit = 5;

  // 現在表示中のページを監視するstateを定義
  const [curPage, setCurPage] = useState(0);

  return (
    <>
      <Header />
      <Container maxW="container.xl">
        <Heading as="h2" size="lg" my={2}>
          TODO LIST
        </Heading>
        <Flex mb={8}>
          <HStack spacing="24px" align="flex-end">
            <Box>
              <SearchForm />
            </Box>
            <Box>
              <SearchStatus />
            </Box>
            <Box>
              <SearchPriority />
            </Box>
            <ResetButton />
          </HStack>
          <Spacer />
          <Box display="flex" justifyContent="right">
            <MainCreateButton />
          </Box>
        </Flex>
        <TodoTable curPage={curPage} itemLimit={itemLimit} />
        <Flex justifyContent="center">
          <PageRouting
            itemLimit={itemLimit}
            setCurPage={setCurPage}
            curPage={curPage}
          />
        </Flex>

      </Container>
    </>
  )
}
