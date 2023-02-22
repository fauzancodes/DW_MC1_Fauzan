import './App.css';
import { useParams, Link } from "react-router-dom";

import data from "./data.json";

function UserDetails() {
  const params = useParams();
  let User = data.filter(User => User.id === parseInt(params.id));
  User = User[0];
  return (
    <>
      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="d-flex flex-column align-items-center bg-secondary w-100 rounded shadow pt-3">
          <div style={{ width:"10rem",height:"10rem"}}>
            <img src={User.image} alt={User.username} className="w-100 rounded-circle" style={{ border:"5px solid red",width:"10rem",height:"10rem",objectFit:"cover" }}/>
          </div>
          <h5 className="text-light mb-4">@{User.username}</h5>
          <div className="d-flex">
            <div className="me-3 d-flex flex-column align-items-center fw-bold">
              <p>{User.follower}</p>
              <p>Followers</p>
            </div>
            <div className="d-flex flex-column align-items-center fw-bold">
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
