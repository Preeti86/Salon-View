import React from 'react';
import './drop-down.style.css'
/* import SalongList from '../salong-list/salong-list.component'
 */

class Dropdown extends React.Component {
  render() {
    return (
        <div className="row">
          <div className="col">
           <select className="form-control" value={this.props.sort} onChange={this.props.handleSortChange}>
                    <option value="price">Pris 250 - 500kr</option>
            </select>
            </div>
        </div>
    )
  }
}

  
  export default Dropdown;












