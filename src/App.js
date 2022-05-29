
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Shared/Login';
import LostPage from './Pages/Shared/LostPage';
import Navbar from './Pages/Shared/Navbar';
import Register from './Pages/Shared/Register';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<LostPage></LostPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
