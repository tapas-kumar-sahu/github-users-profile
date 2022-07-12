import React, { useState } from "react";
import './assets/css/style.css';
import axios from "axios";
import Card from "./components/Card";


function App() {

  const [userName, setUserName] = useState("");
  const [user, setUser] = useState("");
  const [status, setStatus] = useState("");

  const getUserName = (e) => {
    setUserName(e.target.value);
  }

  const formSubmit = (e) => {
    e.preventDefault();
    setStatus("pending");

    axios.get(`https://api.github.com/users/${userName}`)
      .then(({ data: result }) => {
        const userData = {
          name: result.name,
          login: result.login,
          img: result.avatar_url,
          bio: result.bio,
          publicGits: result.public_gists,
          publicRepos: result.public_repos,
          createdAt: result.created_at
        };
        setStatus("success");
        setUser(userData);
        setUserName("")
        
      }).catch(error => {
        setStatus("error");
      })
  }

  return (
    <>
      <div className="min-h-screen bg-slate-300 flex flex-col items-center">
        <div className="my-12">
          <form className="space-x-2.5 md:w-[26.5rem] flex justify-between" onSubmit={formSubmit}>
            <input
              onChange={getUserName}
              value={userName}
              placeholder="Enter username"
              required
              className="w-full p-2 rounded-md focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400"
            />
            <button className="text-slate-100 bg-slate-400 hover:bg-slate-500 p-2 rounded-md ">Search</button>
          </form>
        </div>

        {status === "pending" && 
        <button type="button" className="flex px-4 py-2 rounded-sm">
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </button>}
        {status === "error" && <p className='text-slate-500 font-medium text-center text-lg'>Invalid Username</p>}
        {status === "success" && <Card user={user} /> }

      </div>
    </>
  );
}

export default App;
