import { Radio, RadioGroup, Text, Stack } from '@chakra-ui/react'

const RadioPriority = () => {
  return (
    <>
      <Text fontSize="xl" fontWeight="700">
        PRIORITY
      </Text>
      <RadioGroup fontWeight="700">
        <Stack direction="row" spacing={8}>
          <Radio value="High">High</Radio>
          <Radio value="Middle">Middle</Radio>
          <Radio value="Low">Low</Radio>
        </Stack>
      </RadioGroup>
    </>
  )
}

export default RadioPriority
