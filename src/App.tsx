import React from 'react';
import './App.css';
import InternalRouter from "./router/Router";
import {mainRoutes} from "./router/routes";
import {isLogin, logOut} from "./utils/auth";

function App() {
  return (
    <div className="App">
        <header className="header-menu">
            <nav className="navbar-menu">
                {!isLogin && (<a href='/' className="button-a" onClick={logOut}>Log out</a>)}
                {Object.values(mainRoutes).map(val =>
                val.show && (<a key={val.title} className="button-a" href={val.path}>{val.title}</a>))}
            </nav>
        </header>
      <InternalRouter/>
    </div>
  );
}

export default App;
