import {BrowserRouter , Routes , Route} from "react-router-dom";
import './App.css';
import Login from "./Login";
import UseState from "./UseState";
import Signup from "./Signup";
import Hello from "./Hello";
function App() {
  return(
    <BrowserRouter>
    <Routes>
      {/* <Route path="/hello" element={<Hello />} /> */}
     <Route path="/login" element={<Login />}/>
     <Route path ="/usestate" element={<UseState />}  />
     <Route path ="/" element={<Signup />}/>
     <Route path = "/hello" element={<Hello />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;