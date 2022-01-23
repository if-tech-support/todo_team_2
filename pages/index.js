import { Box, Container, Flex, Heading, HStack, Spacer } from '@chakra-ui/react'
import MainButtons from '../src/components/molecules/MainButtons'
import Header from '../src/components/organisms/Header/Header'
import SearchForm from '../src/components/atoms/search/SearchForm'
import SearchStatus from '../src/components/atoms/search/SearchStatus'
import { SearchPriority } from '../src/components/atoms/search/SearchPriority'
import TodoTable from '../src/components/organisms/Todo/TodoTable'

export default function Home() {
  return (
    <>
      <Header />
      <Container maxW="container.lg">
        <Heading as="h2" size="lg" my={2}>
          TODO LIST
        </Heading>
        <Flex mb={8}>
          <HStack spacing="24px">
            <Box>
              <SearchForm />
            </Box>
            <Box>
              <SearchStatus />
            </Box>
            <Box>
              <SearchPriority />
            </Box>
          </HStack>
          <Spacer />
          <Box w="15%">
            <MainButtons />
          </Box>
        </Flex>
        <TodoTable />
      </Container>
    </>
  )
}
