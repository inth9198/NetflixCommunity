import React, { Component } from 'react'
import Login from './pages/Login';
import Intro from './pages/Intro'
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  state = { }

  componentDidMount(){
      const config = {
          headers : {
              Authorization : 'Bearer' + localStorage.getItem('token')
          }
      };

      axios.get('user', config)
          .then(
          res=> {
              console.log(res);
              this.setState({
                  user: res.data
              });
          },
          err => {
              console.log(err);
          }
      )
  }


  render() {
    return(
      <div>
        <Routes>
          <Route path='/' element={<Intro></Intro>}/>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/signup' element={<SignUp></SignUp>}/>
          <Route path='/home' element={<Home user={this.state.user}></Home>}/>
        </Routes>
      </div>
    );
  }
}

export default App;