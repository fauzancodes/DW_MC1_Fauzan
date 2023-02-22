import './App.css';
import { useParams } from "react-router-dom";

import data from "./data.json";

function UserDetails() {
  const params = useParams();
  let User = data.filter(User => User.id === parseInt(params.id));
  User = User[0];
  return (
    <>
      <div className="container">
        <div>
          <div className="rounded-circle" style={{ width:"5rem",heiht:"5rem"}}>
            <img src={User.image} alt={User.username} className="w-100"/>
          </div>
          <h1>{User.username}</h1>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
