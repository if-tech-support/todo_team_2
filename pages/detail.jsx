import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout'
import React from 'react'
import DetailCard from './DetailCard'

export default function detail() {
  return (
    <>
      This is header
      <Box width="1080px" mx="auto">
        <Flex align="center" mb="16px">
          <Heading fontSize="3xl">SHOW TODO</Heading>
          <Spacer />
          <Flex>ボタンたち</Flex>
        </Flex>
        <Flex>
          <DetailCard />
          <Spacer />
          <Box>コメントたちが並びます</Box>
        </Flex>
      </Box>
    </>
  )
}
