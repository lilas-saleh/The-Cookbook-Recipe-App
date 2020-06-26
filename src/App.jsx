import React from 'react';
import Main from './Main';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Fav from './components/Fav';
import About from './components/About';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  style: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
    
  }
});

function App() {
  const classes = useStyles();
  const key=Math.floor(Math.random()*100);
  return (
    <>
      <Router>
        <Navbar />
        <div className={classes.style} key={key}>
          <Route exact path="/" component={Main} key={key+1}/>
          <Route exact path="/Favorite" component={Fav}/>
          <Route exact path="/About" component={About} />
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
