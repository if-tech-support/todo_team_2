import { Button } from '@chakra-ui/button'
import React from 'react'
import { useSetRecoilState } from 'recoil'
import {
  searchFormState,
  searchPriorityState,
  searchStatusState,
} from '../../../hooks/SearchStatus'

export const ResetButton = () => {
  // 検索に関連するstateを呼び出し
  const setSearchPriority = useSetRecoilState(searchPriorityState)
  const setSearchStatus = useSetRecoilState(searchStatusState)
  const setInputValue = useSetRecoilState(searchFormState)

  // それぞれのstateを初期化する
  const onClickReset = () => {
    setSearchPriority('')
    setSearchStatus('')
    setInputValue('')
  }

  return (
    <Button
      backgroundColor="gray.500"
      borderRadius="50px"
      border="1px solid"
      borderColor="rgba(0, 0, 0, 0.8)"
      w="104px"
      h="40px"
      variant="solid"
      _hover={{ backgroundColor: 'gray.600' }}
      onClick={onClickReset}
    >
      RESET
    </Button>
  )
}
