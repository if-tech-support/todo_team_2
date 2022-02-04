import { Button } from '@chakra-ui/react'

export const CreateButton = (props) => {
  const { onSubmit } = props

  return (
    <Button
      backgroundColor="green.400"
      borderRadius="50px"
      border="1px solid"
      borderColor="rgba(0, 0, 0, 0.8)"
      w="112px"
      h="40px"
      variant="solid"
      _hover={{ backgroundColor: 'green.500' }}
      onClick={() => onSubmit()}
    >
      CREATE
    </Button>
  )
}
