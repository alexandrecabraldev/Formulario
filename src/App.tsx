import {Header} from "./components/Header"
import {GlobalStyle} from "./components/GlobalStyle"
import { ThemeProvider } from "styled-components"
import {defaultTheme} from "../src/theme/defaultTheme";

function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
    </ThemeProvider>
  )
}

export default App
