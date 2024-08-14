import React from 'react';
import './news-letter.css';

const NewsLetter = () => {
   return (
      <div className='newsletter'>
         <h1>Gaukite išskirtinius pasiūlymus tik jums</h1>
         <p>Prenumeruokite naujienlaiškį</p>

         <div>
            <input type="email" placeholder='Jūsų El. paštas' />
            <button>Prenumeruoti</button>
         </div>
      </div>
   )
}

export default NewsLetter
