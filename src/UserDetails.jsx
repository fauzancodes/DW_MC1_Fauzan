import './App.css';
import { useParams, Link } from "react-router-dom";

import data from "./data.json";

function UserDetails() {
  const params = useParams();
  let User = data.filter(User => User.id === parseInt(params.id));
  User = User[0];
  return (
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="d-flex flex-column align-items-center bg-secondary">
          <div className="rounded-circle" style={{ width:"20rem",heiht:"20rem"}}>
            <img src={User.image} alt={User.username} className="w-100"/>
          </div>
          <h1>{User.username}</h1>
          <div className="d-flex">
            <div className="me-3 d-flex flex-column align-items-center">
              <p>{User.follower}</p>
              <p>Followers</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <p>{User.following}</p>
              <p>Followings</p>
            </div>
          </div>
        </div>
        <Link to="/">Back</Link>
      </div>
    </>
  );
}

export default UserDetails;
