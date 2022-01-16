import { Box, Flex, Heading, Spacer, Text } from '@chakra-ui/layout'

const Header = () => {
  return (
    <Box bg={'green.300'}>
      <Flex width="1080px" mx="auto" py="12px" alignItems="center">
        <Heading fontSize="5xl">TODO</Heading>
        <Spacer />
        <Text>2022/01/01</Text>
      </Flex>
    </Box>
  )
}

export default Header
