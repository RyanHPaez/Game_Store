import React from "react";
import { useState } from "react";
import axios from "axios";
function SignUp() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pref_system, setPref_System] = useState("");
  const [pref_genre, setPref_Genre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: password,
      pref_genre: pref_genre.toLowerCase(),
      pref_system: pref_system.toLowerCase(),
    };
    axios
      .post(`http://localhost:3005/signup/newUser`, newUser)
      .then((res) => console.log(res.data));
      window.location.href = "http://localhost:3001/"
  };
  return (
    <div
    style={{
      background: "black",
      width: "280px",
      height: "200px",
      margin: "20px",
      textAlign: "center",
      display: "inline-table",
      border: "2px solid red",
      backgroundColor: "black",
      borderBottomColor: "blue",
      borderTopColor: "blue",
      color: "red",
      borderRadius: "20px",
      position: "relative",
    }}
    >
    <form
      // style={{
      //   border: "2px solid blue",
      //   position: "sticky",
      //   color: "yellow",
      //   backgroundColor: "black",
      //   borderBottomColor: "lightblue",
      //   borderTopColor: "lightblue",
      //   float: "right",
      //   padding: "10px",
      //   marginTop: "0px",
      //   borderRadius: "20px",
      //   textAlign: "center",
      //   display: "inline-table",
      // }}
      onSubmit={handleSubmit}
    >
      <a class="fragment" href="home">
        <div>
          <span
            id="close"
            style={{
              width: "30px",
              border: "2px solid black",
              backgroundColor: "gray",
              borderRadius: "0px",
            }}
          >
            x
          </span>
        </div>
      </a>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          // className="form-control"
          // placeholder="Username"
          // value = {username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          // value = {email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          // value = {password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Preferred Genre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter preferred genre"
          // value = {pref_genre}
          onChange={(e) => setPref_Genre(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Preferred System</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter preferred system"
          // value = {pref_system}
          onChange={(e) => setPref_System(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
    </div>
  );
}

export default SignUp;
