import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login/Login';
import Singup from './Pages/Singup/Singup';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import Blog from './Pages/Blog/Blog';
import NotFoundpage from './Pages/NotFoundpage/NotFoundpage';
import Contact from './Pages/Contact/Contact';
import Appointment from './Pages/Appointment/Appointment';
function App() {
  return (
    <div className='mt-16'>
      <Navbar />


      <Routes>

        <Route path="/" element={<Home />}>


        </Route>



        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />






        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="*" element={<NotFoundpage />} />
      </Routes>



      <Footer />
    </div>
  );
}

export default App;
