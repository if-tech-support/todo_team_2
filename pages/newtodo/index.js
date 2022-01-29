import React, { useState } from 'react'
import Router from 'next/router'
import {
  Stack,
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
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

import { TodoState } from '../../src/hooks/TodoState'
import { Now } from '../../src/hooks/Now'

export default function NewTodo() {
  // TodoState.jsで定義したtosos,setTodosを呼び出し
  const { todos, setTodos } = TodoState()

  // Now.jsで定義したcurerntTimeを呼び出し
  const { currentTime } = Now()
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [priority, setPriority] = useState('High')

  // 現在のTodosの要素数を取得
  const quantity = Object.keys(todos).length
  // 新しいTodoのidを定義
  const id = quantity + 1

  console.log(todos)

  // Todosに新しいTodoを追加
  const onSubmit = () => {
    const newTodos = [
      {
        id,
        title,
        detail,
        priority,
        status: 'not_started',
        created_day: currentTime,
      },
      ...todos,
    ]
    setTodos(newTodos)
    setTitle('')
    setDetail('')
    Router.push('/')
  }

  return (
    <>
      <Flex
        align="center"
        height="70px"
        pr={20}
        pl={20}
        backgroundColor="#68D391"
      >
        <Heading fontSize="35px">TODO</Heading>
        <Spacer />
        <Heading as="p" fontSize={{ base: 'md', md: 'lg' }}>
          2022/01/01
        </Heading>
      </Flex>

      <Box p={10} mr={10} ml={10} height="100vh">
        <Stack spacing={3}>
          <Flex>
            <Heading as="h2" size="lg">
              NEW TODO
            </Heading>
            <Spacer />
            <Button colorScheme="green" w="80px" borderRadius="50">
              Back
            </Button>
          </Flex>
          <form>
            <FormControl>
              <FormLabel htmlFor="title">TITLE</FormLabel>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl mt="24px">
              <FormLabel htmlFor="detail">Detail</FormLabel>
              <Textarea
                id="detaile"
                type="text"
                size="lg"
                height="240px"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
            </FormControl>
            <FormControl mt="24px">
              <FormLabel as="legend">PRIORITY</FormLabel>
              <RadioGroup defaultValue="high">
                <HStack spacing="24px">
                  <Radio
                    value="high"
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    High
                  </Radio>
                  <Radio
                    value="middle"
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    Middle
                  </Radio>
                  <Radio
                    value="low"
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    Low
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            <Flex>
              <HStack spacing="24px" pos="absolute" right="20">
                <Button colorScheme="pink" w="80px" borderRadius="50">
                  DRAFT
                </Button>
                <Button
                  colorScheme="green"
                  w="80px"
                  borderRadius="50"
                  onClick={() => onSubmit()}
                >
                  CREATE
                </Button>
              </HStack>
            </Flex>
          </form>
        </Stack>
      </Box>
    </>
  )
}
