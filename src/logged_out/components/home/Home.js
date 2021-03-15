import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import FirstSection from "./FirstSection";
import ScheduleServices from "./ScheduleServices";
import PraySection from "./PraySection";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <FirstSection />
      <PraySection />
      <ScheduleServices />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired
};

export default Home;
