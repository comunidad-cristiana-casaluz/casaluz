import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import HeadSection from "../mujeres/HeadSection"
import SecondSection from "../mujeres/SecondSection"
import PhotosSection from "./PhotosSection";

function Mujeres(props) {
  const { selectMujeres } = props;
  useEffect(() => {
    selectMujeres();
  }, [selectMujeres]);
    return (
      <Fragment>
        <HeadSection />
        <SecondSection />
        <PhotosSection />
      </Fragment>
    );
  }
  
  Mujeres.propTypes = {
    selectMujeres: PropTypes.func.isRequired
};
  
  export default Mujeres;