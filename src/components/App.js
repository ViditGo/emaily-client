import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import {connect} from 'react-redux';
import * as actions from '../actions'; 

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
       <BrowserRouter>
        <div>
          <Header />
          <Route path="/surveys/new" component={SurveyNew}/>
          <Route exact path="/surveys" component={Dashboard}/>
          <Route exact path="/" component={Landing}/>
        </div>  
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"><a href="/auth/google">Sign in with Google</a>
        </p> */}
        </BrowserRouter>
      </div>
    );
  }
}



export default connect(null, actions)(App);
