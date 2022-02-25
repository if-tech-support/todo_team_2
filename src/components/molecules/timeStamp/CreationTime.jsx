import { Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'

export const CreationTime = (props) => {
  const { created_day } = props
  return (
    <Stat>
      <StatLabel
        fontSize="16px"
        color="gray.800"
        lineHeight="1.1"
        fontWeight="medium"
      >
        Created
      </StatLabel>
      <StatNumber
        fontSize="18px"
        color="gray.800"
        lineHeight="1.1"
        fontWeight="medium"
      >
        <Text>{created_day}</Text>
      </StatNumber>
    </Stat>
  )
}
