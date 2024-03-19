import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/User/Login';
import SignUp from './Components/Pages/User/SignUp';
import AboutUs from './Components/Pages/User/AboutUs';
import Home from './Components/Pages/User/Home';
import Demo from './Components/Pages/User/Demo';
import Dashboard from './Components/Pages/Admin/Dashboard';
import UserDetails from './Components/Pages/Admin/UserDetails';
import EventDetails from './Components/Pages/Admin/EventDetails';
import BookingStatus from './Components/Pages/Admin/BookingStatus';
import PaymentStatus from './Components/Pages/Admin/PaymentStatus';
import Feedback from './Components/Pages/Admin/Feedback';
import Crud from './Components/Pages/Admin/Crud';
import VenueDetails from './Components/Pages/Admin/VenueDetails';
import Events from './Components/Pages/User/Events';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/event" element={<Events />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<UserDetails />} />
        <Route path="/admin/event" element={<EventDetails />} />
        <Route path="/admin/booking" element={<BookingStatus />} />
        <Route path="/admin/payment" element={<PaymentStatus />} />
        <Route path="/admin/feedback" element={<Feedback />} />
        <Route path="/admin/venue" element={<VenueDetails />} />
        <Route path="/admin/crud" element={<Crud />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
