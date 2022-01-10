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

export default function Detail() {
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
        <Text fontSize="lg">Text</Text>
      </Box>
      <Box w="full" h="full" minHeight={0}>
        <Heading as="h2" size="md" bg="green.300" px={3} my={1}>
          Detail
        </Heading>
        <Box h="100%" overflow="scroll">
          <Text fontSize="lg">Text</Text>
        </Box>
      </Box>
      <Spacer />
      <Flex justifyContent="flex-end" w="full" p={4}>
        <Box mr={5}>
          <Stat>
            <StatLabel>Updated at</StatLabel>
            <StatNumber>2022-01-01 18:55</StatNumber>
          </Stat>
        </Box>
        <Box>
          <Stat>
            <StatLabel>Created at</StatLabel>
            <StatNumber>2022-01-01 18:55</StatNumber>
          </Stat>
        </Box>
      </Flex>
    </VStack>
  )
}
