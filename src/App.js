import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/page/Home';
import Member from './components/page/Member';
import Product from './components/page/Product';
import Setup from './components/page/Setup';

function App() {
  return (
    <div>
        <Router>
            <Navigation/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/member" component={Member} exact/>
                <Route path="/product" component={Product} exact/>
                <Route path="/setup" component={Setup} exact/>
            </Switch>
        </Router>
      </div>
  );
}

export default App;
