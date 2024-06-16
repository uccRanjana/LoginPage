import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  // const handleSubmit = (event)=>{
  //     event.preventDefault();
  //     window.location.reload();
  // }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleDataSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        alert("Logged in successfully");
        navigate("/hello");
      } else {
        alert("Error while loggin in");
      }
    } catch (error) {
      console.log("Error while loggin in");
    }
  };

  return (
    //login
    <div className="flex gap-[8px] justify-center items-center h-screen ">
      <div className="flex">
        <div className="bg-gray-200 p-10 rounded-xl  w-[280px]">
          <h1 className="text-3xl font-bold underline mb-8">Login Page</h1>
          <form onSubmit={handleDataSubmit}>
            <label className="font-bold mr-2 ">Enter your email:</label>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="font-bold mb-3 mt-3"
              placeholder="email"
            ></input>
            <br></br>
            <label className="font-bold mr-2 mt-[2px]">
              Enter your password:
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="font-bold mt-3"
              placeholder="password"
            ></input>
            <br></br>
            <button
              type="submit"
              className="bg-blue-400 rounded-md w-[90px] mt-10"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
