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

export const NewTodo = () => {
  return (
    <>
      {/* <Flex backgroundColor="#68D391" pr={20} pl={20}>
        <Text fontSize="35px">TODO</Text>
        <Spacer />
        <Text>2022/01/01</Text>
      </Flex> */}
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
          <Text fontSize="1xl">TITLE</Text>
          <Input placeholder="" size="md" />
          <Text fontSize="1xl">DETAIL</Text>
          <Textarea placeholder="" h="200px" />

          <Text fontSize="1xl">PRIORITY</Text>
          <RadioGroup defaultValue="high">
            <Stack direction="row">
              <Radio value="high">High</Radio>
              <Radio value="middle">Middle</Radio>
              <Radio value="low">Low</Radio>
            </Stack>
          </RadioGroup>

          <Flex>
            <HStack spacing="24px" pos="absolute" right="20">
              <Button colorScheme="pink" w="80px" borderRadius="50">
                DRAFT
              </Button>
              <Button colorScheme="green" w="80px" borderRadius="50">
                CREATE
              </Button>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </>
  )
}
