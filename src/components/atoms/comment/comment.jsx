import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { commentState } from '../../../hooks/CommentState'
import { useRouter } from 'next/router'

export const Comment =  () =>  {
  // 現存するコメントを全て取得
  const currentComments = useRecoilValue(commentState)
  // 対象となるtodoのidを取得するためにuseRouterを使用
  const router = useRouter()
  // 対象となるtodoのidを含むコメントのみを全て取得
  const targetComments = currentComments.filter(
    (comment) => comment.todoId === router.query.id
  )

  // コメント一覧を表示する
  return (
    <>
      {/* overfllow="auto"ではみ出た部分をスクロールで表示 */}
      <Box h={480} pt="20px" overflow="auto">
        {/* targetCommentsが空の時とそうでない時で条件分岐して一覧表示 */}
        {targetComments ? (
          targetComments.map((comment) => (
            // 余白(mbで指定)を挿入するためにFlexに変更し、flexFlowとmbを追加
            <Flex
              borderRadius="8px"
              border="1px"
              borderColor="Black"
              w="400px"
              h="100px"
              key={comment.id}
              mb="20px"
              flexWrap="wrap"
              alignContent="start"
            >
              <Flex
                bg="green"
                color="white"
                pr={5}
                pl={5}
                borderRadius="8px 8px 0 0"
                h="30px"
                w="100%"
                align="center"
                justifyContent="space-between"
              >
                <Text>{comment.name}</Text>
                <Text>{comment.createdAt}</Text>
              </Flex>
              <Box px={4}>
                <Text>{comment.comment}</Text>
              </Box>
            </Flex>
          ))
        ) : (
          <Box></Box>
        )}
      </Box>
    </>
  )
}
