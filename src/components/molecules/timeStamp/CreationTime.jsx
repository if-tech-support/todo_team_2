import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';

export const CreationTime = () => {
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
          2022-01-01&nbsp;&nbsp;18:55
      </StatNumber>
    </Stat>
  );
};
