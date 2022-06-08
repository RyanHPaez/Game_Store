import {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login ({setWelcomeUser}) {
  
  let navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [username, setUserName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3005/signup/users`)
      .then((response) => setUserData(response.data));
  }, []);
  
  //This function will redirect the user to the home page and post a welcome message
  const handleSubmit = (e) => {
  e.preventDefault()
  const loggedInUser = userData.filter(user=>{
    return user.username === username
   })
   if(loggedInUser.length > 0){
     setWelcomeUser(loggedInUser)
     navigate(`/`)
   }
   else{
     alert('Username is invalid, please try again. *Case sensitive*')
   }
  }

    return(
        <form  style={{
          background: "black",
        width: "90%",
        margin: "0px",
        textAlign: "center",
        display: "inline-block",
        backgroundColor: "black",
        borderBottomColor: "blue",
        color: "red",
        borderRadius: "20px",
        position: "relative",
        border: "2px solid lightblue",
        borderTop: "2px solid lightblue",
        }}
                  onSubmit={handleSubmit}
                  >
                    <a class="fragment" href="home">
                      <div>
                        <span id='close'>x</span>
                      </div>
                    </a>
                    <h3>Log In</h3>
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
                      />
                    </div>
                    <div className="mb-3">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label className="custom-control-label" htmlFor="customCheck1">
                          Remember me
                        </label>
                      </div>
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
    )

}

export default Login