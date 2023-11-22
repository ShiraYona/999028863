import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Input from './components/Input';
import Cards from "./components/Cards"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Input />}></Route>
        <Route path="/Cards" element={<Cards />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
