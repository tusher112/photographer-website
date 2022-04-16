import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/home'><Home></Home></Route>
        <Route path='/services'><Services></Services></Route>
      </Routes>
   
    </div>
  );
}

export default App;
