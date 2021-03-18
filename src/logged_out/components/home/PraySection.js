import { Parallax  } from "react-parallax";
import {
  Grid,
  Button,
  Typography,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
  Hidden
} from "@material-ui/core"
import createWhatsappLink from "../../../shared/functions/createWhatsappLink"
import PropTypes from "prop-types"


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
    alignItems:'center',
  },
  insideStyles : {
    background: 'rgba(255, 255, 255, 0)',
    color: 'white',
    padding: 8,
    position: "absolute",
    top: "50%",
    left: "50%",
    width: '80%',
    transform: "translate(-50%,-50%)",
    zIndex: 3,
  },

});

function PraySection (props) {
   const { classes, width } = props;
  return (
    <Parallax 
      style={{zIndex:0}}
      bgImage={`${process.env.PUBLIC_URL}/images/orando.png`}
      strength={500}
      bgImageAlt={"Bienvenido a Comunidad Cristiana Casa Luz"}
      renderLayer={() => (
        <div>
            <div
              style={{
                position: "absolute",
                background: 'rgba(83, 188, 188, 0.9)',
                top: 0,
                left: '-54px',
                bottom: 0,
                zIndex:2,
                width: '52%',
                height: '100%',
                WebkitTransform: 'skew(20deg)'
              }}
            /> 
          <div
            style={{
              position: "absolute",
              background: 'rgba(0, 0, 0,0.3)',
              top: 0,
              bottom: 0,
              width:'100%',
              height: '100%',
              zIndex:1,
            }}
          />

        </div>
          
      )}
  >
    <div style={{ height:'300px' }}>
      <div  className={classes.insideStyles}> 
            <Grid 
                container 
                className={classes.card} 
                spacing={5} 
                data-aos-delay="200"
                data-aos="zoom-in"
            >
            <Grid item xs={12} md={6} lg={6}>
              <Box mb={2}>
                <Typography
                  variant={isWidthUp("lg", width) ? "h4" : "h5"}
                >
                  Deseamos orar por ti. Envianos tu pedido de oración
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Hidden xsDown>
                <Button 
                  target="_blank"
                  variant="outlined"
                  style={{color:"#46B7B0", borderColor:"#46B7B0"}}
                  fullWidth
                  className={classes.extraLargeButton}
                  classes={{ label: classes.extraLargeButtonLabel }}
                  href= {createWhatsappLink(987207569, "Hola Comunidad Cristiana Casa Luz, quisiera que oren por mí." )}
                >
                  Enviar pedido de oración
                </Button>
              </Hidden>
              <Hidden smUp>
                <Button
                  target="_blank"
                   variant="contained" 
                  style={{color:"#53bcbc",background:'white'}}
                  fullWidth
                  className={classes.extraLargeButton}
                  classes={{ label: classes.extraLargeButtonLabel }}
                  href= {createWhatsappLink(987207569, "Hola Comunidad Cristiana Casa Luz, quisiera que oren por mí." )}
                >
                  Enviar pedido de oración
                </Button>
              </Hidden>
            </Grid>
          </Grid> 
      </div>
  </div>
  </Parallax>
  );
}
  
PraySection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(PraySection)
);
