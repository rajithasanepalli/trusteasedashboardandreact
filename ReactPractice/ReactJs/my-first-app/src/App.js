import React, { useState } from 'react'
import ApiFetch from './ApiFetch';
import './App.css'
import Dispaly from './Dispaly';


const App = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    state: ''
  })
  const { username, password, confirmPassword, email, state } = data;
  const chanheHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  const submitForm = (e) => {
    e.preventDefault();
    if (username.length < 5) {
      alert("User name must be 5 charactaers")
    }
    // else if (password !== confirmPassword) {
    //   alert("Password mismatched")
    // }
    else {
      console.log(data)
    }

  }
  return (
    <div>
      <center>
        <h1>Login Form</h1>
        <form onSubmit={submitForm}>
          {/* <label>User Name:</label> */}
          <input type="text" name="username" placeholder='userNmae' value={username} onChange={chanheHandler} /><br />
          {/* <label>User Email:</label> */}
          <input type="email" name="email" placeholder='email' value={email} onChange={chanheHandler} /><br />
          {/* <label>Password:</label> */}
          <input type="password" name="password" placeholder='password' value={password} onChange={chanheHandler} /><br />
          {/* <label>Confirm Password:</label> */}
          <input type="password" name="confirmPassword" placeholder='confirmPassword' value={confirmPassword} onChange={chanheHandler} /><br />
          {password !== confirmPassword ? <span style={{ "color": "red" }}>password mismatched</span> : null}
          {/* <label>Select State:</label> */}
          <select value={state} name="state" onChange={chanheHandler}>
            <option>Choose State</option>
            <option>AndhraPradesh</option>
            <option>ManDyaPradesh</option>
          </select><br />
          <input type="submit" name="submit" />
        </form>
      </center><br />
      {
        <center>
          <Dispaly />
        </center>
      }
      {
        <center>
          <ApiFetch />
        </center>
      }
    </div>
  )
}

export default App
