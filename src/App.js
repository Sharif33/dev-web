import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/Home/About';
import Contact from './components/pages/Home/Contact';
import Header from './components/pages/Share/Header';
import AuthProvider from './components/pages/Contexts/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider> 
        <Header/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </AuthProvider>
     
    </div>
  );
}

export default App;
