import React from 'react';
import './card.css';

const Card = ({ title, text, imgUrl }) =>( 
    <div className='eager-escapes__card'>
        <div className='eager-escapes__card-image'>
            <img src={imgUrl} alt="" />
        </div> 
        <div>
        <h3 class="content-title">{title}</h3>
        <p class="content-text"> {text}</p>
        </div>
    </div>
            
           
            
    
);
    
export default Card;