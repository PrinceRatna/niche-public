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

function App() {
  return (
    <div >
    <Router>
      
       <Header></Header>

       
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/users">
            <User></User>
          </Route>
          <Route path="/purchase">
            <Purchase></Purchase>
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
      
    </Router>
 
  
    </div>
  );
}

export default App;
