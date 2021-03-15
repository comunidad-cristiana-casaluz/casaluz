import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import HeadSection from "../niños/HeadSection"
import SecondSection from "../niños/SecondSection"

function Niños(props) {
  const { selectNiños } = props;
  useEffect(() => {
    selectNiños();
  }, [selectNiños]);
    return (
      <Fragment>
        <HeadSection />
        <SecondSection />
      </Fragment>
    );
  }
  
  Niños.propTypes = {
    selectNiños: PropTypes.func.isRequired
};
  
  export default Niños;