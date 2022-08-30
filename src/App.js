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
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import AddtoCart from './Pages/AddtoCart/AddtoCart';
function App() {
  return (
    <div >
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        <Route path="/addtocart" element={<AddtoCart />} />

        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>



      <Footer />
    </div>
  );
}

export default App;
