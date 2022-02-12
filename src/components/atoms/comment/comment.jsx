import React from 'react'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { commentState } from '../../../hooks/CommentState'

export const  Comment = () => {
  // コメント一覧を取得
  const currentComments = useRecoilValue(commentState)
  // コメント一覧を表示する
  return (
    <>
    {/* overfllow="auto"ではみ出た部分をスクロールで表示 */}
    <Box h={480} pt="20px" overflow="auto">
    {/* currentCommentsが空の時とそうでない時で条件分岐して一覧表示 */}
    {currentComments ?
    (currentComments.map((comment) => (
    // 余白(mbで指定)を挿入するためにFlexに変更し、flexFlowとmbを追加
    <Flex
    borderRadius="8px"
    border="1px"
    borderColor="Black"
    w="400px"
    h="100px"
    key={comment.id}
    flexFrow="column"
    mb="20px"
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
    </Flex>
    )))
    :
    <Box></Box>
    }
    </Box>
    </>
  )
}
