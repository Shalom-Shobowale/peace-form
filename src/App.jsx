import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form1 from "./Form/Form1";
import Login from "./Form/Login";
import Signup from "./Form/Signup";
import Home from "./Form/Home";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form1 />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
      
    </>
  );
}
