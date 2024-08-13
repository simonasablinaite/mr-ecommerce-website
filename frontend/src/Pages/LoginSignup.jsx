import React from 'react';
import './CSS/loginSignup.css';

const LoginSignup = () => {
   return (
      <div className='loginsignup'>
         <div className="loginsignup-container">
            <h1>Registruotis</h1>

            <div className="loginsignup-fields">
               <input type="text" placeholder='Jūsų Vardas' />
               <input type="email" placeholder='El. pašto adresas' />
               <input type="password" placeholder='Slaptažodis' />
            </div>
            <button>Tęsti</button>
            <p className='loginsignup-login'>Jau turi paskyrą? <span>Prisijunk čia</span> </p>

            <div className="loginsignup-agree">
               <input type="checkbox" name='' id='' />
               <p>Tęsdamas sutinku su naudojimo ir privatumo poltika</p>
            </div>
         </div>
      </div>
   )
}

export default LoginSignup
