import React, { useState } from "react";
import axios from 'axios'; // Import Axios for making HTTP requests
import Lottie from 'react-lottie';
import waves from "../components/waves.json";
import Typewriter from 'typewriter-effect';

const LoginForm = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [username, setUsername] = useState("");

  const handleToggle = () => {
    setShowLogin(!showLogin);
  };

  const handleEmailChange = (event) => {
    if (showLogin) {
      setEmail(event.target.value);
    } else {
      setSignupEmail(event.target.value);
    }
  };

  const handlePasswordChange = (event) => {
    if (showLogin) {
      setPassword(event.target.value);
    } else {
      setSignupPassword(event.target.value);
    }
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (showLogin) {
        // Login
        const response = await axios.post('http://localhost:5000/users/login', { email, password });
        console.log(response.data); // Log response from the server
      } else {
        // Signup
        const response = await axios.post('http://localhost:5000/users/register', { username, email: signupEmail, password: signupPassword, mobile: mobileNumber });
        console.log(response.data); // Log response from the server
      }
      // Reset form fields
      setEmail("");
      setPassword("");
      setSignupEmail("");
      setSignupPassword("");
      setMobileNumber("");
      setUsername("");
    } catch (error) {
      console.error('Error:', error.response.data); // Log error response from the server
      // Handle error response from the server
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: waves,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-row w-3/4 h-4/5 bg-white mx-auto my-auto rounded-lg relative">
      <div className="flex flex-col w-3/5 h-full bg-lavendar rounded-lg rounded-tr-none rounded-br-none relative">
        <Lottie
          options={defaultOptions}
          height={400}
          width={518}
          style={{ position: "absolute", bottom: 0 }} // Position Lottie at the bottom
        />
        <div className="absolute bottom-0 mb-4 ml-4" style={{ color: "white", fontSize: "48px" }}>
          <Typewriter
            options={{
              strings: ["Grow.", "Invest.", "Thrive..."],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="flex flex-row w-full mx-auto m-4">
          <div className={`flex-row mx-auto w-1/2 ${showLogin ? 'bg-darkviolet text-white' : 'bg-lavendar text-black'} text-center p-2 rounded-3xl transition duration-500 ease-in-out`} onClick={() => setShowLogin(true)}>
            <button style={{ width: "100%" }}>Login</button>
          </div>
          <div className={`flex-row w-1/2 ${showLogin ? 'bg-lavendar text-black' : 'bg-darkviolet text-white'} text-center p-2 rounded-3xl transition duration-500 ease-in-out`} onClick={() => setShowLogin(false)}>
            <button style={{ width: "100%" }}>Sign Up</button>
          </div>
        </div>
        <div className="">
          {showLogin ? (
            <form onSubmit={handleSubmit} className="mx-auto my-2 p-12">
              <div className="mb-2">
                <label htmlFor="username" className="block text-black">Username:</label>
                <input
                  type="username"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="p-2 w-full rounded-lg border border-black focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-black">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="px-4 py-2 w-full rounded-lg border border-black focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-darkviolet hover:bg-darkviolet/75 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Login</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto my-2 p-2">
              <div className="">
                <label htmlFor="username" className="block text-black">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  className="p-2 w-full rounded-lg border border-black focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="">
                <label htmlFor="email" className="block text-black">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={signupEmail}
                  onChange={handleEmailChange}
                  className="p-2 w-full rounded-lg border border-black focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="">
                <label htmlFor="password" className="block text-black">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={signupPassword}
                  onChange={handlePasswordChange}
                  className="p-2 w-full rounded-lg border border-black focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="mobileNumber" className="block text-black">Mobile Number:</label>
                <input
                  type="text"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  className="px-4 py-2 w-full rounded-lg border border-black focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-darkviolet hover:bg-darkviolet/75 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">Sign Up</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;