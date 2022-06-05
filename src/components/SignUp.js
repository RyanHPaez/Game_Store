import React from 'react';
import { useState } from 'react';
import axios from 'axios';
function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pref_system, setPref_System] = useState('');
    const [pref_genre, setPref_system] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault()
      const newUser = {
        name: name,
        email: email,
        password: password,
        pref_genre: pref_genre,
        pref_system: pref_system

      }
      axios.post(`http://localhost:3001/signup/new`, newUser)
      .then(res=>console.log(res.data));
    }
      //window.location to redirect to a page
    return (
    
      <form style={{
        textAlign: "center",
        width: "300px",

        position: "absolute",
        border: '2px solid red',
        backgroundColor: "Yellow",
        borderRadius: '30px'
      }}  onSubmit={handleSubmit}>
        
          <a class="fragment" href="home">
      <div>
          <span id='close'>x</span>
          </div>
</a>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>Full name</label> 
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value = {name}
            onChange={(e)=> setName(e.target[0].value)}
          />
        </div>
        {/* <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div> */}
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value = {email}
            onChange = {(e)=>setEmail(e.target[0].value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value = {password}
            onChange= {(e)=>setPassword(e.target[0].value)}
          />
        </div>
        <div className="mb-3">
          <label>Preferred Genre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter preferred genre"
            value = {pref_genre}
            onChange = {(e)=>setPref_Genre(e.target[0].value)}
          />
        </div>
        <div className="mb-3">
          <label>Preferred System</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter preferred system"
            value = {pref_system}
            onChange = {(e)=>setPref_System(e.target[0].value)}
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
      
    )
}

export default SignUp