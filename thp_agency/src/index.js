import React, { useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';
import Navbar from './Components/Navbar';
import Theme from './Theme';
import WorkSlug from './Pages/Works/StudyCase/index';
import './App.css'

const App = () => {

//a transférer sur le bouton
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  const ToggleTheme = useCallback(function (){
    setTheme(t => t === 'light' ? 'dark' : 'light')
  }, [])

  const currentTheme = theme === 'light' ? Theme.light : Theme.dark;
  const button = theme === 'light' ? 'dark mode' : 'light mode';

  localStorage.setItem('theme', theme);

//FIN DE : a transférer sur le bouton
//CSS for borders :
document.body.style = 'background: rgb(216, 130, 2);';
  return (
    <div className="background" >
    
    <Router>
    <button className="btn" onClick={ToggleTheme} type="button">{button}</button>
      <Navbar />
      <main style={currentTheme}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />

              <Route path="/Works/:clientName" exact>
                <WorkSlug />
              </Route>

          </Route>
        </Switch>
      </main>
    </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
