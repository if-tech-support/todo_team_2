import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/layout'
import React from 'react'
import DetailCard from '../src/components/organisms/Todo/DetailCard'

export default function detail() {
  return (
    <>
      This is header
      <Container maxW="container.lg" mx="auto">
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
      </Container>
    </>
  )
}
