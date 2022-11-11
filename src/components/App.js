import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import MyTeam from "./MyTeam"
import Login from "./Login"
import Header from "./Header"
import SavedTeams from "./SavedTeams"
import { TeamProvider } from "../context/myTeam";


function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [header, setHeader] = useState("")
  const [allPlayers, setAllPlayers] = useState([])


  useEffect(() => {
      fetch('http://localhost:3000/players')
      .then(resp => resp.json())
      .then((players) => setAllPlayers(players))
  }, []); 

  function handleClick() {
    setIsLoggedIn(false)
  }


  return (
      <div>
        <Header />
        <NavBar 
        isLoggedIn={loggedIn}
        handleClick={handleClick}
        />
        <Switch>
          <Route path="/myteam">
          <TeamProvider>
            <MyTeam isLoggedIn= {loggedIn} />
          </TeamProvider>
          </Route>
          <Route path="/mysavedteams">
            <TeamProvider>
            <SavedTeams
            isLoggedIn={loggedIn} />
            </TeamProvider>
          </Route>
          <Route path="/login">
            <Login 
            setIsLoggedIn= {setIsLoggedIn} 
            setHeader={setHeader}
            />
          </Route>
          <Route exact path="/">
            <Home 
            isLoggedIn= {loggedIn} 
            header={header}
            players={allPlayers}
            onPlayerClick={handlePlayerClick}
            />
          </Route>
          
        </Switch>

      </div>
  );
}

export default App;