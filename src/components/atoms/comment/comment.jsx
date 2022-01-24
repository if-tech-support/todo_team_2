import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

export default function comment() {
  return (
    <>
      <Box
        borderRadius="8px"
        border="1px"
        borderColor="Black"
        w="400px"
        h="100px"
      >
        <Flex
          bg="green"
          color="white"
          pr={5}
          pl={5}
          borderRadius="8px 8px 0 0"
          h="30px"
          align="center"
          justifyContent="space-between"
        >
          <Text>name</Text>
          <Text>date</Text>
        </Flex>
        <Box pr={4} pl={4}>
          <Text>text</Text>
        </Box>
      </Box>
    </>
  )
}
