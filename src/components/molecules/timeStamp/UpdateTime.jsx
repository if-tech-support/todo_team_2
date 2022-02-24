import { Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'

export const UpdateTime = (props) => {
  const { updated_day } = props

  return (
    <Stat>
      <StatLabel
        fontSize="16px"
        lineHeight="1.1"
        fontWeight="medium"
        color="gray.800"
      >
        Updated
      </StatLabel>
      <StatNumber
        fontSize="18px"
        lineHeight="1.1"
        fontWeight="medium"
        color="gray.800"
      >
        <Text>{updated_day}</Text>
      </StatNumber>
    </Stat>
  )
}
