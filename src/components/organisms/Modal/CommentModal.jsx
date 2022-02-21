import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { commentState, dateState } from '../../../hooks/CommentState'
import { getTime } from '../../../utils/Now'
import CommentButton from '../../atoms/button/CommentButton'

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Textarea,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const CommentModal = () => {
  // 名前とコメントをuseStateで設定
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  // CommentState.jsで定義したcommentStateを呼び出し
  const [comments, setComments] = useRecoilState(commentState)

  // Now.jsで定義したcurrentTimeを呼び出し
  const { currentTime } = getTime()

  // 新しいcommentのidを定義
  const id =
    // ミリ単位での日付を取得し文字列型に変更
    new Date().getTime().toString() +
    // 乱数を取得し文字列型に変更し文字列連結
    Math.floor(Math.random() * 10).toString()

  // 対象となるtodoのidを取得するためにuseRouterを使用
  const router = useRouter()

  // CREATEボタンを押したときの挙動
  const onAddComment = () => {
    // 入力された値が空のときにアラートを表示する
    if (!name && comment) {
      alert('名前が空です')
    } else if (!comment && name) {
      alert('コメントが空です')
    } else if (!name && !comment) {
      alert('名前とコメントが空です')
    } else {
      // commentsにid,name,comment,createdAtを持つオブジェクト（作成したコメント情報）を追加
      setComments([
        ...comments,
        {
          id: id,
          // 対象となるtodoのidを取得して設定
          todoId: router.query.id,
          name: name,
          comment: comment,
          createdAt: currentTime,
        },
      ])
      // モーダルを閉じるためにisOpenをfalseにする
      onClose()
    }
    // モーダルに入力した値を初期化
    setName('')
    setComment('')
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()

  return (
    <>
      {/* CommentButton.jsxからインポート */}
      <CommentButton onClick={onOpen} />
      <Modal initialFocusRef={initialRef} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="4xl">Comment</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel fontSize="lg">Name</FormLabel>
              <Input
                placeholder="Name"
                ref={initialRef}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="lg">Your Comment</FormLabel>
              <Textarea
                height="auto"
                rows={7}
                placeholder="Your Comment"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button color="white" bg="green.600" mr={3} onClick={onAddComment}>
              CREATE
            </Button>
            <Button onClick={onClose}>CANCEL</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
