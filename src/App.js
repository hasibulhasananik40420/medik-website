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
import MyWishlist from './Pages/MyWishlist/MyWishlist';
import ShippingDetails from './Pages/SingleProduct/ShippingDetails';
import Review from './Pages/SingleProduct/Review';
import ProductDeception from './Pages/SingleProduct/ProductDeception';

import Medication from './Pages/Products/Medication'
import Drugs from './Pages/Products/Drugs';
import Labpratory from './Pages/Products/Labpratory';
import Equipments from './Pages/Products/Equipments';
import Radiology from './Pages/Products/Radiology';
import Devices from './Pages/Products/Devices';
function App() {
  return (
    <div >
      <Navbar />


      <Routes>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/" element={<Home />}>
          <Route index path='' element={<Medication />} />
          <Route path='drugs' element={<Drugs />} />
          <Route path='Labpratory' element={<Labpratory />} />
          <Route path='equipments' element={<Equipments />} />
          <Route path='radiology' element={<Radiology />} />
          <Route path='devices' element={<Devices />} />

        </Route>



        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<Singup />} />




        <Route path="/singleproduct" element={<SingleProduct />}>
          <Route index path='' element={<ProductDeception />} />
          <Route path='review' element={<Review />} />
          <Route path='shippingdetail' element={<ShippingDetails />} />


        </Route>
        <Route path="/addtocart" element={<AddtoCart />} />
        <Route path="/mywishlist" element={<MyWishlist />} />

        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>



      <Footer />
    </div>
  );
}

export default App;
