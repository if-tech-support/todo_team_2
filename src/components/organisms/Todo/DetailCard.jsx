import {
  Box,
  Flex,
  Heading,
  Spacer,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { todoState } from '../../../hooks/TodoState';
import EditButton from '../../atoms/button/EditButton'

export default function DetailCard() {
  // 渡されたidを取得するためにuseRouterを使用
  const router = useRouter();
  // 現存するtodosを呼び出し
  const todos = useRecoilValue(todoState);
  // idが渡されたidと最初に一致したtodoを取得
  const todoDetail = todos.find(todo => todo.id === router.query.id);

  return (
    <VStack
      p={3}
      borderRadius="15"
      border="1px"
      borderColor="blackAlpha.800"
      mr="2"
      h="480"
      w="xl"
      spacing={2}
    >
      <Box w="full">
        <Heading as="h2" size="md" bg="green.300" px={3} my={1}>
          Title
        </Heading>
        <Text fontSize="lg">{todoDetail.title}</Text>
      </Box>
      <Box w="full" h="full" minHeight={0}>
        <Heading as="h2" size="md" bg="green.300" px={3} my={1}>
          Detail
        </Heading>
        <Box h="100%" overflow="scroll">
          <Text fontSize="lg">{todoDetail.detail}</Text>
        </Box>
      </Box>
      <Spacer />
      <Flex pt={3} w="full">
        <Flex justifyContent="flex-end" w="full" p={4}>
          <Box>
            <EditButton />
          </Box>
          ‌ <Spacer />
          <Stat>
            <StatLabel fontSize="sm">Updated at</StatLabel>
            <StatNumber fontSize="md">{todoDetail.updated_day}</StatNumber>
          </Stat>
          <Spacer />
          <Stat>
            <StatLabel fontSize="sm">Created at</StatLabel>
            <StatNumber fontSize="md">{todoDetail.created_day}</StatNumber>
          </Stat>
        </Flex>
      </Flex>
    </VStack>
  )
}
