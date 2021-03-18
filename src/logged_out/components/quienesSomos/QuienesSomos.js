import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import HeadSection from "./HeadSection"
import Liderazgo from "./Liderazgo"
import MisionVision from "./MisionVision"

function QuienesSomos(props) {
  const { selectQuienesSomos } = props;
  useEffect(() => {
    selectQuienesSomos();
  }, [selectQuienesSomos]);
    return (
      <Fragment>
        <HeadSection />
        <MisionVision />
        <Liderazgo />
      </Fragment>
    );
  }
  
QuienesSomos.propTypes = {
    selectQuienesSomos: PropTypes.func.isRequired
};
  
  export default QuienesSomos;