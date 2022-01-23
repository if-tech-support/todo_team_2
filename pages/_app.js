import '../styles/globals.scss'
<<<<<<< Updated upstream

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
=======
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
>>>>>>> Stashed changes
}

export default MyApp
