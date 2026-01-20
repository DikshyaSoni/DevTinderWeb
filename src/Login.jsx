import { useState } from "react";
import axios from "axios";

const Login = () =>{

  const [emailId,setEmailId] = useState("sitarasoni123@gmail.com");
  const [ password,setPassword] = useState("Sitara@123");

  const handleLogin = async  () => {
try{const res =  await axios.post("http://localhost:4000/login",
  {
    emailId,password
},
{withCredentials: true}
);}
catch(err){
    console.error(err);
}
  };



    return(
           <div className = "flex items-center justify-center min-h-screen ">
  <div className="card bg-base-300 w-96 h-80 shadow-xl p-6 ">
  <div className="card-body ">
    <h2 className="card-title  text-center">Login</h2>
      

 <fieldset className="fieldset"> 
 
   <legend className="fieldset-legend">Email Id :</legend>
  <input type="text" value={emailId} className="input"  onChange = { (e) => setEmailId(e.target.value)} placeholder="Type here" />

   <legend className="fieldset-legend">Password :</legend>
  <input type="text"  value={password} className="input"    onChange = { (e) => setPassword(e.target.value)} placeholder="Type here" />
  
</fieldset> 
    <div className="card-actions">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
            </div>
    );
};
export default Login;