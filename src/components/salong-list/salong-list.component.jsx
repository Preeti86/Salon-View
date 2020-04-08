import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRating from '../rating/rating';

import './salong-list.style.css'; 

const SalongList = ({ id, title, imageUrl, rating, address, size, time, price, duration, history, linkUrl, match, Dropdown, onClick, items }) => (  
  <div 
    className={`${size} container`}  
  >
   <div className="item">
      <span>{time}</span> 
      <span>{title}</span> 
      <span>{price}</span>
      <span className="address">{address}</span> 
      <StarRating />{rating}
      <span>{duration}</span>
      <span>
        <i 
        class="fa fa-angle-right" 
        aria-hidden="true"  
        onClick= {() => history.push(`${match.url}${linkUrl}`)}></i>
      </span>    
    </div>
  </div>
);
export default withRouter(SalongList);