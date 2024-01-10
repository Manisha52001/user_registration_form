import React, { useState } from 'react'

const RegistrationForm = () => {
    let [state,setState] = useState({
        username: "",
        email: "",
        password: "",
        gender: "",
      });
    
      let [hobbies, setHobbies] = useState([]);

      let {username,email,password,gender}=state;
    
      let handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(state);
      }
    
      let handleChange = (event) => {
       let { name, value} = event.target;
       setState({ ...state, [name]: value});
      }
    
      let handleCheckbox = (e) => {
        setHobbies([...hobbies,e.target.value]);
      }
    
  return (
    <>
    <div className='mainContainer'>
         <form onSubmit={handleSubmit} className='formContainer'>
         <legend>Registration Form</legend>
        <div>
          <input type="text" placeholder="Enter your username" value={username} name="username" onChange={handleChange}/> 
        </div>
        <div>
          <input type="email" placeholder="Enter your email" value={email} name="email" onChange={handleChange}/>
        </div>
        <div>
          <input type="password" placeholder="Enter your password" value={password} name="password" onChange={handleChange}/>
        </div>
        <div value={gender} name="gender" onChange={handleChange}>
          <label htmlFor="">Gender: </label>
          <input type="radio" name="gender" value="Male"/>Male
          <input type="radio" name="gender" value="Female"/>Female
        </div>
        <div value={hobbies} name="hobbies" onChange={handleCheckbox}>
          <label htmlFor="">Hobbies: </label>
          <input type="checkbox" value="Painting"/>Painting
          <input type="checkbox" value="Reading novels"/>Reading novels
          <input type="checkbox" value="Dancing"/>Dancing
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default RegistrationForm