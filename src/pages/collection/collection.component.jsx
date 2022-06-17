import React from "react";
import "./collection.styles.scss";
import { useParams } from "react-router-dom";
import CollectionItem from "./../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

const CollectionPage = ({ collections }) => {
  let { collectionPage } = useParams();
  let collection = collections.filter(
    (item) => item.routeName === collectionPage
  );

  return (
    <div className="collection-page">
      <h1 className="title">{collection[0].title}</h1>
      <div className="items">
        {collection[0].items.map((item) => (
          <CollectionItem id={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

let mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionPage);
