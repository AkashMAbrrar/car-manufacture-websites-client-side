
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<></>}></Route>
        <Route path='/' element={<></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
