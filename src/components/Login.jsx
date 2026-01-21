import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { base_URL } from "../utils/constants";

const Login = () =>{

  const [emailId,setEmailId] = useState("sitarasoni123@gmail.com");
  const [ password,setPassword] = useState("Sitara@123");
  const[error,setError]=useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

  const handleLogin = async  () => {
try{const res =  await axios.post(base_URL+"/login",
  {
    emailId,password
},
{withCredentials: true}
);
console.log(res.data);
dispatch(addUser(res.data));
return navigate("/");
}
catch(err){
  setError(err?.response?.data || "Something Went Wrong !!");
  
}
  };



    return(
           <div className = "flex items-center justify-center min-h-screen ">
  <div className="card bg-base-300 w-96 h-90 shadow-xl p-6 ">
  <div className="card-body ">
    <h2 className="card-title  text-center">Login</h2>
      

 <fieldset className="fieldset"> 
 
   <legend className="fieldset-legend">Email Id :</legend>
  <input type="text" value={emailId} className="input"  onChange = { (e) => setEmailId(e.target.value)} placeholder="Type here" />

   <legend className="fieldset-legend">Password :</legend>
  <input type="text"  value={password} className="input"    onChange = { (e) => setPassword(e.target.value)} placeholder="Type here" />
  
</fieldset> 
<p className="text-red-600">{error}</p>
    <div className="card-actions">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
            </div>
    );
};
export default Login;