import React from 'react'
import { Box, HStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Pagination = () => {
  return (
    <>
      <HStack spacing="15px">
        <Box
          w={35}
          h={35}
          borderRadius={5}
          bg="gray.400"
          color="White"
          _hover={{
            bg: 'gray.300',
          }}
        >
          <NextLink href="" passHref>
            <Link
              w={'100%'}
              h={'100%'}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              &lt;
            </Link>
          </NextLink>
        </Box>
        <Box
          w={35}
          h={35}
          borderRadius={5}
          border="1px"
          borderColor="Black"
          _hover={{
            borderColor: 'teal.500',
            color: 'teal.500',
          }}
        >
          <NextLink href="" passHref>
            <Link
              w={'100%'}
              h={'100%'}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              1
            </Link>
          </NextLink>
        </Box>
        <Box
          w={35}
          h={35}
          borderRadius={5}
          border="1px"
          borderColor="Black"
          _hover={{
            borderColor: 'teal.500',
            color: 'teal.500',
          }}
        >
          <NextLink href="" passHref>
            <Link
              w={'100%'}
              h={'100%'}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              2
            </Link>
          </NextLink>
        </Box>
        <Box
          w={35}
          h={35}
          borderRadius={5}
          border="1px"
          borderColor="Black"
          _hover={{
            borderColor: 'teal.500',
            color: 'teal.500',
          }}
        >
          <NextLink href="" passHref>
            <Link
              w={'100%'}
              h={'100%'}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              ...
            </Link>
          </NextLink>
        </Box>
        <Box
          w={35}
          h={35}
          borderRadius={5}
          border="1px"
          borderColor="Black"
          _hover={{
            borderColor: 'teal.500',
            color: 'teal.500',
          }}
        >
          <NextLink href="" passHref>
            <Link
              w={'100%'}
              h={'100%'}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              5
            </Link>
          </NextLink>
        </Box>
        <Box
          w={35}
          h={35}
          borderRadius={5}
          border="1px"
          borderColor="Black"
          _hover={{
            borderColor: 'teal.500',
            color: 'teal.500',
          }}
        >
          <NextLink href="" passHref>
            <Link
              w={'100%'}
              h={'100%'}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              6
            </Link>
          </NextLink>
        </Box>
        <Box
          w={35}
          h={35}
          borderRadius={5}
          border="1px"
          borderColor="Black"
          color="gray.400"
          _hover={{
            bg: 'gray.300',
            color: 'White',
            border: '0',
          }}
        >
          <NextLink href="" passHref>
            <Link
              w={'100%'}
              h={'100%'}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              &gt;
            </Link>
          </NextLink>
        </Box>
      </HStack>
    </>
  )
}

export default Pagination
