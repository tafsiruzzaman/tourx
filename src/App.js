import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import SignIn from './pages/Registration/SignIn/SignIn';
import AuthProvider from './contexts/AuthProvider';
import Footer from './pages/Footer/Footer';
import RegistrationRoute from './PrivateRoutes/RegistrationRoute/RegistrationRoute';
import GeneralRoute from './PrivateRoutes/GeneralRoute/GeneralRoute';
import Booking from './pages/Home/Booking/Booking';
import UserBookings from './pages/Home/UserBookings/UserBookings/UserBookings';

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
            <RegistrationRoute path="/signin">
              <SignIn></SignIn>
            </RegistrationRoute>
            <GeneralRoute path="/booking/:id">
              <Booking></Booking>
            </GeneralRoute>
            <GeneralRoute path="/myBookings">
              <UserBookings></UserBookings>
            </GeneralRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
