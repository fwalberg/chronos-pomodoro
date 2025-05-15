import './styles/theme.css'
import './styles/global.css'

import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

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
            <CountDown />
          </Container>

          <Container>
            <form className="form" action="">
              <div className="formRow">
                <DefaultInput
                  labelText='task'
                  id='meuInput'
                  type='text'
                  placeholder='type here your task'/>
              </div>

              <div className="formRow">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dolores itaque explicabo suscipit.
                </p>
              </div>

              <div className="formRow">
                <Cycles />
              </div>

              <div className="formRow">
                <button type="submit">Start</button>
              </div>
            </form>
          </Container>

          <Container>
            <Heading> FOOTER </Heading>
          </Container>
        </>
        
    )
}

export default App;