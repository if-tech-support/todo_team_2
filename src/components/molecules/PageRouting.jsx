import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { HStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
  Paginator,
  Previous,
  Next,
  Page,
  PageGroup,
  generatePages,
} from 'chakra-paginator'
import { todoState } from '../../hooks/TodoState'

const PageRouting = (props) => {
  // TodoState.jsで定義したtodos,setTodosを呼び出し
  const todos = useRecoilValue(todoState)

  // pagenationのページ数を監視するstateを定義
  const [pagesQuantity, setPagesQuantity] = useState(0)

  // 親コンポーネントから以下をpropsとして受け取る
  const { setCurPage, itemLimit } = props

  // ページネーターでページが選択される度にstate:curPageが更新される
  const handlePageChange = (page) => {
    setCurPage(page - 1)
  }

  // todosの要素数が変化するたびに、ページネーターのページ総数を変更
  useEffect(() => {
    // ページネーターのページ総数は、todoリストのオブジェクト数と1ページあたりの表示数から算出
    const pagesTotal = Math.ceil(todos.length / itemLimit)
    // 上で算出したページ総数をpagesQuantityに格納する
    setPagesQuantity(pagesTotal)
  }, [todos.length])

  /* 通常　buttonスタイル  */
  const normalStyles = {
    w: 8,
    h: 8,
    bg: 'White',
    fontSize: 'sm',
    border: '1px solid #000',
    _hover: {
      border: '1px solid #38A169',
      color: '#38A169',
    },
  }

  /* 選択中 buttonスタイル */
  const activeStyles = {
    w: 8,
    h: 8,
    bg: 'green.300',
    fontSize: 'sm',
    _hover: {
      bg: 'green.300',
    },
  }
  return (
    <Paginator
      activeStyles={activeStyles}
      normalStyles={normalStyles}
      pagesQuantity={pagesQuantity}
      onPageChange={handlePageChange}
    >
      <HStack spacing="20px" p={4}>
        <Previous w={8} h={8} bg="White" border="1px solid Black">
          <ChevronLeftIcon color="gray.400" w={5} h={5} />
        </Previous>
        <PageGroup isInline align="center" spacing="10px">
          {generatePages(pagesQuantity)?.map((page) => (
            <Page key={`paginator_page_${page}`} page={page} />
          ))}
        </PageGroup>
        <Next w={8} h={8} bg="White" border="1px solid Black">
          <ChevronRightIcon color="gray.400" w={5} h={5} />
        </Next>
      </HStack>
    </Paginator>
  )
}

export default PageRouting
