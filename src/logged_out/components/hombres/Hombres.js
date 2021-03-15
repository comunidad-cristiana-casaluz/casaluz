import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import HeadSection from "../jovenes/HeadSection"
import SecondSection from "../jovenes/SecondSection"
import PhotosSection from "./PhotosSection";

function Hombres(props) {
  const { selectHombres } = props;
  useEffect(() => {
    selectHombres();
  }, [selectHombres]);
    return (
      <Fragment>
        <HeadSection />
        <SecondSection />
        <PhotosSection />
      </Fragment>
    );
  }
  
  Hombres.propTypes = {
    selectHombres: PropTypes.func.isRequired
};
  
  export default Hombres;