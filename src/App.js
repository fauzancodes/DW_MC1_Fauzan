import './App.css';
import userData from "./data.json"
import { Routes, Route, Link } from "react-router-dom";

import UserDetails from "./UserDetails";

function App() {
  return (
    <>
      <div className="container">
        {
          userData.map((item) => (
            <Link to={`/user-details/${item.id}`}>
              <div key={item.id} className="w-100 d-flex mb-3" style={{ backgroundColor:"#6610f2" }}>
                <div className="rounded-circle" style={{ width:"5rem",heiht:"5rem"}}>
                  <img src={item.image} alt={item.username} className="w-100"/>
                </div>
                <div>
                  <div className="fw-bold text-light">@{item.username}</div>
                  <div className="fw-bold text-light">Followers: {item.follower}</div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
      <Routes>
        <Route path="/user-details/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
