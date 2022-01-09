import React from 'react'
import { Select } from '@chakra-ui/react'

export const SearchPriority = () => {
  return (
    <div>
      <Select placeholder="Select option">
        <option value="option1">Low</option>
        <option value="option2">Middle</option>
        <option value="option3">High</option>
      </Select>
    </div>
  )
}
