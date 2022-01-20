import React from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'

export default function comment() {
  return (
    <>
      <Box borderRadius="8px" borderWidth="1px" w="400px" h="100px">
        <Flex
          bg="green"
          color="white"
          pr={5}
          pl={5}
          borderRadius="8px 8px 0 0"
          h="30px"
          align="center"
        >
          <Box>
            <Text>name</Text>
          </Box>
          <Spacer />
          <Box>
            <Text>date</Text>
          </Box>
        </Flex>
        <Box pr="10px" pl="10px">
          <Text>text</Text>
        </Box>
      </Box>
    </>
  )
}
