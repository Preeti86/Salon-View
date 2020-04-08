import React from 'react';
import './drop-down.style.css'
import SHOP_DATA from '../../pages/shop/shop.data';
/* import CardPreview from '../../components/card-preview/card-preview.component';
 */

/* import SalongList from '../salong-list/salong-list.component'
 */

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        collections: SHOP_DATA,
      };

      this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({collections: event.target.collections});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.collections);
    event.preventDefault();
  }
  

  render() {
    const {collections} = this.state;
    return (
      <div>
          <div className="row">
          <div className="col">
           <select className="form-control" value={this.state.collections} onChange={this.handleChange}>
        {/*    {
        collections.map(({id, ...otherCollectionProps}) => (
          <CardPreview key= {id} {...otherCollectionProps} />
        ))
      } */}
              <option value="price">Pris 250 - 500kr</option>
              <option value="price">Pris 500 - 1000kr</option>
            </select>
            </div>
        </div> 
        </div>
        );
      }
    

      }
  
  export default Dropdown;












