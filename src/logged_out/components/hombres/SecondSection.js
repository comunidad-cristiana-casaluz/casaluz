import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Divider,
  Hidden
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
    bigBox: {
        height:'170px',
        marginTop:'-100px',
        backgroundColor:'#F4F4F4'
    },
    smallBox : {
        height:'250px',
        marginTop:'-100px',
        backgroundColor:'#F4F4F4'
    },
    content: {
        paddingTop:'100px',
        maxWidth: '50em',
        margin: '0 auto',
        transform: 'skewY(-3deg)',
    }
}));

export default function SecondSection() {
    const classes = useStyles();
    return (
        <div >
            <Grid container spacing={7} className={classes.diagonalBox}>
                <Grid item xs={9} sm={6} md={5}  lg={5} className={classes.content} >
                    <Typography style={{textAlign:'center', margin:'auto'}} variant="subtitle1" paragraph  gutterBottom >
                     SObre nosotros que hacemos etc: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident
                    </Typography>
                    <div style={{margin:'40px', marginBottom:'0px'}}>
                        <Divider style={{margin:'auto', maxWidth:'30%' }} />
                    </div>
                </Grid>
            </Grid>
            <Hidden smUp><Grid container  className={classes.bigBox} spacing={7} /></Hidden>
            <Hidden xsDown><Grid container className={classes.smallBox} spacing={7} /></Hidden>
            
            <Grid container spacing={10}  style={{ margin:'auto', backgroundColor:'#61CE70'}}>
                <Grid item xs={9} sm={9} md={9}  lg={6} style={{margin:'auto', textAlign:'center'}} >
                    <div style={{padding:"50px 40px"}}>
                        <Typography style={{color: 'white', margin:'auto'}} variant="h4" paragraph  gutterBottom >
                            NUESTRAS REUNIONES
                        </Typography>
                        <Typography variant="body1" style={{color: 'white'}}> 
                            Suscribete a nuestro canal
                        </Typography>
                    </div>
                    <iframe width={560} height={315} title="Reunión de hombres" src="https://www.youtube.com/embed/0NUYR7j5FXU" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    
                </Grid>
            </Grid>
        </div>
    )
}