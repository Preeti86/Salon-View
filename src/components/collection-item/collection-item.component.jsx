import React from 'react';
import { withRouter } from 'react-router-dom';
import StarRating from '../rating/rating';

import './collection-item.style.css';
 
const CollectionItem = ({ 
      id, 
      name, 
      title, 
      size,
      history,
      match, 
      linkUrl, 
      price, 
      imageUrl, 
      time, 
      address, 
      open, 
      telefon, 
      description, 
      website }) => (   
        <div
          className={`${size} container`} 
         >
            <div  className="col-md-6" >
            <img alt="salon" src={imageUrl} />
            <p className='title'>{title} </p>
          <h2 className='subtitle'><StarRating />(32)</h2>
          <p className='heart'><i class="fa fa-heart-o fa-fw w3-margin-left w3-s" aria-hidden="true"></i></p>      
            </div>     
          <div className="contentBx">
          <div className="content">
            <h2>{title}</h2>
            <p><i class="fa fa-map-marker fa-fw w3-margin-right w3-s"></i>{address}</p>
            <p><i class="fa fa-clock-o fa-fw w3-margin-right w3-s"></i>{open}</p>
            <p><i class="fa fa-phone fa-fw w3-margin-right w3-s"></i>{telefon}</p>
            <p><i class="fa fa-wordpress fa-fw w3-margin-right w3-s"></i>{website}</p>
            <p><i ></i>{description}</p>  
          </div>
      </div>
      </div>
    
  );

export default withRouter(CollectionItem);
