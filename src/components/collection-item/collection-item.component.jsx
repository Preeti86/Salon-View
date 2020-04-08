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
      postcode,
      open, 
      telefon, 
      description, 
      website }) => (   
      <div className="cards" >
        <div className="card_item">
          <div className="card">
          <img alt="salon" clasName="card_image" src={imageUrl} /> 
          <div className="tab">
          <button class="tablink" onclick="openCity('London', this, 'red')" id="defaultOpen">Info</button>
          <button class="tablink" onclick="openCity('Paris', this, 'green')">Schema</button>
          </div>
          <div className="card_content">
            <h2 className="card_title">{title}<i class="fa fa-heart fa-fw w3-margin-right w3-s"></i></h2>  
            <p className="card_text"><StarRating /></p>      
            <p className='card_text'><i class="fa fa-map-marker fa-fw w3-margin-right w3-s"></i>{address}, {postcode} </p>
            <p className='card_text'><i class="fa fa-clock-o fa-fw w3-margin-right w3-s"></i>{open}<span className='card_text_down'><i class="fa fa-angle-down" aria-hidden="true"></i></span></p>       
            <p className='card_text'><i class="fa fa-phone fa-fw w3-margin-right w3-s"></i>{telefon}</p>
            <p className='card_text'><i class="fa fa-globe fa-fw w3-margin-right w3-s"></i>{website}</p>
            <p className='card_text'><i ></i>{description}</p>  
          </div>
          </div>
          </div>
          </div>
    ); 


export default withRouter(CollectionItem);
