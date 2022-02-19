import React from 'react'
import { useRouter } from 'next/router'
import { Flex, Spacer, IconButton } from '@chakra-ui/react'
import { DeleteIcon, EditIcon, ExternalLinkIcon } from '@chakra-ui/icons'

function MainButtons() {
  // 新規作成画面に遷移
  const router = useRouter()
  const nextTodoRouting = () => {
    router.push('/Newtodo/')
  }
  return (
    <Flex>
      <IconButton
        bg={'yellow.300'}
        aria-label="TRASH"
        icon={<DeleteIcon />}
        borderRadius="100%"
        _hover={{
          opacity: 0.9,
        }}
      />
      <Spacer />
      <IconButton
        bg={'pink.300'}
        aria-label="DRAFT"
        icon={<EditIcon />}
        borderRadius="100%"
        _hover={{
          opacity: 0.9,
        }}
        onClick={nextTodoRouting}
      />
      <Spacer />
      <IconButton
        bg={'green.300'}
        aria-label="NEW"
        icon={<ExternalLinkIcon />}
        borderRadius="100%"
        _hover={{
          opacity: 0.9,
        }}
      />
    </Flex>
  )
}

export default MainButtons
