import React, { useState }from 'react'
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

export default function CommentModal() {
  // 名前とコメントをuseStateで設定
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  // CommentState.jsで定義したcommentStateを呼び出し
  const [comments, setComments] = useRecoilState(commentState)

  // Now.jsで定義したcurrentTimeを呼び出し
  const { currentTime } = getTime()
  // CommentState.jsで定義したdateStateを呼び出し
  const [times, setTimes] = useRecoilState(dateState)
  // コメント投稿の識別用にidを設定
  const [id, setId] = useState(0)

  // CREATEボタンを押したときの挙動
  const onAddComment = () => {
    // timesにcurrentTime(コメント作成日)を追加する
    setTimes([
      ...times,
      currentTime,
    ])
    // commentsにid,name,comment,createdAtを持つオブジェクト（作成したコメント情報）を追加
    setComments(
      [
        ...comments,
        {
          id: times.length + 1,
          name: name,
          comment: comment,
          createdAt: currentTime,
        },
      ]
    )
    // モーダルを閉じるためにisOpenをfalseにする
    onClose()
    // モーダルに入力した値を初期化
    setName("")
    setComment("")
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()

  return (
    <>
      {/* CommentButton.jsxからインポート */}
      <CommentButton onClick={onOpen}/>
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
            <Button
              color="white"
              bg="green.600"
              mr={3}
              onClick={onAddComment}
            >
              CREATE
            </Button>
            <Button onClick={onClose}>CANCEL</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
