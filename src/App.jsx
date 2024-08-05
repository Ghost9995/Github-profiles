import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchUsers from "./components/SearchUsers";
import User from "./components/User";
import Container from "./components/Container";
export default function App() {
  const [username,setUsername] = useState('');
  const [userRepos,setUserRepos] = useState([]);
  const [userData,setUserData] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const submitHandler = (e) =>{
    e.preventDefault();
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username}`).then((res) => res.json()).then((res) => {
      setUserData(res);
      fetch(`https://api.github.com/users/${username}/repos`).then((res) => res.json()).then((res) => {
        setUserRepos(res);
      })
    }).finally(() =>{
      setIsLoading(false);
    });
  };
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  return <>
    <Navbar />
    <SearchUsers username={username} onChangeHandler={onChangeHandler} submitHandler={submitHandler}/>
    {isLoading && <Container><p className="text-9xl justify-center items-center text-center mt-40 text-black/75">Loading.....</p></Container>}
    {!isLoading && userData && userRepos && <User repos={userRepos} user={userData}/>}
  </>;
};