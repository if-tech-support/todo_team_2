import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { NewTodo } from '../newtodo'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <NewTodo />
    </ChakraProvider>
  )
}

export default MyApp
