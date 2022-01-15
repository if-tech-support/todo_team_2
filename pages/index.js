import Head from 'next/head'
import { Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Container maxW='container.lg'>
        <Heading as="h2" size="lg" my={2}>
          TODO LIST
        </Heading>
      </Container>
    </>
  )
}
