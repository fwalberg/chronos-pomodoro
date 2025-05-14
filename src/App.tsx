import './styles/theme.css'
import './styles/global.css'

import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

function App() {
    return (
        <>
          <Container>
            <Logo />
          </Container>

          <Container>
            <Heading> ICONS </Heading>
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