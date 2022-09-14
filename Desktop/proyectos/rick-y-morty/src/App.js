import './App.css';
import Home from './components/Home/index.js'
import Personajes from './components/Personajes';
import { Route,withRouter,Switch,Redirect } from 'react-router-dom'
import React,{ Component } from 'react';

class App extends Component{
  render(){
      return(
        <section className='app'>
          <h1>Rick Y Morty</h1>
            <Route  path='/home' component={Home}/>
            <Route exact path= '/personajes/:id' component={Personajes} />
            <Route  exact path= '/' render={()=> <Redirect to='/home' />} />
        </section>
    )
  }
}

export default withRouter(App);
