import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Box,
  withStyles,
  withWidth,
  Hidden,
} from "@material-ui/core";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[0],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
    backgroundColor: 'transparent'
  },
  wrapper: {
    position: "relative",
    backgroundColor: '#edf8f8',//theme.palette.common.lightBlack,
    // backgroundImage: 'linear-gradient(to right, rgba(255,0,0,0), rgba(83,188,188,1))'
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      paddingBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  }
});

function OnlineService(props) {
  const { classes } = props;
  return (
      <div className={classNames("md-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" >
            <Card
              className={classes.card}
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={12} style={{padding:'50px 0px'}}>
                  <Typography
                        style={{textAlign:'center', color:'#333333',fontFamily:'sans-serif'}}
                        variant="h4"
                    >
                    <strong>Accede a nuestros servicios online</strong>
                    </Typography>
                  </Grid>
                    <Grid item xs={12}  md={12}>
                    <Hidden smUp><iframe width={'100%'} title="Ultima enseñanza" height={300} src="https://www.youtube.com/embed/0NUYR7j5FXU" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></Hidden>
                    <Hidden xsDown ><iframe width={'100%'} title="Ultimo servicio"  height={415} src="https://www.youtube.com/embed/0NUYR7j5FXU" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></Hidden>
                    </Grid>

                </Box>
              </div>
            </Card>
          </Box>
        </div>
      </div>
  );
}

OnlineService.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(OnlineService)
);
