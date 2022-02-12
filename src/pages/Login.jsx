import { Component } from "react";
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';

class App extends Component {
  state = {
    email : '',
    pw : '',
    loggedIn : false
  }

  onChangeHandler = (e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    })
  } 

  onSubmitHandler = (e)=>{
    e.preventDefault();
    const data = {
      email :this.state.email,
      password : this.state.pw
    }
    axios.post('server/login', data)
      .then(function(res){
        console.log(res);
        localStorage.setItem('token',res.data.token);
        this.setState({
          loggedIn : true
        })
      })
      .catch(function(err) {
        console.log(err);
      })
  }
  
  render() {
    if(this.state.loggedIn) {
      return (document.location.href = '/home');
    }
    return(
      <Form onSubmit={this.onSubmitHandler}>
        <h1>login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            name="email"
            onChange={this.onChangeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            name='pw'
            onChange={this.onChangeHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
export default App;
