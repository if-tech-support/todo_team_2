import React, { useState }from 'react'
import { useRecoilState } from 'recoil'
import { commentState, dateState } from '../../../hooks/CommentsState'
import { getTime } from '../../../utils/Now'

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

  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [comments, setComments] = useRecoilState(commentState)

  const { currentTime } = getTime()
  const [times, setTimes] = useRecoilState(dateState)
  const [id, setId] = useState(0)

  const onAddComment = () => {
    setTimes([
      ...times,
      currentTime,
    ])
    setComments(
      [
        ...comments,
        { id: times.length + 1, name: name, comment: comment, createdAt: currentTime},
      ]
    )
    onClose()
    setName("")
    setComment("")
    // setComments([])
    // setTimes([])
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()

  return (
    <>
      <Button
        backgroundColor="green.600"
        borderRadius="50px"
        border="1px solid"
        borderColor="rgba(0, 0, 0, 0.8)"
        color="white"
        w="112px"
        h="40px"
        variant="solid"
        _hover={{ backgroundColor: 'green.400' }}
        onClick={onOpen}
      >
        Comment
      </Button>
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
