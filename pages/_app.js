import '../styles/globals.scss'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    green: {
      50: '#F0FFF4',
      300: '#68D391',
      600: '#25855A',
    },
    grey: {
      500: '#B5B5B5',
      700: '#2D3748',
    },
    yellow: {
      300: '#F6E05E',
    },
    pink: {
      100: '#FED7E2',
    },
    red: {
      500: '#E53E3E',
    },
    blue: {
      300: '#63B3ED',
    },
  },

  fontWeight: {
    regular: '400',
    bold: '700',
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
