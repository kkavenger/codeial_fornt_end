import { useEffect, useState } from "react";
import { getPosts } from "../api/index"
import { Home } from "../pages/Home"
import { Loader } from "./Loaders"
import { Navbar } from "./Navbar"

export function App() {

  const[posts, setposts] = useState([]);
  const[loading, setloading] = useState(true);

  useEffect(() => {

    const fetchposts = async () => {

      const response = await getPosts();
      
      if(response.success){
        setposts(response.data.posts);
      }
      setloading(false);
    };
    fetchposts();
  }, []);

  if(loading){
    return <Loader />;
  }
  
  return (
    <div className="App">
      <Navbar />
      <Home posts = {posts}/>
    </div>
  );
}
