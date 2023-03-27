import './App.css';
import {createBrowserRouter} from "react-router-dom";
import Home from './Landing/Home';
import Dashboard from './Dashboard/Dashboard'

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
]);

export default App;
