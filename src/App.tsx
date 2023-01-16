import {Header} from "./components/Header"
import {GlobalStyle} from "./components/GlobalStyle"
import { ThemeProvider } from "styled-components"
import {defaultTheme} from "../src/theme/defaultTheme";
import { Form } from "./components/Form";

function App() {
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Form/>
    </ThemeProvider>
  )
}

export default App
