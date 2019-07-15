import React, { PureComponent } from 'react'
import './App.css'
import './components/layout/Navbar'
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'

export default class componentName extends PureComponent {
  //set state for loading api.
  state = {
    users:[],
    loading: false
  }

 // async componentDidMount() {
  //  console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    //before use api refresh let install npm -i axios 
    // setState for loading to true
 //   this.setState({loading: true});
    //call API Url
   
//  }
  //search github user
  searchUser = async text => {
    console.log(text);
    const responsed = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //if load complet set user variable to responsed.data and set loading to false 
    this.setState({users:responsed.data.items, loading:false});
  };

  render() {
    
    return (
      <div className='App'>
          <Navbar title='Github finder' icon='fab fa-github' />
         
          <div className="container">
           <Search searchUser = {this.searchUser} />
            <Users users={this.state.users} loading={this.state.loading}></Users>
          </div>
      </div>
    )
  }
}
