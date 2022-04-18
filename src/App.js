import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Home/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        
        {/* <Route path='/checkout' element={<Checkout></Checkout>}></Route> */}


        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        {/* <Route path="*" element={<NotFound></NotFound>}></Route> */}
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
