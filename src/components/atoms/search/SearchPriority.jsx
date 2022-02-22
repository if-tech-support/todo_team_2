import React from 'react'
import { Text } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { searchPriorityState } from '../../../hooks/SearchStatus'

export const SearchPriority = () => {
  const [selectedPriority, setSelectedPriority] =
    useRecoilState(searchPriorityState)

  const onSearchPriority = (e) => {
    setSelectedPriority(e.target.value)
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
        <option selected={selectedPriority === 'Low'}>Low</option>
        <option selected={selectedPriority === 'Middle'}>Middle</option>
        <option selected={selectedPriority === 'High'}>High</option>
      </Select>
    </div>
  )
}
