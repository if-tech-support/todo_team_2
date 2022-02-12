import React, { useState, useEffect } from "react"
import { useRecoilState } from 'recoil'
import { Box, Container, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'
import MainButtons from '../src/components/molecules/MainButtons'
import Header from '../src/components/organisms/Header/Header'
import SearchForm from '../src/components/atoms/search/SearchForm'
import SearchStatus from '../src/components/atoms/search/SearchStatus'
import { SearchPriority } from '../src/components/atoms/search/SearchPriority'
import TodoTable from '../src/components/organisms/Todo/TodoTable'
import { ResetButton } from '../src/components/atoms/button/ResetButton'
import Pagination from "../src/components/molecules/Pagination";
import { todoState } from '../src/hooks/TodoState'

export default function Home() {
  // todosの読み込み機能だけ利用
  const todos = useRecoilState(todoState)

  // 1ページに表示するtodoItemの数を設定
  const itemLimit = 5;

  // pagenationのページ数を監視するstateを定義
  const [pagesQuantity, setPagesQuantity] = useState(0);

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
          <Box w="150px">
            <MainButtons />
          </Box>
        </Flex>
        <TodoTable curPage={curPage} itemLimit={itemLimit} />
        <Flex justifyContent="center">
          <Pagination
            itemLimit={itemLimit}
            setCurPage={setCurPage}
            pagesQuantity={pagesQuantity}
            setPagesQuantity={setPagesQuantity}
          />
        </Flex>

      </Container>
    </>
  )
}
