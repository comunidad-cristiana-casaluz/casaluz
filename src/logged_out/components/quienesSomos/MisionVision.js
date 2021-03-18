import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    diagonalBox: {
        marginTop: '-5%',
        backgroundColor: '#F4F4F4',
        padding:'40px 40px',
        transform: 'skewY(3deg)',
        position: 'relative',
        "&:before": {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                backgroundImage: 'linear-gradient(45deg, #654ea3, #eaafc8)', 	
                transform: 'skewY(3deg)'
        }
    },
    content: {
        maxWidth: '50em',
        margin: '0 auto',
        transform: 'skewY(-3deg)'
    }
}));

const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";


export default function MisionVision() {
    const classes = useStyles();
    return (
        <div >
            <Grid container spacing={7} className={classes.diagonalBox}>
                <Grid item xs={9} sm={6} md={5}  lg={5} className={classes.content} >
                    <Typography style={{textAlign:'center', margin:'auto'}} variant="subtitle1" paragraph  gutterBottom >
                     VERSICULO: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident
                    </Typography>
                    <div style={{margin:'40px'}}>
                        <Divider style={{margin:'auto', maxWidth:'30%', }} />
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={7}  style={{ padding:'40px 40px'}}>
                <Grid item xs={9} sm={6} md={5}  lg={5} style={{margin:'auto'}}  >
                    <Typography style={{textAlign:'center', margin:'auto'}} variant="subtitle1" paragraph  gutterBottom >
                    MISION Y VISION: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident
                    </Typography>
                    <Typography style={{textAlign:'center', margin:'auto',paddingTop:'20px', color:'red'}} variant="subtitle1" paragraph  gutterBottom >
                        Pastores Sebastian y Nancy Sanchez 
                    </Typography>
                </Grid>
                <Grid item xs={9} sm={6} md={5}  lg={5} style={{margin:'auto'}}  >
                    <img style={{borderRadius:'6px 6px 0px 0px'}} width="100%" src={image1} alt="Pastores" />
                </Grid>
            </Grid>
        </div>
    )
}