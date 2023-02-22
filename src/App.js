import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
