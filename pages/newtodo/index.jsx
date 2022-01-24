import React from 'react'

import {
  Stack,
  Text,
  Input,
  RadioGroup,
  Radio,
  Box,
  Textarea,
  Button,
  Flex,
  Spacer,
  HStack,
  Heading,
} from '@chakra-ui/react'
import { BackButton } from '../../src/components/atoms/button/BackButton'
import { DetailTextarea } from '../../src/components/atoms/input/DetailTextarea'
import Title from '../../src/components/atoms/input/Title'
import { DraftButton } from '../../src/components/atoms/button/DraftButton'
import { CreateButton } from '../../src/components/atoms/button/CreateButton'
import Priority from '../../src/components/atoms/input/Priority'
import Header from '../../src/components/organisms/Header/Header'

export default function NewTodo() {
  return (
    <>
      <Header />

      <Box p={10} mr={10} ml={10} height="100vh">
        <Stack spacing={3}>
          <Flex>
            <Text fontSize="2xl">NEW TODO</Text>
            <Spacer />
            <BackButton />
          </Flex>
          <Title />
          <DetailTextarea />
          <Priority />

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
