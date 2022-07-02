import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...rest }) => (
      <MenuItem key={id} {...rest} />
    ))}
  </div>
);

let mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
