import React from "react";
import { Box, Container, Flex, Heading, Spacer, Text, VStack } from "@chakra-ui/react"
import DetailCard from "../../src/components/organisms/Todo/DetailCard"
import BackButton from "../../src/components/atoms/button/BackButton"
import EditButton from "../../src/components/atoms/button/EditButton"
import CommentButton from "../../src/components/atoms/button/CommentButton"


function index() {
  return (
    <Box>
    {/* ここからHeader（間もなくマージされるHeaderコンポーネントに取って代わられる ）*/}
        <Box bg="green.300">
            <Container maxW="container.lg">
                <Flex py="12px" alignItems="center">
                    <Heading fontSize="5xl">TODO</Heading>
                    <Spacer />
                    <Text>2022/01/01</Text>
                </Flex>
            </Container>
        </Box>
    {/* ここまでHeader */}
        <Container
            maxW="container.lg"
        >
            <Flex py="12px">
                <Heading as="h2" size="2xl">SHOW TODO</Heading> 
                <Spacer />
                <Flex width="40%">
                    <CommentButton />
                    <Spacer />
                    <EditButton/>
                    <Spacer />
                    <BackButton />
                </Flex>
            </Flex>
            <Flex alignItems="center">
                <DetailCard />
                 {/* 以下はダミーのコメント一覧 */}
                <VStack
                    mt="5"
                    h="460"
                    w="xl"
                >
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
                            <Heading
                                as="h5" 
                                size="sm"
                                color="white"
                            >
                                ジョン
                            </Heading>
                            <Spacer/>
                            <Heading
                                as="h5" 
                                size="sm"
                                color="white"
                            >
                                2022/01/01
                            </Heading>
                        </Flex>
                        <Box px={4}>
                            <Text>2日後までに完了お願いします。</Text>
                        </Box>
                    </Box>
                    <Spacer/>
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
                            <Heading
                                as="h5" 
                                size="sm"
                                color="white"
                            >
                                リンゴ
                            </Heading>
                            <Spacer/>
                            <Heading
                                as="h5" 
                                size="sm"
                                color="white"
                            >
                                2022/01/01
                            </Heading>
                        </Flex>
                        <Box px={4}>
                            <Text>内容確認いたしました。修正点メールしましたのでご確認ください。</Text>
                        </Box>
                    </Box>
                    <Spacer/>
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
                            <Heading
                                as="h5" 
                                size="sm"
                                color="white"
                            >
                                ポール
                            </Heading>
                            <Spacer/>
                            <Heading
                                as="h5" 
                                size="sm"
                                color="white"
                            >
                                2022/01/01
                            </Heading>
                        </Flex>
                        <Box px={4}>
                            <Text>2日後までに完了お願い致します。</Text>
                        </Box>
                    </Box>
                    <Spacer/>
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
                            <Heading
                                as="h5" 
                                size="sm"
                                color="white"
                            >
                                ジョージ
                            </Heading>
                            <Spacer/>
                            <Heading
                                as="h5" 
                                size="sm"
                                color="white"
                            >
                                2022/01/01
                            </Heading>
                        </Flex>
                        <Box px={4}>
                            <Text>Let it be</Text>
                        </Box>
                    </Box>
                </VStack>
            </Flex>
            {/* ここにページネーションが入ります */}
        </Container>
    </Box>
  )
}

export default index;
