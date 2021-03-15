import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import HeadSection from "../matrimonios/HeadSection"
import SecondSection from "../matrimonios/SecondSection"
import PhotosSection from "./PhotosSection";

function Matrimonios(props) {
  const { selectMatrimonios } = props;
  useEffect(() => {
    selectMatrimonios();
  }, [selectMatrimonios]);
    return (
      <Fragment>
        <HeadSection />
        <SecondSection />
        <PhotosSection />
      </Fragment>
    );
  }
  
  Matrimonios.propTypes = {
    selectMatrimonios: PropTypes.func.isRequired
};
  
  export default Matrimonios;