import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';

export const UpdateTime = () => {
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
        2022-01-01&nbsp;&nbsp;18:55
    </StatNumber>
</Stat>
  );
};
