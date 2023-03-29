
import './App.css';
import Home from './Home/Home';
import Proxy from './proxyPage/Proxy';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/proxy" element={<Proxy/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
