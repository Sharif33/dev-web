import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/Home/About';
import Contact from './components/pages/Home/Contact';
import Header from './components/pages/Share/Header';
import AuthProvider from './components/pages/Contexts/AuthProvider';
import LogIn from './components/pages/LogIn/LogIn';
import Register from './components/pages/LogIn/Register';
import PrivateRoute from './components/pages/LogIn/PrivateRoute';
import CourseDetails from './components/pages/Courses/CourseDetails';
import Services from './components/pages/Courses/Services';
import Footer from './components/pages/Share/Footer';

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
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<Register />} />
        <Route path="services" element={<Services />} />
        <Route path="course/:id" element={<PrivateRoute>
            <CourseDetails />
          </PrivateRoute>} />
      </Routes>
      <Footer/>
      </AuthProvider>
     
    </div>
  );
}

export default App;
