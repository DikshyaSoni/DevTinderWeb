import { useDispatch, useSelector } from "react-redux";
import { base_URL } from "../utils/constants";
import { useEffect } from "react";
import { addFeed } from "../utils/feedSlice";
import axios from "axios";
import UserCard from "./UserCard";
const Feed = () =>{
   const feed = useSelector((store) => store.feed);
   const dispatch = useDispatch();
   
   const getFeed = async () => {
       if(feed && feed.length>0) return ;
       try{
           const res = await axios.get(base_URL + "/feed",{withCredentials :true,
            });
             console.log("Feed API response:", res.data); 
//  console.log(res);
 dispatch(addFeed(res?.data?.data|| []));
        }
        catch(err){
   console.log("Feed error:", err);
        }
     };

useEffect(() =>{
    getFeed();
console.log("Redux feed state:", feed);

},[]);
  useEffect(() => {
    // console.log("Redux feed updated:", feed);
  }, [feed]);

  
  if (!feed) return;

  if (feed.length <= 0)
    return (
      <h1 className=" flex justify-center m-52 text-3xl">No more users!!!!</h1>
    );
  return (
    feed && (
      <div className="flex flex-col items-center gap-4 my-5">
        {feed && feed.map((user) =>
             <UserCard key={user._id} user={user} />)}
   
      </div>
    )
  );
};

export default Feed;