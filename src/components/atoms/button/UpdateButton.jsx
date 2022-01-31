import { Button } from '@chakra-ui/react';
import React from 'react';

export const UpdateButton = () => {
  return (
    <Button
        backgroundColor="green.600"
        borderRadius="50px"
        border="1px solid"
        borderColor="rgba(0, 0, 0, 0.8)"
        color="white"
        w="112px"
        h="40px"
        _hover={{ backgroundColor: "green.400" }}
    >
        UPDATE
    </Button>
  )
};
