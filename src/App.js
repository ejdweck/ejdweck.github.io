import logo from './logo.svg';
import './App.css';

import icon from './LI-Logo.png'

import styled from 'styled-components'

const Text = styled.h2``
const SmallText = styled.h3`
  display: flex;
  flex-direction: row;
`
const Link = styled.a`
  color: #4BC9FF;
`

const Img = styled.img`
  max-width: 150px;
  padding-left: 10px;
  cursor: pointer;
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Text>Breaking into tech?</Text>
        <Text>Network with industry people and get discovered</Text>
        <Text>Buy me a (virtual) coffee ☕ and start meeting people</Text>
        <SmallText>My 
          <a href={"https://www.linkedin.com/in/evan-dweck/"}>
            <Img target="__blank" src={icon}></Img>
          </a>
        </SmallText>

        <Link target="__blank" href={"https://calendly.com/evandweck/15min"}>Schedule a 15 min chat (1 cup black - $5)</Link>
        <br/>
        <Link target="__blank" href={"https://calendly.com/evandweck/30min"}>Schedule a 30 min chat (1 fancy latte - $10)</Link>
      </header>
    </div>
  );
}

export default App;
