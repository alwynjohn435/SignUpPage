import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import "./formmystyle.css";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [iserror, setIserror] = useState("");

  const [confirmpassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [showlogin, setShowlogin] = useState(false);

  function handleToggle() {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  function emailValidation (e) {
    e.preventDefault();
    const regEx = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    if (regEx.test(email)) {
      setMessage("");
      
    } else {
      setMessage("email is not valid");

     
    }
  };


  function handleOnChange (e) {
    setEmail(e.target.value);
  };


  function handleSignup (e) {
    e.preventDefault();
    const regEx = /^[A-Za-z._]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    if (regEx.test(email)) {
      setMessage("");
    } else {
      setMessage("email is not valid");
    }

    if (password != confirmpassword) {
      setIserror("confirm password and password doesnt match");
     
    } else {
      setIserror("");
      
    }
  };

  

  
  return (
    <>
      <div className="bg1">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-sm-6 col-12  mt-5 bg-white">
              {showlogin ? 
                <form action="" onSubmit={emailValidation} className="cn1">
                  <h5 className="text-dark p-3 text-center mx-5">
                    LogIn
                    <span className="mx-5" onClick={() => setShowlogin(false)}>
                      SignUp
                    </span>
                  </h5>

                  <div className="mb-4 input-field">
                    <input
                      type="email"
                      name="email"
                      className="form-control place"
                      placeholder="Email address"
                      value={email}
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                 <span className="text-danger">{message}</span> 
                  <div className="mb-4 input-field">
                    <input
                      type={type}
                      name="password"
                      className="form-control place"
                      placeholder="password"
                      required
                      maxLength={8}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    />
                    <span onClick={handleToggle}>
                      <Icon icon={icon} />
                    </span>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className=" mx-4 w-50 rounded p-2 text-white mb-5"
                    >
                      Login
                    </button>
                    <br />
                  </div>
                  
                </form>
               : 
                <form
                  className="form-container bg-white w-50"
                  onSubmit={handleSignup}
                >
                  <h3 className="text-center">Create an account</h3>

                  <b>First Name</b>
                  <input
                    type="name"
                    className="form-control place mt-2"
                    placeholder="Enter first Name"
                    name="fname"
                    required
                  />
                  <b>Last Name</b>
                  <input
                    type="name"
                    className="form-control place mt-2"
                    placeholder="Enter last Name"
                    name="lname"
                    required
                  />

                  <b>Email</b>
                  <input
                    type="text"
                    className="form-control place mt-2"
                    placeholder="Enter Email"
                    name="email"
                    required
                    value={email}
                    onChange={handleOnChange}
                  />
   <span className="text-danger">{message}</span><br/>  
                  <b>Password</b>
                  <div className="mb-4 input-field">
                    <input
                      type="password"
                      className="form-control place mt-2"
                      placeholder="Enter Password"
                      name="psw"
                      required
                      maxLength={8}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <b>Confirm Password</b>
                  <div className="mb-4 input-field">
                    <input
                      type={type}
                      className="form-control place mt-2"
                      name="confirmpass"
                      placeholder="Confirm Password"
                      required
                      maxLength={8}
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                      value={confirmpassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                      
                    />
                    <span className="mt-2" onClick={handleToggle}>
                      <Icon icon={icon} />
                    </span>
                  </div>
                  <span className="text-danger">{iserror}</span>
                  <div>
                    <button className="mx-4 w-50 rounded p-2 text-white">
                      Sign Up
                    </button>
                  </div>
                  <p onClick={() => setShowlogin(true)} className="mt-3">
                    <a href="#" className="text-danger">
                      Already have an account? &nbsp;Login
                    </a>
                  </p>
             
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
