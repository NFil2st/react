import Navbar from './features/Navbar';
import Home from './features/Home';
import Container from './features/Container';
import GlobalStyle from './features/GlobalStyle';

function App() {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    <Container>
      <Home />
    </Container>
    </>
  );
}

export default App;
