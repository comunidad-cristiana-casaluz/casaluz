import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import HeadSection from "./HeadSection"
import Liderazgo from "./Liderazgo"
import MisionVision from "./MisionVision"

function AcercaDe(props) {
  const { selectAcercaDe } = props;
  useEffect(() => {
    selectAcercaDe();
  }, [selectAcercaDe]);
    return (
      <Fragment>
        <HeadSection />
        <MisionVision />
        <Liderazgo />
      </Fragment>
    );
  }
  
AcercaDe.propTypes = {
    selectAcercaDe: PropTypes.func.isRequired
};
  
  export default AcercaDe;