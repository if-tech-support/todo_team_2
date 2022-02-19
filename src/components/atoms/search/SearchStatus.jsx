import React, { useState } from 'react'
import { Select, FormControl, FormLabel } from '@chakra-ui/react'
import Router from 'next/router'
import { useSetRecoilState } from 'recoil'
import { searchStatusState } from '../../../hooks/SearchStatus'

const SearchStatus = () => {
  const setSelectedStatus = useSetRecoilState(searchStatusState)

  const onSearchStatus = (e) => {
    setSelectedStatus(e.target.value)
  }

  return (
    <FormControl>
      <FormLabel
        htmlFor="status"
        fontFamily="Gothic A1"
        fontSize="18px"
        fontWeight="700"
      >
        STATUS
      </FormLabel>
      <Select
        id="status"
        placeholder="- - - - - - -"
        fontWeight="bold"
        width="192px"
        height="40px"
        borderRadius="10px"
        onChange={onSearchStatus}
      >
        <option>NOT STARTED</option>
        <option>DOING</option>
        <option>DONE</option>
      </Select>
    </FormControl>
  )
}

export default SearchStatus
