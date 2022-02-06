import { Radio, RadioGroup, Text, Stack } from '@chakra-ui/react'

const RadioPriority = (props) => {
  const { setPriority } = props

  return (
    <>
      <Text fontSize="xl" fontWeight="700">
        PRIORITY
      </Text>
      <RadioGroup fontWeight="700">
        <Stack direction="row" spacing={8}>
          <Radio value="High" onChange={(e) => setPriority(e.target.value)}>
            High
          </Radio>
          <Radio value="Middle" onChange={(e) => setPriority(e.target.value)}>
            Middle
          </Radio>
          <Radio value="Low" onChange={(e) => setPriority(e.target.value)}>
            Low
          </Radio>
        </Stack>
      </RadioGroup>
    </>
  )
}

export default RadioPriority
