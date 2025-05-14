import './styles/theme.css'
import './styles/global.css'

import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

function App() {
    return (
        <>
          <Container>
            <Logo />
          </Container>

          <Container>
            <Menu />
          </Container>

          <Container>
            <Heading> FORM </Heading>
          </Container>

          <Container>
            <Heading> FOOTER </Heading>
          </Container>
        </>
        
    )
}

export default App;