import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import R from './Raja';
import S from './Surya';
import Kalyan from './Kalyan';
// import './style.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import data from './data/data.json';

class App extends Component{
  constructor(){
    super();
    this.state={
      name:'',
      role:''
    }
  }
  componentWillMount(){
    this.setState({
      name:data.basics.name,
      role:data.basics.role
    })
  }
render(){
  var s={
   color:'#fff',
   background:'#000' 
  }
  return(
    
    <BrowserRouter>
    <div>
      <h2> {this.state.name}</h2>
  <h3>{this.state.role}</h3>
      <Route path='/home' component={Home} />
      <Route path='/surya' component={S}/>
      <Route path='/kalyan' component={Kalyan} />
    </div>
    </BrowserRouter>
  )
}
}

const Home=()=>(
  <nav>
    <Link to='/surya' className="btn btn-primary"> Surya </Link>
    <Link to='/kalyan' className="btn btn-primary"> Kalyan </Link>

  </nav>
)
export default App;
