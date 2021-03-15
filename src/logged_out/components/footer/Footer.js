import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Box,
  IconButton,
  withStyles,
  withWidth,
  isWidthUp,
  TextField
} from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
  footerInner: {
    backgroundColor: theme.palette.common.darkBlack,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(16),
      paddingRight: theme.spacing(16),
      paddingBottom: theme.spacing(10)
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(10),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
      paddingBottom: theme.spacing(10)
    }
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
    color: theme.palette.common.white
  },
  footerLinks: {
    marginTop: theme.spacing(2.5),
    marginBot: theme.spacing(1.5),
    color: theme.palette.common.white
  },
  infoIcon: {
    color: `${theme.palette.common.white} !important`,
    backgroundColor: "#33383b !important"
  },
  socialIcon: {
    color: theme.palette.common.white,
    // backgroundColor: "#33383b",
    borderRadius: theme.shape.borderRadius,
    // "&:hover": {
    //   backgroundColor: theme.palette.primary.light
    // }
  },
  link: {
    cursor: "Pointer",
    color: theme.palette.common.white,
    transition: transitions.create(["color"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeIn
    }),
    "&:hover": {
      color: theme.palette.primary.light
    }
  },
  whiteBg: {
    backgroundColor: theme.palette.common.white,
  }
});

const socialIcons = [
    {
      icon: (<i className="fa fa-facebook" aria-hidden="true"></i>),
      label: "Facebook",
      href: "https://www.facebook.com/misionluzparalasnaciones"
    },
    {
      icon: (<i className="fa fa-instagram" aria-hidden="true"></i>),
      label: "Instagram",
      href: "https://www.instagram.com/luzparalasnaciones1/"
    },
    {
      icon: (<i className="fa fa-youtube-play" aria-hidden="true"></i>),
      label: "Youtube",
      href: "https://www.youtube.com/channel/UCU10ULMaZ2z9AlxN-dfS_6A"
    }
  ];
function Footer(props) {
  const { classes, theme, width } = props;
  return (
    <footer>
      <div className={classes.footerInner}>
        <Grid container justify="center" spacing={isWidthUp("md", width) ? 10 : 5}>
          <Grid item xs={12} md={6} lg={5}>
            <form>
              <Box display="flex" flexDirection="column">
                <Box mb={1}>
                    <Grid container  spacing={1}>
                        <Grid item  xs={12} md={12} lg={6}>
                            <TextField
                                variant="outlined"
                                placeholder="Nombre*"
                                inputProps={{ "aria-label": "Get in Touch" }}
                                InputProps={{
                                className: classes.whiteBg
                                }}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}  >
                            <TextField
                                variant="outlined"
                                type="email"
                                placeholder="Email*"
                                inputProps={{ "aria-label": "Get in Touch" }}
                                InputProps={{
                                className: classes.whiteBg
                                }}
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12} >
                            <TextField
                                variant="outlined"
                                multiline
                                placeholder="Escríbenos un mensaje*"
                                inputProps={{ "aria-label": "Get in Touch" }}
                                InputProps={{
                                className: classes.whiteBg
                                }}
                                rows={4}
                                fullWidth
                                required
                            />
                        </Grid>

                    </Grid>
                </Box>
                <ColoredButton
                
                  className={classes.button}
                  color={theme.palette.common.white}
                  variant="outlined"
                  type="submit"
                >
                  Envíanos un mensaje
                </ColoredButton>
              </Box>
            </form>
          </Grid>
          <Grid item  xs={12} md={6} lg={5}>
            <Typography style={{textAlign:'center'}} variant="subtitle1" paragraph className="text-white">
                © 2021 Comunidad Cristiana Casa Luz  
            </Typography>
            <Typography  style={{textAlign:'center'}} variant="subtitle1" paragraph className="text-white">
                +51 965 745 299 <br/> luzparalasnacionesoquendo@gmail.com 
            </Typography>
            <Box display="flex" style={{justifyContent:'center'}}>
              {socialIcons.map((socialIcon, index) => (
                <Box key={index} mr={index !== socialIcons.length - 1 ? 1 : 0}>
                  <IconButton
                    aria-label={socialIcon.label}
                    className={classes.socialIcon}
                    href={socialIcon.href}
                  >
                    {socialIcon.icon}
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles, { withTheme: true })(Footer));
