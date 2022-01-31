import { Text, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import React from 'react'

const Priority = () => {
  return (
    <>
      <Text fontSize="xl" fontWeight="700" pb={1.2} pt={4}>
        PRIORITY
      </Text>
      <RadioGroup defaultValue="high">
        <Stack direction="row">
          <Radio value="high">High</Radio>
          <Radio value="middle">Middle</Radio>
          <Radio value="low">Low</Radio>
        </Stack>
      </RadioGroup>
    </>
  )
}

export default Priority
