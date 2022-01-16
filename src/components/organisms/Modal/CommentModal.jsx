import React from 'react'
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef()
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="4xl">Comment</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel fontSize="lg">Name</FormLabel>
              <Input placeholder="Name" ref={initialRef} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="lg">Your Comment</FormLabel>
              <Textarea height="auto" rows={7} placeholder="Your Comment" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button color="white" bg="green.600" mr={3} onClick={onClose}>
              CREATE
            </Button>
            <Button onClick={onClose}>CANCEL</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}
