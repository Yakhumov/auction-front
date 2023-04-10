import { Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/HomePage/Home'
import Authorization from "./pages/AuthorizationPage/Authorization";
import Registration from "./pages/RegistrationPage/Registration";
import { useSelector } from "react-redux";
import AuctionPage from "./pages/Auction/auctionPage";
import AddSlot from "./pages/AddSlot/AddSlot";
import UserPage from "./pages/UserPage/UserPage";
import "./App.css"


function App() {
  const token = useSelector((state) => state.authSlice.token)

  if (!token) {
    return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Authorization />} />
        <Route path='/registration' element={<Registration />} />
        <Route path= '/add/slot' element={<AddSlot/>}/>
        <Route path="/auction" element={<AuctionPage/>}/>
        <Route path="/own/page" element={<UserPage/>}/>
      </Routes>
    </div>
    )
  }
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Navigate to='/' />} />
        <Route path="/auction" element={<AuctionPage/>}/>
        <Route path= '/add/slot' element={<AddSlot/>}/>
        <Route path="/own/page" element={<UserPage/>}/>
      </Routes>
    </div>

  );
}

export default App;
