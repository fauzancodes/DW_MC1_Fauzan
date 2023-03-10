import './App.css';
import userData from "./data.json"
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container mt-3">
        {
          userData.map((item) => (
            <Link to={`/user-details/${item.id}`}>
              <div key={item.id} className="w-100 d-flex align-items-center mb-3 bg-primary p-3 rounded shadow">
                <div className="me-3" style={{ width:"5rem",height:"5rem" }}>
                  <img src={item.image} alt={item.username} className="w-100 rounded-circle" style={{ width:"5rem",height:"5rem",objectFit:"cover" }}/>
                </div>
                <div>
                  <div className="fw-bold text-light text-decoration-none">@{item.username}</div>
                  <div className="fw-bold text-light text-decoration-none">Followers: {item.follower}</div>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default Home;
