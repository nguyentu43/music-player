import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `"Exo", sans-serif;`,
    body: `"Exo", sans-serif;`,
  },
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: '7px',
        height: '7px',
        
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "#f1f1f1",
        borderRadius: '10px'
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#888",
        borderRadius: '10px'
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#555" 
      }
    }
  }
})

export default theme