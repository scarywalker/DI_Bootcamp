import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./components/PostList";
import SocialMedias from "./components/SocialMedias";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";

const routes = (
  <Routes>
    <Route path="/" element={<HomeScreen />}></Route>
    <Route path="/profile" element={<ProfileScreen />}></Route>
    <Route path="/shop" element={<ShopScreen />}></Route>
  </Routes>
);

function App() {
  const handleClick = async () => {
    try {
      const url = "https://webhook.site/d1327eab-8ab5-4a05-9062-b94918529679";
      const body = {
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <ErrorBoundary>{routes}</ErrorBoundary>
        </BrowserRouter>
        <PostList />
        <SocialMedias />
        <Skills />
        <Experiences />
        <button onClick={handleClick}>Post Data</button>
      </ErrorBoundary>
    </div>
  );
}

function Navbar() {
  return (
    <>
      <p>
        <NavLink to={"/"}>Home</NavLink>
      </p>
      <p>
        <NavLink to={"/profile"}>Profile</NavLink>
      </p>
      <p>
        <NavLink to={"/shop"}>Shop</NavLink>
      </p>
    </>
  );
}

function HomeScreen() {
  return (
    <div>
      <h1>HomeScreen</h1>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div>
      <h1>ProfileScreen</h1>
    </div>
  );
}

function ShopScreen() {
  // throw new Error("me ded");
  return (
    <div>
      <h1>ShopScreen</h1>
    </div>
  );
}

export default App;
