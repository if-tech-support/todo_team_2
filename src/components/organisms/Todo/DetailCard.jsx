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
import EditButton from '../../atoms/button/EditButton'

export default function DetailCard({ title, detail, created_day }) {
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
        <Text fontSize="lg">{title}</Text>
      </Box>
      <Box w="full" h="full" minHeight={0}>
        <Heading as="h2" size="md" bg="green.300" px={3} my={1}>
          Detail
        </Heading>
        <Box h="100%" overflow="scroll">
          <Text fontSize="lg">{detail}</Text>
        </Box>
      </Box>
      <Spacer />
      <Flex pt={3} w="full">
        <Flex justifyContent="flex-end" w="full" p={4}>
          <Box>
            <EditButton />
          </Box>
          ‌ <Spacer />
          <Stat whiteSpace="nowrap">
            <StatLabel fontSize="sm">Updated at</StatLabel>
            <StatNumber fontSize="md">2022-01-01 18:55</StatNumber>
          </Stat>
          <Spacer />
          <Stat whiteSpace="nowrap">
            <StatLabel fontSize="sm">Created at</StatLabel>
            <StatNumber fontSize="md">{created_day}</StatNumber>
          </Stat>
        </Flex>
      </Flex>
    </VStack>
  )
}
