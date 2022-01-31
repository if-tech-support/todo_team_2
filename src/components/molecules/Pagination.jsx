import { ChakraProvider, HStack } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { Paginator, Previous, Next, PageGroup } from 'chakra-paginator'

const Pagination = () => {
  const pagesQuantity = 6

  /* the styles for the unselected page buttons */
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

  /* the styles for the unselected page buttons */
  const activeStyles = {
    w: 8,
    h: 8,
    bg: 'green.300',
    fontSize: 'sm',
    _hover: {
      bg: 'green.300',
    },
  }
  const separatorStyles = {
    w: 8,
    h: 8,
    bg: 'green.200',
  }

  return (
    <ChakraProvider>
      <Paginator
        activeStyles={activeStyles}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
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
    </ChakraProvider>
  )
}

export default Pagination
