import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { commentState } from '../../../hooks/CommentState'

export default function Comment() {
  // コメント一覧を取得
  const currentComments = useRecoilValue(commentState)
  // コメント一覧を表示する
  return (
    <>
    {currentComments.map((comment) => (
      <Box
        borderRadius="8px"
        border="1px"
        borderColor="Black"
        w="400px"
        h="100px"
        key={comment.id}
      >
        <Flex
          bg="green"
          color="white"
          pr={5}
          pl={5}
          borderRadius="8px 8px 0 0"
          h="30px"
          align="center"
          justifyContent="space-between"
        >
          <Text>{comment.name}</Text>
          <Text>{comment.createdAt}</Text>
        </Flex>
        <Box pr={4} pl={4}>
          <Text>{comment.comment}</Text>
        </Box>
      </Box>
    ))}
    </>
  )
}
