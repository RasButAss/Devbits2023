import './App.css';
import {createBrowserRouter} from "react-router-dom";
import Home from './Landing/Home';
import Dashboard from './Dashboard/Dashboard'
import News from './News/News'
import Details from './Details/Details';
import Login from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/news",
    element: <News />
  },
  {
    path: "/details/:id",
    element: <Details />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
]);

export default App;
