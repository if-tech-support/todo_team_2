import React from 'react'
import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil'
import { searchFormState } from '../../../hooks/SearchStatus'

const SearchForm = () => {
  // フォームに入力する値のstateとset関数をrecoilで呼び出し
  const [inputValue, setInputValue] = useRecoilState(searchFormState)
  // フォームに入力した値でstateを更新する
  const onSearchInput = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <Text fontSize="18px" fontWeight="700" fontFamily="Gothic A1" pb={2}>
        SEARCH
      </Text>
      <InputGroup>
        <Input
          placeholder="Text"
          border="1px solid rgba(0, 0, 0, 0.8)"
          size="md"
          value={inputValue}
          onChange={onSearchInput}
        />
        <InputRightElement
          children={<SearchIcon color="rgba(0, 0, 0, 0.2)" />}
        />
      </InputGroup>
    </>
  )
}

export default SearchForm
