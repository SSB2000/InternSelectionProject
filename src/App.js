import styled from 'styled-components'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from './components/Footer'


const Root = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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
