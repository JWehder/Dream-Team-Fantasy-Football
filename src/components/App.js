import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home"
import MyTeam from "./MyTeam"
import Login from "./Login"
import Header from "./Header"
import SavedTeams from "./SavedTeams"
import { TeamProvider } from "../context/myTeam";
import { PlayerProvider } from "../context/players";


function App() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [header, setHeader] = useState("")
  
  function handleClick() {
    setIsLoggedIn(false)
  }

  return (
      <div>
        <PlayerProvider>
        <TeamProvider>
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
            isLoggedIn={loggedIn} 
            />
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
            />
 
          </Route>
        </Switch>
        </TeamProvider>
        </PlayerProvider>

      </div>
  );
}

export default App;