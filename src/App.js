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
import RequireAuth from './Components/RequireAuth/RequireAuth';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyAppointment from './Pages/DashBoard/MyAppointment';
import MyReviews from './Pages/DashBoard/MyReviews';
import AllUsers from './Pages/DashBoard/AllUsers';
import AddDocters from './Pages/DashBoard/AddDocters';
import ManageDocter from './Pages/DashBoard/ManageDocter';
import Payment from './Pages/DashBoard/Payment'
function App() {
  return (
    <div className='mt-16'>
      <Navbar />


      <Routes>

        <Route path="/" element={<Home />}>


        </Route>



        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<RequireAuth><Appointment /></RequireAuth>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />


        <Route path='/dashboard' element={<RequireAuth><DashBoard /></RequireAuth>}>
          <Route index element={<MyAppointment />}></Route>
          <Route path='review' element={<MyReviews />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='allusers' element={<AllUsers />}></Route>
          <Route path='adddocter' element={<AddDocters />}></Route>
          <Route path='managedocter' element={<ManageDocter />}></Route>


        </Route>



        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="*" element={<NotFoundpage />} />
      </Routes>



      <Footer />
    </div>
  );
}

export default App;
