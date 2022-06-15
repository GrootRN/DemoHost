import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Acordian from './Acordian';
// import StateContext from './context/StateContext';
import About from './React_Router/About';
import Contact from './React_Router/Contact';
import { BrowserRouter as Router ,Routes , Route ,Link  } from 'react-router-dom';
import Error from './React_Router/Error';
import Home from './React_Router/Home';
import TextUtils from './component/TextUtils';
import Input from './component/Input';

function App() {
  return (
    <>
  <Router>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <Link className='navbar-brand' to={'/'} >Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className='nav-link active' to={'/contact'} >Contact</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to={'/about'} >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/textconversion'} > Text Conversion </Link>
        </li>
      </ul>
    </div>
    <Link className="nav-link" to={'./signup'} > Signup/Login </Link>
  </div>
</nav>
    <Routes>
     <Route  path='/' element={<Home/>} />
     <Route  path='/contact' element={<Contact/>} />
     <Route  path='/about' element={<About/>} />
     <Route  path='/signup' element={<Input/>} />
     <Route  path='/textconversion' element={<TextUtils/>} />
     <Route  path="*" element={<Error/>}/>
    </Routes>
  </Router>
    </>
  );
}

export default App;
