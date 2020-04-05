import React from 'react';

import SHOP_DATA from './shop.data.js';
import CardPreview from '../../components/card-preview/card-preview.component';

class shopPage extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        collections: SHOP_DATA,
      };
  }

  render() {
    const {collections} = this.state;
    return (
    <div className='shop-Page'>
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CardPreview key= {id} {...otherCollectionProps} />
        ))
      }
    </div>
    );
  }
}

export default shopPage;