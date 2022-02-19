import { Button } from '@chakra-ui/button'
import React from 'react'
// onClickとpropsを追加
const CommentButton = (props) => {
  return (
    <Button
      backgroundColor="green.600"
      borderRadius="50px"
      border="1px solid"
      borderColor="rgba(0, 0, 0, 0.8)"
      color="white"
      w="112px"
      h="40px"
      variant="solid"
      _hover={{ backgroundColor: 'green.400' }}
      onClick={props.onClick}
    >
      Comment
    </Button>
  )
}

export default CommentButton
