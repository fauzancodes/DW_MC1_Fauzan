import './App.css';
import userData from "./data.json"
import { Link } from "react-router-dom";

function Home() {
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
