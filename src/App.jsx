import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Categories from './screens/Categories';
import Cart from "./screens/Cart";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/categories" Component={Categories} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </Router>
    </>
  )
}

export default App
