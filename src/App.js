import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import SignIn from './pages/Registration/SignIn/SignIn';
import AuthProvider from './contexts/AuthProvider';
import Footer from './pages/Footer/Footer';
import RegistrationRoute from './PrivateRoutes/RegistrationRoute/RegistrationRoute';
import GeneralRoute from './PrivateRoutes/GeneralRoute/GeneralRoute';
import UserBookings from './pages/UserBookings/UserBookings/UserBookings';
import Booking from './pages/Booking/Booking';
import AllBookings from './pages/AllBookings/AllBookings/AllBookings';
import AddNew from './pages/AddNew/AddNew';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <RegistrationRoute path="/signin">
              <SignIn></SignIn>
            </RegistrationRoute>
            <GeneralRoute path="/booking/:id">
              <Booking></Booking>
            </GeneralRoute>
            <GeneralRoute path="/myBookings">
              <UserBookings></UserBookings>
            </GeneralRoute>
            <GeneralRoute path="/allBookings">
              <AllBookings></AllBookings>
            </GeneralRoute>
            <GeneralRoute path="/addNew">
              <AddNew></AddNew>
            </GeneralRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
