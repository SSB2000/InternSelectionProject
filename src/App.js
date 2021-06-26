import styled from 'styled-components'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from './components/Footer'


const Root = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  max-width: 1440px;
`

function App() {
  return (
    <Root>
      <Header />
      <Main />
      <Footer />
    </Root>
  );
}

export default App;
