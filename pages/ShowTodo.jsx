import React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import Header from '../src/components/organisms/Header/Header'
import DetailCard from '../src/components/organisms/Todo/DetailCard'
import BackButton from '../src/components/atoms/button/BackButton'
import CommentButton from '../src/components/atoms/button/CommentButton'

function index() {
  return (
    <>
      <Box>
        <Header />
        <Container maxW="container.lg">
          <Flex py="12px">
            {/* 以下には現在プルリク中のHeadline.jsxが入ります*/}
            <Heading as="h3" size="lg">
              SHOW TODO
            </Heading>
            {/* 以上には現在プルリク中のHeadline.jsxが入ります*/}
            <Spacer />
            <Flex width="25%">
              <CommentButton />
              <Spacer />
              <BackButton />
            </Flex>
          </Flex>
          <HStack spacing={1}>
            <DetailCard />
            {/* 以下はダミーのコメント一覧 */}
            <VStack pt="5" h="480" w="xl">
              <Box
                borderRadius="15px"
                border="1px"
                borderColor="blackAlpha.800"
                width="full"
                height="full"
              >
                <Flex
                  bg="green.600"
                  px={4}
                  py={1}
                  borderRadius="15px 15px 0 0"
                  borderBottom="1px"
                  borderColor="blackAlpha.800"
                >
                  <Heading as="h5" size="sm" color="white">
                    ジョン
                  </Heading>
                  <Spacer />
                  <Heading as="h5" size="sm" color="white">
                    2022/01/01
                  </Heading>
                </Flex>
                <Box px={4}>
                  <Text>2日後までに完了お願いします。</Text>
                </Box>
              </Box>
              <Spacer />
              <Box
                borderRadius="15px"
                border="1px"
                borderColor="blackAlpha.800"
                width="full"
                height="full"
              >
                <Flex
                  bg="green.600"
                  px={4}
                  py={1}
                  borderRadius="15px 15px 0 0"
                  borderBottom="1px"
                  borderColor="blackAlpha.800"
                >
                  <Heading as="h5" size="sm" color="white">
                    リンゴ
                  </Heading>
                  <Spacer />
                  <Heading as="h5" size="sm" color="white">
                    2022/01/01
                  </Heading>
                </Flex>
                <Box px={4}>
                  <Text>
                    内容確認いたしました。修正点メールしましたのでご確認ください。
                  </Text>
                </Box>
              </Box>
              <Spacer />
              <Box
                borderRadius="15px"
                border="1px"
                borderColor="blackAlpha.800"
                width="full"
                height="full"
              >
                <Flex
                  bg="green.600"
                  px={4}
                  py={1}
                  borderRadius="15px 15px 0 0"
                  borderBottom="1px"
                  borderColor="blackAlpha.800"
                >
                  <Heading as="h5" size="sm" color="white">
                    ポール
                  </Heading>
                  <Spacer />
                  <Heading as="h5" size="sm" color="white">
                    2022/01/01
                  </Heading>
                </Flex>
                <Box px={4}>
                  <Text>2日後までに完了お願い致します。</Text>
                </Box>
              </Box>
              <Spacer />
              <Box
                borderRadius="15px"
                border="1px"
                borderColor="blackAlpha.800"
                width="full"
                height="full"
              >
                <Flex
                  bg="green.600"
                  px={4}
                  py={1}
                  borderRadius="15px 15px 0 0"
                  borderBottom="1px"
                  borderColor="blackAlpha.800"
                >
                  <Heading as="h5" size="sm" color="white">
                    ジョージ
                  </Heading>
                  <Spacer />
                  <Heading as="h5" size="sm" color="white">
                    2022/01/01
                  </Heading>
                </Flex>
                <Box px={4}>
                  <Text>Let it be</Text>
                </Box>
              </Box>
            </VStack>
          </HStack>
          {/* 以上はダミーのコメント一覧 */}
          {/* ここにページネーションが入ります */}
        </Container>
      </Box>
    </>
  )
}

export default index
