import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_action/user_action";
import { useNavigate } from "react-router-dom";

function Register(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  const onEmailHandler = (event) => {
     setEmail(event.target.value); 
  }
  const onNameHandler = (event) => {
     setName(event.target.value); 
  }
  const onPasswordHandler = (event) => {
     setPassword(event.target.value); 
  }
  const onConfirmPasswordHandler = (event) => {
     setConfirmPassword(event.target.value);
  }
  
  const onSubmitHandler = (event) => {
	  event.preventDefault();
	  if(password !== confirmPassword){
		  return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
	  }
	  let body = {
		  email: email,
		  password: password,
		  name: name
	  };
/* 	  dispatch(registerUser(body))
	  .then(response => {
		  if(response.payload.success){
			  navigate('/login')
		  }else{
			  alert('Failed to sign up')
		  }
	  })//내보내기
*/
  }	 
	
	return(
    <div style={{ display:"flex", justifyContent: "center", alignItems: "center",
				width: "100%", height: "100vh"}}>
		  
      <form style={{display:"flex", flexDirection:"column"}}
		  onSubmit={onSubmitHandler}>
		  
		  <label>Email</label>
		  <input type="email" value={email} onChange={onEmailHandler} ></input>
		  
		  <label>Name</label>
		  <input type="name" value={name} onChange={onNameHandler} ></input>
		  
		  <label>Password</label>
		  <input type="password" value={password} onChange={onPasswordHandler} ></input>
		  
		  <label>Confirm Password</label>
		  <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler} ></input>
		  
		  <br/>
		  <button type="submit">
        Register
		  </button>
	  </form>
		  
    </div>
  )
}

export default Register