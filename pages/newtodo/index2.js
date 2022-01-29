// import React, { useState } from 'react'
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
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

import { todoTitle, todoDetail, todoPriority} from '../../src/hooks/TodoState'
import { useRecoilState } from "recoil"
import Link from 'next/link'

export default function NewTodo() {
  const [ title, setTitle] = useRecoilState(todoTitle)
  const [ detail, setDetail] = useRecoilState(todoDetail)
  const [ priority, setPriority] = useRecoilState(todoPriority)

  console.log(title)
  console.log(priority)
  console.log(detail)

  // const onSubmit = () => {
    // e.preventDefault()
  //   console.log('click')
  //   setTodo(todo, {
  //     title,
  //     detail,
  //     priority,
  //     status: 'not_started',
  //     create: 'timeStamp',
  //   })
  //   console.log(todo)
  // }

  return (
    <>
      {/* {todo} */}
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
            <Text fontSize="2xl">NEW TODO</Text>
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
                id="detail"
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
                <Link href="/">
                  {/* "/"は一覧ページへのリンク */}
                  <button
                    colorScheme="green"
                    w="80px"
                    borderRadius="50"
                  >
                    Create
                  </button>
                </Link>
                {/* <Button
                  colorScheme="green"
                  w="80px"
                  borderRadius="50"
                  onClick={() => onSubmit()}
                >
                  CREATE
                </Button> */}
              </HStack>
            </Flex>
          </form>
        </Stack>
      </Box>
    </>
  )
}