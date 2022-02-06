import { ChakraProvider, HStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { Paginator, Previous, Next, PageGroup } from 'chakra-paginator'

const Pagination = () => {
  const pagesQuantity = 6

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
    >
      <HStack spacing="20px" p={4}>
        <Previous w={8} h={8} bg="White" border="1px solid Black">
          <ChevronLeftIcon color="gray.400" w={5} h={5} />
        </Previous>
        <PageGroup isInline align="center" spacing="10px" />
        <Next w={8} h={8} bg="White" border="1px solid Black">
          <ChevronRightIcon color="gray.400" w={5} h={5} />
        </Next>
      </HStack>
    </Paginator>
  )
}

export default Pagination
