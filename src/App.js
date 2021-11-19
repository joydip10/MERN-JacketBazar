import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import ExplorePage from './Components/Explore/ExplorePage';
import ResponsiveDrawer from './Components/Dashboard/Dashboard/ResponsiveDrawer';
import Log_Reg from './Components/Login/Log_Reg';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import NoPageFound from './Components/NoPageFound/NoPageFound';

function App() {
  return (
    <AuthProvider>
    <Router>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/explore">
            <ExplorePage></ExplorePage>
          </Route>
          <PrivateRoute path="/dashboard">
            <ResponsiveDrawer></ResponsiveDrawer>
          </PrivateRoute>
          <Route exact path="/login">
            <Log_Reg></Log_Reg>
          </Route>
          <PrivateRoute path="/placeOrder/:id">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route exact path="*">
            <NoPageFound></NoPageFound>
          </Route>
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
