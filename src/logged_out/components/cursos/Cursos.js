import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"

function Cursos(props) {
  const { selectCursos } = props;
  useEffect(() => {
    selectCursos();
  }, [selectCursos]);
    return (
      <Fragment>
        holi
      </Fragment>
    );
  }
  
  Cursos.propTypes = {
    selectCursos: PropTypes.func.isRequired
};
  
  export default Cursos;