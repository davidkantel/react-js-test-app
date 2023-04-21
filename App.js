
import './App.css';
// import './Components/Services.css'
// import './Components/About.css'
// import './Components/Home.css'
// import './Components/Contact.css'

import {Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';

function App() {
  return (
    <div className='container-fluid'>
    <nav className='nav'>
      <Link to="/">Home</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Services">Services</Link>
      <Link to="/About">About</Link>

    </nav>
    
    {/* <h1>Welcome to my website</h1> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    

  <footer>
    <div className='myfooter'>
      <div className='box'>
        <h4>Services</h4>
        <a href='/'>one</a>
        <a href='/'>one</a>
        <a href='/'>one</a>
        <a href='/'>one</a>

      </div>
      <div className='box'>
      <h4>Services</h4>

        <a href='/'>one</a>
        <a href='/'>one</a>
        <a href='/'>one</a>
        <a href='/'>one</a>

      </div>
      <div className='box'>
      <h4>Services</h4>

        <a href='/'>one</a>
        <a href='/'>one</a>
        <a href='/'>one</a>
        <a href='/'>one</a>

      </div>
      <div className='box'>
      <h4>Services</h4>

        <a href='/'>one</a>
        <a href='/'>one</a>
        <a href='/'>one</a>
        <a href='/'>one</a>

      </div>


    </div>
    <span>@ekadelidavid /Copywrite/React.js@scrimba</span>
    <hr></hr>

  </footer>
    
   


      
  
    </div>
  );
}

export default App;
