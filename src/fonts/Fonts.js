import { extendTheme } from '@chakra-ui/react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
const theme = extendTheme({
    fonts: {
      heading: `'Mukta', sans-serif`,
      body: `'Nunito', sans-serif`,
    },
  })
  
  export default theme;