import { Text } from '@chakra-ui/react';
import React from 'react';

export const Headline = (props) => {
  return (
    <Text
        as="h1"
        fontWeight="bold"
        fontSize="28px">
        {props.title}
    </Text>
  )
}
