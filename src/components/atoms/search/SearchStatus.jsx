import React from 'react'
import { Select, FormControl, FormLabel } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { searchStatusState } from '../../../hooks/SearchStatus'

const SearchStatus = () => {
  // selectボックスの値のstateとset関数をrecoilで呼び出し
  const [selectedStatus, setSelectedStatus] = useRecoilState(searchStatusState)
  // 選択された値でstateを更新する
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
        <option selected={selectedStatus === 'NOT STARTED'}>NOT STARTED</option>
        <option selected={selectedStatus === 'DOING'}>DOING</option>
        <option selected={selectedStatus === 'DONE'}>DONE</option>
      </Select>
    </FormControl>
  )
}

export default SearchStatus
