import React, {Component} from 'react';
import CollectionPreview from '../../components/Collection-Preview/Collection-Preview.component';
import { SHOP_DATA } from './shop-data';
import "./ShopPage.styles.scss";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  }

  render() {
    return (
      <div>
        {this.state.collections.map(({title, items}) => {
          return <CollectionPreview title={title} items={items}/>
        })
        }
      </div>
    )
  }
}

export default ShopPage;
