import React, { useState } from 'react'
import { Text } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import Router from 'next/router'

export const SearchPriority = () => {
  const [selectedPriority, setSelectedPriority] = useState("");

  const onSearchPriority = (e) => {
    setSelectedPriority(e.target.value)
    Router.push('/')
  }

  return (
    <div>
      <Text fontSize="18px" fontWeight="700" fontFamily="Gothic A1" pb={2}>
        PRIORITY
      </Text>
      <Select
        placeholder="- - - - - - -"
        color="#000000"
        border="1px solid rgba(0, 0, 0, 0.8)"
        size="md"
        w={48}
        onChange={onSearchPriority}
      >
        <option>Low</option>
        <option>Middle</option>
        <option>High</option>
      </Select>
    </div>
  )
}
