import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Educations from './components/Educations';
import Experience from './components/Experience';
import Portofolios from './components/Portofolios';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {
  console.log("App");
  return (
    <>
      <Router>
          <NavBar />
          <Routes>
              <Route exact path="/" element={<Profile/>} exact /> 
              <Route path="/skills" element={<Skills/>} />
              <Route path="/educations"  element={<Educations/>} />
              <Route path="/experiences" element={<Experience/>} />
              <Route path="/portofolios" element={<Portofolios/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
