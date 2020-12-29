import React from 'react';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import "./Collections-Overview.styles.scss";
import { createStructuredSelector } from "reselect";
import CollectionPreview from '../Collection-Preview/Collection-Preview.component';

const CollectionsOverview = ({ collections }) => {
  console.log("COLLECTIONS", collections[0].title)
  return (
    <div className="collections-overview">
      {collections.map(({title, items}) => {
        return <CollectionPreview  title={title} items={items}/>
      })
      }
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
