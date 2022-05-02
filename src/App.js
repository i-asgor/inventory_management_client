import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ItemDetails from './Pages/Item/ItemDetails/ItemDetails';
import MyItem from './Pages/Item/MyItem/MyItem';
import ManageInventory from './Pages/Item/ManageInventory/ManageInventory';
import AddItem from './Pages/Item/AddItem/AddItem';

function App() {
  return (
    <div>
      <Header ></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <ItemDetails />
          </RequireAuth>
        }></Route>
        <Route path='/manageitem' element={<ManageInventory />}></Route>
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItem />
          </RequireAuth>
        }></Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound />}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
