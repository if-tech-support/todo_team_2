import { Box, Container, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'
import MainButtons from '../src/components/molecules/MainButtons'
import Header from '../src/components/organisms/Header/Header'
import SearchForm from '../src/components/atoms/search/SearchForm'
import SearchStatus from '../src/components/atoms/search/SearchStatus'
import { SearchPriority } from '../src/components/atoms/search/SearchPriority'
import TodoTable from '../src/components/organisms/Todo/TodoTable'
import { ResetButton } from '../src/components/atoms/button/ResetButton'

export default function Home() {
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
        <TodoTable />
      </Container>
    </>
  )
}
