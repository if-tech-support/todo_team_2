import { Box, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/layout'

const Header = () => {
  return (
    <Box bg={'green.300'}>
      <Container maxW="container.xl">
        <Flex py="12px" alignItems="center">
          <Heading fontSize="5xl">TODO</Heading>
          <Spacer />
          <Text>2022/01/01</Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default Header
