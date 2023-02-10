import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import './App.css';
import Dashboard from './Dashboard';
import Home from './Home';
import Navbar from './Navbar';
export const UserContext = React.createContext()
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/dashboard/:name' exact component={Dashboard} />
          <Route path='/aboutus' exact component={AboutUs} />
        </Switch>
      </BrowserRouter>
      <center>

        <UserContext.Provider value={"Iam from root"}>
          <Dashboard />
        </UserContext.Provider>
      </center>
    </div>
  )
}

export default App
