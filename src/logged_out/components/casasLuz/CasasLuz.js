import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import HeadSection from './HeadSection'
import SecondSection from './SecondSection'

export default function CasasLuz(props) {
    const { selectCasasLuz } = props;
    useEffect(() => {
        selectCasasLuz();
    }, [selectCasasLuz])
    return (
        <Fragment>
            <HeadSection />
            <SecondSection />
        </Fragment>
    )
}
CasasLuz.propTypes = {
    selectCasasLuz: PropTypes.func.isRequired
};