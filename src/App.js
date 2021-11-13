import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Shop from './Pages/Shop/Shop';
import Footer from './Pages/Shared/footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import AuthContext from './context/AuthContext';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import Dashboard from './Pages/Dashboard/Dashboard';
import BookNow from './Pages/BookNow/BookNow';
import Admin from './Pages/Dashboard/Admin/Admin';
import AdminRoute from './Pages/Login/PrivateRoute/AdminRoute';

function App() {
  return (
    <div>
      <AuthContext>

        <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/shop">
              <Shop/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/register">
              <Register/>
            </Route>
            <PrivateRoute exact path="/details/:id">
              <ItemDetails />
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:id">
              <BookNow />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <AdminRoute path="/admin">
              <Admin />
            </AdminRoute>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
