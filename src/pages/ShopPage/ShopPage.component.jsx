import React from 'react';
import CollectionsOverview from '../../components/Collections-Overview/Collections-Overview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import "./ShopPage.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionPage from '../Collection/Collection.component';

const ShopPage = ({match}) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
