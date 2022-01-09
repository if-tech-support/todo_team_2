import React from 'react';
import { Text } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';

export const SearchPriority = () => {
   return (
      <div>
      <Text fontSize="18px" fontWeight="700" fontFamily="Gothic A1">PRIORITY</Text>
      <Select
      placeholder="- - - - - - -"
      color="#000000"
      border="1px solid rgba(0, 0, 0, 0.8)" w={48} h={10} borderRadius={2.5} pt={2}>
      <option value="low">Low</option>
      <option value="middle">Middle</option>
      <option value="high">High</option>
      </Select>
   </div>
   )
}