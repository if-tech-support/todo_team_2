import '../styles/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RecoilRoot>
  )
}

export default MyApp
