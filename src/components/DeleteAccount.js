import { useState, useEffect } from "react"
import axios from "axios";
// import { navigate } from "react-router-dom";


function DeleteAccount(){

    const [userData, setUserData] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:3005/signup/users`)
        .then((response) => setUserData(response.data));
    }, []);
const [username, setUserName] = useState('')
const [password, setPassword] = useState('')

const handleSubmit = (e) => {
e.preventDefault()
   const deleteUser = {
    username: username
  };
  axios
    .post(`http://localhost:3005/signup/deleteUser`, deleteUser)
    .then((res) => console.log(res.data))
    // .then(()=> navigate("/"))
}    
return(
    <div>
    <form style={{
        textAlign: "center",
        width: "300px",
        position: "absolute",
        border: '2px solid red',
        backgroundColor: "Yellow",
        borderRadius: '30px',
        
      }}
      onSubmit={handleSubmit}
      >
        <h3>Delete Account</h3>
        <h4>Please fill out form to verify action</h4>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      </div>
)
}

export default DeleteAccount