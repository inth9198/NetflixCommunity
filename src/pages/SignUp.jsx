import { Component } from "react";
import { Form, Button,  } from 'react-bootstrap'
import axios from 'axios';

class SignUp extends Component {
    state = {
        email : '',
        pw : '',
        pw_confirm : ''
    }

    onChangeHandler = (e)=>{
        e.preventDefault();    
        this.setState({
        [e.target.name] : e.target.value
      })
    }
  
    onSubmitHandler = (e)=>{
      e.preventDefault();
      const {email , pw, pw_confirm} = this.state;
      if(pw !== pw_confirm) {
        return alert('비밀번호가 일치하지 않습니다.');
      }
      if(pw.length<8) {
        return alert('비밀번호를 8자리 이상으로 설정해 주세요')
      }
  
      axios({//
        method : 'post',
        url : 'server/signup',//수정 필요
        data : {
          email : email,
          password : pw
        }
      })
      .then(function(res) {
        console.log(res);
        document.location.href = '/home'
      })
      .catch(function (err) {
        console.log(err);
      })
    }
  
    render() {
        return (
            <div>
                <h1>회원가입</h1>
                <Form onSubmit={this.onSubmitHandler}>
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
                <Form.Label>비밀번호</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name='pw'
                    onChange={this.onChangeHandler}
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password confirm" 
                    name='pw_confirm'
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
          </div>
        )
    }
}

export default SignUp;