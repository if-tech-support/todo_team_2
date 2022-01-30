import React from 'react'

import { Stack, Text, Box, Flex, Spacer, HStack } from '@chakra-ui/react'
import { BackButton } from '../src/components/atoms/button/BackButton'
import { DetailTextarea } from '../src/components/atoms/input/DetailTextarea'
import Title from '../src/components/atoms/input/Title'
import { DraftButton } from '../src/components/atoms/button/DraftButton'
import { CreateButton } from '../src/components/atoms/button/CreateButton'
import RadioPriority from '../src/components/atoms/input/RadioPriority'
import Header from '../src/components/organisms/Header/Header'

export default function NewTodo() {
  return (
    <>
      <Header />

      <Box p={10} mr={10} ml={10} height="100vh">
        <Stack spacing={3}>
          <Flex>
            <Text fontSize="2xl" fontWeight="semibold">
              NEW TODO
            </Text>
            <Spacer />
            <BackButton />
          </Flex>
          <Title />
          <DetailTextarea />
          <RadioPriority />

          <Flex>
            <HStack spacing="24px" pos="absolute" right="20">
              <DraftButton />
              <CreateButton />
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  )
}
