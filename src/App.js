
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Shared/Login';
import LostPage from './Pages/Shared/LostPage';
import Navbar from './Pages/Shared/Navbar';
import Register from './Pages/Shared/Register';
import { ToastContainer, toastContainer } from 'react-toastify';
import Blogs from './Pages/Blogs/Blogs';
import Portfolio from './Pages/Blogs/Portfolio';
import Reviews from './Pages/Blogs/Reviews';
import RequireAuth from './Pages/Shared/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder';
import MyReview from './Pages/Dashboard/MyReview';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>

        {/* use nested routes */}
        <Route path='/dashboard' element={<RequireAuth>  <Dashboard></Dashboard> </RequireAuth>}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='reviews' element={<MyReview></MyReview>}></Route>
        </Route>

        <Route path='*' element={<LostPage></LostPage>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
