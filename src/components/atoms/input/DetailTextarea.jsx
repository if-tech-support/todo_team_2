import { Text } from '@chakra-ui/layout'
import { Textarea } from '@chakra-ui/textarea'
import React from 'react'

export const DetailTextarea = (props) => {
  const { detail, setDetail } = props
  return (
    <>
      <Text fontSize="xl" fontWeight="700" pb={1.2} pt={4}>
        DETAIL
      </Text>
      <Textarea
        type="text"
        placeholder="Text"
        border="1px solid rgba(0,0,0,0.8)"
        rounded={10}
        size="lg"
        h="192px"
        fontWeight="700"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
      />
    </>
  )
}
