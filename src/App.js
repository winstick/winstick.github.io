import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from "./components/Trending"
import Superhero from './components/Superhero';
import "./style/landingPage.css"
function App() {
  return (
    <div>
      
      <div className="myBG border">
      <NavigationBar />
      <Intro />
      </div>

      <div className='Trending'>
       <Trending/>
       <div className='superhero'>
              <Superhero/>
       </div >
       
      </div>
    </div>
  );
}

export default App;
