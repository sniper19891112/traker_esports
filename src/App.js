import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/home/Home.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Teams from './views/teams/Teams.js';
import News from './views/news/News.js';
import Tournaments from './views/tournaments/Tournaments.js';
import Contact from './views/contact/Contact.js';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/news" component={News} />
          <Route exact path="/tournois" component={Tournaments} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
