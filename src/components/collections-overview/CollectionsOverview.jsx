import React from "react";
import "./collections-overview.styles.scss";
import CollectionPreview from "./../collection-preview/CollectionPreview";
/* Redux */
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";
/* Motion */
import { motion } from "framer-motion";
const CollectionsOverview = ({ collections }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="collections-overview"
  >
    {collections.map(({ id, ...rest }) => (
      <CollectionPreview key={id} {...rest} />
    ))}
  </motion.div>
);

let mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
