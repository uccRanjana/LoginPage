import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Signup() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     window.location.reload();
//   };
  //all the states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //main handleSubmit function
  const handleInputSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      alert("User created successfully");
      navigate("/login");
      window.location.reload();
    } else {
      alert("Error during signup");
    }
  };

  return (
    // {/* signup */}
    <div className="flex gap-[8px] justify-center items-center h-screen ">
      <div className="flex">
        <div className="bg-gray-200  align-center p-10 rounded-xl  w-[280px]">
          <h1 className="text-3xl font-bold underline mb-8">Sign up Page</h1>
          <form onSubmit={handleInputSubmit } className="align-center ">
            <label className="font-bold mr-2 ">Enter your name:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="font-bold mt-2 mb-3"
              placeholder="name"
            ></input>
            <br></br>
            <label className="font-bold mr-2">Enter your email:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="font-bold mb-3 mt-3"
              placeholder="email"
            ></input>
            <br></br>
            <label className="font-bold mr-2 mt-[2px]">
              Enter your password:
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="font-bold mt-3"
              placeholder="password"
            ></input>
            <br></br>

          
            <button
              type="submit"
              className=" bg-blue-400 rounded-md w-[90px] ml-[45px] mt-10"
            >
              Submit
            </button>
           
           <div className="mt-2">
            <a className="p-16" href='/login'>Log In</a>
           </div>
            
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
