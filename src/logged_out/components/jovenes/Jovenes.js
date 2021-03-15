import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import HeadSection from "../jovenes/HeadSection"
import SecondSection from "../jovenes/SecondSection"

function Jovenes(props) {
  const { selectJovenes } = props;
  useEffect(() => {
    selectJovenes();
  }, [selectJovenes]);
    return (
      <Fragment>
        <HeadSection />
        <SecondSection />
      </Fragment>
    );
  }
  
  Jovenes.propTypes = {
    selectJovenes: PropTypes.func.isRequired
};
  
  export default Jovenes;