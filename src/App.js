import './App.css';
import {createBrowserRouter} from "react-router-dom";
import Home from './Landing/Home';
import Dashboard from './Dashboard/Dashboard'
import News from './News/News'
import Details from './Details/Details';

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
  }
]);

export default App;
