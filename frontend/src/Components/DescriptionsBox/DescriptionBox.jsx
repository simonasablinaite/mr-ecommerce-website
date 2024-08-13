import React from 'react';
import './descriptionBox.css';

const DescriptionBox = () => {
   return (
      <div className='description-box'>
         <div className="description-box-navigator">
            <div className="description-box-nav-box">
               Aprašymas
            </div>

            <div className="description-box-nav-box fade">
               Peržiūros (122)
            </div>
         </div>

         <div className="description-box-description">
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo quibusdam placeat commodi soluta veniam inventore voluptatibus iste corrupti rem assumenda pariatur, eveniet voluptatum vero consequatur. Suscipit, ratione. Quo, ex?
            </p>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum sint dignissimos magnam tenetur iste harum odit voluptates, rem quas possimus.
            </p>
         </div>
      </div>
   )
}

export default DescriptionBox
