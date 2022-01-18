import { Button } from '@chakra-ui/button'
import { Box, Flex, Stack, Text } from '@chakra-ui/layout'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat'
// import Header from '../src/components/organisms/Header/Header'
import React from 'react'
import { DetailTextarea } from '../src/components/atoms/input/DetailTextarea'
import Title from "../src/components/atoms/input/Title"
import { BackButton } from "../src/components/atoms/button/BackButton"

export default function EditTodo() {
    return (
        <div>
            {/* <Header /> */}
            <Box px="100px" pt={4}>
                <Stack spacing={1}>
                <Flex justifyContent="space-between" alignItems="center" pb={5}>
                    <Text
                    as="h1"
                    fontWeight="bold"
                    fontSize="28px">
                        EDIT TODO
                    </Text>
                    <BackButton />
                </Flex>
                <Title />
                <DetailTextarea />
                <Flex justifyContent="space-between" pt={5} alignItems="center">
                    <Flex justifyContent="space-between" w="368px">
                        <Stat>
                            <StatLabel
                                fontSize="16px"
                                color="gray.800"
                                lineHeight="1.1"
                                fontWeight="medium"
                            >
                                Created at
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
                        <Stat>
                            <StatLabel
                                fontSize="16px"
                                lineHeight="1.1"
                                fontWeight="medium"
                                color="gray.800"
                            >
                                Updated at
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
                    </Flex>
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
                </Flex>
                </Stack>
            </Box>
        </div>
    )
}
