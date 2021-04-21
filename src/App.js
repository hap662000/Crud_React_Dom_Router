import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
import Nav from "./Nav"
import Shop from './Shop'
import About from './About'
import Item from './itemDetail'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Ability to route is done using browser router
// Everything inside this Router have the ability to routing
// Switch only renders out that component which is matched first
function App() {
  return (
    <Router>
      <Switch>
      <div className ='App'>
        {/* <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <Contacts/>
          </div>
        </div> */}
        <Nav/>
        {/* Path to where to route and the component to route */}
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/shop' exact component={Shop}/>
        <Route path = '/shop/:id' component={Item}/>
      </div>
      </Switch>

    
    </Router>
    
  );
}

const Home = () => {
  return(
    <div>
    <h1>Home Page</h1>
    </div>
  )
}

export default App;
