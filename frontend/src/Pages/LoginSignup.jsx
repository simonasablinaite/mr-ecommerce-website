import React, { useState } from 'react';
import './CSS/loginSignup.css';

const LoginSignup = () => {

   const [state, setState] = useState("Prisijungti");
   const [formData, setFormData] = useState({
      username: "",
      password: "",
      email: ""
   });

   const changeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   }

   const login = async () => {
      console.log("Prisijungimo funkcija veikia", formData);
      let responseData;

      await fetch('http://localhost:7000/login', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((data) => { responseData = data });

      if (responseData.success) {
         localStorage.setItem('auth-token', responseData.token);

         window.location.replace("/");
      } else {
         alert(responseData.errors);
      }
   }

   const signup = async () => {
      console.log("Registracijos funkcija veikia", formData);
      let responseData;

      await fetch('http://localhost:7000/signup', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
      })
         .then((res) => res.json())
         .then((data) => { responseData = data });

      if (responseData.success) {
         localStorage.setItem('auth-token', responseData.token);

         window.location.replace("/");
      } else {
         alert(responseData.errors);
      }

   }


   return (
      <div className='loginsignup'>
         <div className="loginsignup-container">
            <h1>{state}</h1>

            <div className="loginsignup-fields">
               {state === "Registruotis" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Jūsų Vardas' /> : <></>}
               <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='El. pašto adresas' />
               <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Slaptažodis' />
            </div>
            <button onClick={() => { state === "Prisijungti" ? login() : signup() }}>Tęsti</button>
            {state === "Registruotis" ? <p className='loginsignup-login'>Jau turi paskyrą? <span onClick={() => { setState("Prisijungti") }}>Prisijunk čia</span> </p> : <p className='loginsignup-login'>Sukurti paskyrą? <span onClick={() => { setState("Registruotis") }}>Spausk čia</span> </p>
            }

            <div className="loginsignup-agree">
               <input type="checkbox" name='' id='' />
               <p>Tęsdamas sutinku su naudojimo ir privatumo poltika</p>
            </div>
         </div>
      </div>
   )
}

export default LoginSignup
