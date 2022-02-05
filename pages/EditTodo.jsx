import { Box, Flex } from '@chakra-ui/layout'
import Header from '../src/components/organisms/Header/Header'
import React from 'react'
import { DetailTextarea } from '../src/components/atoms/input/DetailTextarea'
import Title from '../src/components/atoms/input/Title'
import BackButton from '../src/components/atoms/button/BackButton'
import { UpdateButton } from '../src/components/atoms/button/UpdateButton'
import { CreationTime } from '../src/components/molecules/timeStamp/CreationTime'
import { UpdateTime } from '../src/components/molecules/timeStamp/UpdateTime'
import { Headline } from '../src/components/atoms/headline/Headline'

export default function EditTodo() {
  return (
    <div>
      <Header />
      <Box px="100px" pt={4}>
        <Flex justifyContent="space-between" alignItems="center" pb={5}>

          <Headline title="EDIT TODO" />
          <BackButton />
        </Flex>
        <Title />
        <DetailTextarea />
        <Flex justifyContent="space-between" pt={5} alignItems="center">
          <Flex justifyContent="space-between" w="368px">

            <CreationTime />
            <UpdateTime />
          </Flex>
          <UpdateButton />
        </Flex>
      </Box>
    </div>
  )
}
