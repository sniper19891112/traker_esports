import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './views/home/Home.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
