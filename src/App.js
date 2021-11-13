import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import User from './component/User/User';
import Header from './component/Header/Header';
import Purchase from './component/Purchase/Purchase';
import { Login } from '@mui/icons-material';
import LogIn from './component/LogIn/LogIn';
import Register from './component/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Explore from './component/Explore/Explore';
import Dashboard from './component/DashBoard/DashBoard';
import Pay from './component/Pay/Pay';
import MyOrders from './component/MyOrders/MyOrders';
import AddReview from './component/AddReview/AddReview';
import AddAdmin from './component/AddAdmin/AddAdmin';
import AddProducts from './component/AddProducts/AddProducts';
import Footer from './component/Footer/Footer';
import AllOrders from './component/AllOrders/AllOrders';
import ManageProducts from './component/ManageProducts/ManageProducts';

function App() {
  return (
    <div >
  <AuthProvider>
    <Router>
      
       <Header></Header>

       
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/users">
            <User></User>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <Route path="/admin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/addProducts">
            <AddProducts></AddProducts>
          </Route>
          <PrivateRoute path="/allOrders">
            <AllOrders></AllOrders>
            </PrivateRoute>
          <PrivateRoute path="/pay">
            <Pay></Pay>
          </PrivateRoute>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/manageProducts">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/log">
            <LogIn></LogIn>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      
    </Router>
 
  </AuthProvider>
    </div>
  );
}

export default App;
