import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <HashRouter>
          <Navbar />

          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route exact path={'/'} render={ () => <Redirect to={'/main'} />} />
              <Route path={'/main'} render={ () => <Home /> } />
              <Route path={'/about'} render={ () => <About /> } />
              <Route path={'*'} render={ () => <div>404 Page not found</div> } />
            </Switch>
          </div>
        </HashRouter>
      </AlertState>
    </FirebaseState>
  )
}

export default App;
