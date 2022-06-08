import {useState} from 'react'
function Login (props) {

  //Welcome the new user
  const [username, setUserName] = useState("");
 
  const handleSubmit = (e) => {
  e.preventDefault()
  const loggedInUser = props.users.filter(user=>{
    return user.username == username
   })
  }

    return(
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
                    <a class="fragment" href="home">
                  <div>
                      <span id='close'>x</span>
                      </div>
            </a>
                    <h3>Sign In</h3>
                    
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