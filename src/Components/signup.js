import React, { useState } from 'react';
import './style/index.css';
import { Image,Form,Button } from 'react-bootstrap';
import {Link ,useNavigate} from 'react-router-dom';
import logo from './Assets/lttslogo.jpg';
import axios from 'axios';
import { emailValidator, passwordValidator } from '../Components/validator';

const Leftside = () => {

    const history = useNavigate();

	const [input, setInput] = React.useState({ email: '', password: '' });
    let a = logo;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phno, setPhno] = useState('');
    const [pwd, setPwd] = useState('');
    const [cpwd, setCpwd] = useState('');
    const [validated, setValidated] = useState(false);
    const [errorMessage, seterrorMessage] = React.useState('');
	const [successMessage, setsuccessMessage] = React.useState('');
    const handleSubmit = (event) => {
        
       

        if(name.length === 0){
            alert("Name has left blank!!");
        }
        else if (!emailValidator(email)) return seterrorMessage('Please enter valid email id');
        else if(phno.length !== 10){
            alert("Please enter valid Mobile Number!!");
        }
        else if (!passwordValidator(pwd))
        return seterrorMessage(
            'Password should have minimum 8 character with the combination of uppercase, lowercase, numbers and specialcharaters'
        );
        else if(pwd !== cpwd){
            alert("Please enter valid password!!");
        }
        else{
          const url ="http://localhost/projects/php/signup.php";
           let fData = new FormData();
           fData.append('Name',name);
           fData.append('Email',email);
           fData.append('Mobile_no',phno);
           fData.append('password',pwd);
           axios.post(url ,fData).then(response=>alert(response.data)).catch(error=>alert(error));
           
        }
    };

    return (
        <div className='body1'>
           <nav>
           <h2 style={{fontFamily: 'Copperplate, Papyrus, fantasy',display: 'flex'}}>SMW Institute of Technology</h2>
                <div style={{marginLeft:-15}} className="list">
                <ul>
                    <li className='active'>SIGN UP</li>
                    <Link to="/signin"><li>SIGN IN</li></Link>
                    <li>ABOUT</li>
                </ul>
                </div>
            </nav>
            <div className='parent'>
                <div className='child-1'>
                    <h1 style={{marginLeft:0}}>WELCOME</h1>
                    <p style={{textAlign:'center'}}>To keep connected with us please login with your Personal Information</p>
                    <div style={{marginLeft:0}} className='button2'>
                        <Link to="/signin"><button type='button' className="input box" name='button2'>SIGN IN</button></Link>
                    </div>
                </div>
            
                <div className='child-2'>
                        <div className = "signup" >
                            <h1 style={{ marginLeft:20}}>CREATE ACCOUNT</h1>
                            {errorMessage.length > 0 && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
							{successMessage.length > 0 && (
								<div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
							)}
                            <Form style={{ marginLeft:0}}  validated = {validated} onSubmit={handleSubmit}>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} className="inputbox" name="name" placeholder='User Name' required/>
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="inputbox" name="email" placeholder='Email' required />
                                <Form.Control type="text" value={phno} onChange={(e) => setPhno(e.target.value)} className="inputbox" name="phno" placeholder='Phone Number' required/>
                                <Form.Control type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} className="inputbox" name="pwd" placeholder='Your Password' required />
                                <Form.Control type="password" value={cpwd} onChange={(e) => setCpwd(e.target.value)} className="inputbox" name="cpwd" placeholder='Confirm Password' required/>
                                <Button type='submit' style={{ marginLeft:0}} className="inputbox" name='button'>Submit</Button>                               
                            </Form>
                        </div>

                       
                </div>
            </div>      
        </div>       
    )
}
export default Leftside;












