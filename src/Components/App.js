import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom/cjs/react-router-dom.min";
import { getPosts } from "../api/index"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login";
import { Loader } from "./Loaders"
import { Navbar } from "./Navbar"

const About = () => {
  return <h1>About</h1>
}
const Userinfo = () => {
  return <h1>Userinfo</h1>
}
const Page404 = () => {
  return <h1>Page404</h1>
}
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
      <Router>
        <Navbar />
        <Switch>
            <Route exact path = "/">
              <Home posts = {posts}/>
            </Route>

            <Route exact path = "/login">
              <Login/>
            </Route>

            <Route exact path="/about">
              <About/>
            </Route>

            <Route exact path="/user/abc">
              <Userinfo/>
            </Route>

            <Route>
              <Page404/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}
