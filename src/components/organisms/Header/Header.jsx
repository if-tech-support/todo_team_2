import { Box, Container, Heading } from '@chakra-ui/layout'

const Header = () => {
  return (
    <Box bg={'green.300'}>
      <Container maxW="container.xl">
        <Box py="12px">
          <Heading fontSize="5xl">TODO</Heading>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
