import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRating from '../rating/rating';

import './salong-list.style.css'; 

const SalongList = ({ id, title, imageUrl, rating, address, size, time, price, duration, history, linkUrl, match, Dropdown, onClick, items }) => (  
  <div 
    className={`${size} container`}  
  >
   <div className="box" key={id}>
      <p>{time}</p> 
      <p>{title}</p> 
      <p>{price}</p>
      <p className="address">{address}</p> 
      <StarRating />{rating}
      <p>{duration}</p>
      <p>
        <i 
        class="fa fa-angle-right" 
        aria-hidden="true"  
        onClick= {() => history.push(`${match.url}${linkUrl}`)}></i>
      </p>    
    </div>
  </div>
);
export default withRouter(SalongList);