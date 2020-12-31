import React, { Component } from 'react';
import CollectionsOverview from '../../components/Collections-Overview/Collections-Overview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import "./ShopPage.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionPage from '../Collection/Collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/With-Spinner/With-Spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({loading: false})
    })

    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   updateCollections(collectionsMap)
    //   this.setState({loading: false})
    // })
  }
  render() {
    const { match } = this.props;
    const {loading} = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
        <Route path={`${match.path}/:collectionId`} render={props => <CollectionsPageWithSpinner isLoading={loading} {...props}/>}/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
