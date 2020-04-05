import React from 'react';

import './card-preview.style.css';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const CardPreview = ({ items }) => (
  <div className='collection-preview'>
        <div className='preview'>
            {items
               .filter((item, idx) => idx < 1)
               .map(({id, ...otherItemProps})  => (
                <CollectionItem key={id} {...otherItemProps} />
              ))}
        </div>
  </div>
);

export default CardPreview;
