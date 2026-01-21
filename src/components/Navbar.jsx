import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { base_URL} from "../utils/constants";
import Login from "./Login";

import Connections from "./Connections";
const Navbar = () => {
  const user = useSelector((store)=>store.user);

  const dispatch = useDispatch();
const navigate = useNavigate();

  const handleLayout =  async() => {
    try{
 await axios.post(base_URL+"/logout",{},{withCredentials :true});
 dispatch(removeUser());
 return navigate("/login");
    }
    catch(err){

    }
  };
    return(
        <div className="navbar  bg-violet-500 shadow-sm">
  <div className="flex-1">
    < Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>

  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.pravatar.cc/150?img=3"/>
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li>
  <Link to="/profile" className="justify-between flex items-center">
    Profile
    <span className="badge">New</span>
  </Link>
</li>
<li>
<Link to="/connections" className="justify-between hover:bg-gray-800 rounded-md p-2">
                    Connections <span className="badge badge-error">💗</span>
                  </Link>
                </li>
                <li>
                  <Link to="/requests" className="justify-between hover:bg-gray-800 rounded-md p-2">
                    Requests <span className="badge badge-warning">👁️</span>
                  </Link>
                </li>
                <li></li>

        <li><a>Settings</a></li>
  
     <li>  <a onClick={handleLayout}>Logout </a> </li>
      </ul>
 
          </div>
  </div>
  
</div>
    );


};

export default Navbar;



