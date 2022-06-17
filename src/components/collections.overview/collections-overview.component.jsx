import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreview from "./../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...rest }) => (
      <CollectionPreview key={id} {...rest} />
    ))}
  </div>
);

let mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
