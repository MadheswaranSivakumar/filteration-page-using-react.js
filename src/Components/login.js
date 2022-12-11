import React from 'react';
import { useState } from 'react';
import './style/index.css'
import { Image,Form,Button } from 'react-bootstrap';
import logo from './Assets/lttslogo.jpg';
import { useNavigate } from "react-router-dom";
import axios from 'axios';  
import {Link} from 'react-router-dom';

const Login = () => {
    
    let a = logo;
    const navigate = useNavigate();
    const [UnameOrEmail, setUnameOrEmail] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const [errorMessage, setErrorMessage] = useState('');
    const user = {
      email: "test@test.com",
      username: "test123",
      password: "123456"
    };

    // const [user,setUser]=useState({email:'',password:''});

    const handleChange = () => {
        // setUser({...user, [e.target.name]: e.target.value}); 
        const url ="http://localhost/projects/php/signup.php";
        if (UnameOrEmail === user.email || UnameOrEmail === "project") {
            if (password === "12345") {
              setAuthenticated(true)
              localStorage.setItem("authenticated", true);
              navigate("/final");
              console.log("User Loged In");
              alert("User Loged In");
            } else {
              setErrorMessage('wrong password!');
              localStorage.setItem("authenticated", false);
              console.log("wrong password");
             
            }
        }
           else {
              setErrorMessage('please check you username or Email!');
              alert("Please check you username or Email!");
            console.log("please check you username or Email");
          
           }
        }
    

        // const submitForm=(e)=>{
        //     e.preventDefault(); 
        //    const sendData = {
            
        //         email:user.email,
        //         password:user.password
    
        //     }
    
        //    // console.log(sendData);
    
        //     axios.post('',sendData)
        //     .then((result)=>{
        //         if (result.data.Status === '200') { 
        //             window.localStorage.setItem('email', result.data.email);
        //             window.localStorage.setItem('userName', (result.data.first_name+ ' ' +result.data.first_name ));  
        //             navigate(`/dashboard`);
        //         }
        //     else  {
        //        //props.history.push('/Dashboard')  
        //        //props.history.push('/Dashboard') Redirect
               
        //        alert('Invalid User'); 
        //     }
        //   })  
        // }


    
    return (
        <div className='body1'>
            <nav>
            <h2 style={{fontFamily: 'Copperplate, Papyrus, fantasy',display: 'flex'}}>SMW Institute of Technology</h2>
                <div style={{marginLeft:-15}} className='list'>
                    <ul>
                    <Link to="/signup"><li>SIGN UP</li></Link>
                        <li className='active'>SIGN IN</li>
                        <li>ABOUT</li>
                    </ul>
                </div>
            </nav>
            <div className='parent1'>
                <div className='child-11'> 
                    
                </div>
                <div className='child-22'>
                    <div className = "signup" >  
                        <h1 style={{marginLeft:160}}>SIGN IN</h1>
                        <Form onSubmit={handleChange}>
                            <Form.Control  type="text" style={{marginLeft:60}} onChange={(e) => setUnameOrEmail(e.target.value)} className="inputbox" name="UnameOrEmail"  value={UnameOrEmail} placeholder='Email' required/><br/>
            
                            <Form.Control type="password" style={{marginLeft:60}} onChange={(e) => setpassword(e.target.value)} className="inputbox" name="password" value={password}  placeholder='Password' required/><br/>
            
                            <Button type='submit' style={{marginLeft:160}} className="inputbox" name='button'>SUBMIT</Button>
                            <Link style={{color:" rgb(0, 63, 114)"}} to=""><p style={{marginLeft:160, marginTop:-30}}>forgot password?</p></Link>
                        </Form>
                        
                    </div>
                </div>
            </div>   
            {errorMessage && (
            <p className="error"> {errorMessage} </p>
          )}
        </div>
    )
}

export default Login;