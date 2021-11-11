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
          <PrivateRoute path="/purchase">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/explore">
            <Explore></Explore>
          </PrivateRoute>
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
      
    </Router>
 
  </AuthProvider>
    </div>
  );
}

export default App;
