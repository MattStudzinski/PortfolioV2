import './styles/styles.css'

import Header from "./componets/Header";
import Body from './componets/Body';



function App() {
  return (
    <div className="App">
      <div className='stars-container'>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      </div>
  
      <Header />
      <Body />
    </div>
  );
}

export default App;
