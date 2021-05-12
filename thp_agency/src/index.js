import React, {createContext, useContext, useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Works from './Pages/Works';
import Navbar from './Components/Navbar';
import ThemeContext from './ThemeContext';
import Theme from './Theme';


const App = () => {

//a transférer sur le bouton
  const [theme, setTheme] = useState('light');

  const ToggleTheme = useCallback(function (){
    setTheme(t => t === 'light' ? 'dark' : 'light')
  }, [])

  const currentTheme = theme === 'light' ? Theme.light : Theme.dark;
  const button = theme === 'light' ? 'dark mode' : 'light mode';
//FIN DE : a transférer sur le bouton

  return (
    
    <Router>
    <button style={{float: 'right'}} className="theme" onClick={ToggleTheme} type="button">{button}</button>
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
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
