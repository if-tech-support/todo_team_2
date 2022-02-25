import React from 'react'
import { useRouter } from 'next/router'
import { IconButton } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

function MainCreateButton() {
  // 新規作成画面に遷移
  const router = useRouter()
  const nextTodoRouting = () => {
    router.push('/Newtodo/')
  }
  return (
    <>
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
    </>
  )
}

export default MainCreateButton
