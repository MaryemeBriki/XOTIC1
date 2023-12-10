// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';  // Assurez-vous que le chemin est correct
import SignIn from './page/signin';
import SignUp from './page/signup';
import Home from './pages/Home';
// ... autres imports

const App = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Incluez le composant Header ici */}
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          {/* ... autres routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
