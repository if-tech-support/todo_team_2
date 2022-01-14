import React from 'react'
import { Text } from '@chakra-ui/react'

export default function test() {
  return (
    <>
      <Text fontWeight={'bold'} color={'green.300'}>
        Green.300, fontWeight:bold
      </Text>
      <Text color={'green.600'}>Green.600</Text>
      <Text fontWeight={'regular'} color={'grey.500'}>
        Grey.500, fontWeight:regular
      </Text>
    </>
  )
}
