import React, { useRef, useState } from 'react'
import "./styles.css"

const FormValidation = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const acceptRef = useRef();

    const [errors,setErrors] = useState([]);

    const handleErrors = () =>{
        let newErrors = [];

        
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        let accept = acceptRef.current.checked;

        

        if(name === ''){
            newErrors.push({name:"Name is required"})
        }
        if(email === ''){
            newErrors.push({email:"Email is required"})
        }
        if(password ===''){
            newErrors.push({password:"Password is required"})
        }
        if(accept === false){
            newErrors.push({accept:"You should accept to enter"})
        }

        setErrors(newErrors);
        return newErrors.length === 0;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(handleErrors()){
            console.log("form submitted");
        }
        else{
            console.log("there is some error(s)!");   
        }
    }
  return (
    <div className='form-validation'>
        {
            errors.length > 0?
                <div className='errors'>
                    <ul>
                        {
                            errors.map((error) =>{
                                return <>
                                    <li>{error.name}{error.email}{error.password}{error.accept}</li>
                                </> 
                            })
                        }
                    </ul>
                </div>
            :null
        }
      <form onSubmit={handleSubmit}>
          <h3>Contact form</h3>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Full name</label>
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Full name" ref={nameRef} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" ref={emailRef} />
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref={passwordRef} />
        </div>
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={acceptRef} />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default FormValidation
