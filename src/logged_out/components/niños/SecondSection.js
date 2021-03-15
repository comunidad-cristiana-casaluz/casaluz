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
            
            <Grid container spacing={10}  style={{ backgroundColor:'#61CE70'}}>
                <Grid item xs={10} sm={10} md={10}  lg={10} style={{margin:'10px auto 100px auto', textAlign:'center'}} >
                    <div style={{padding:"50px 40px"}}>
                        <Typography style={{color: 'white', margin:'auto'}} variant="h2" paragraph  gutterBottom >
                            NUESTRAS REUNIONES
                        </Typography>
                        <Typography variant="body1" style={{color: 'white'}}> 
                            Suscribete a nuestro canal
                        </Typography>
                        <Typography variant="body2" style={{color: 'white'}}> 
                            Nos reunimos todos los sabados a las 10 a.m. via fb
                        </Typography>
                    </div>   
                    <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmisionluzparalasnaciones%2Fvideos%2F257417065993662%2F&show_text=true&width=560" width={560} height={429} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />

                    {/* <iframe title="Ultima reunión de Niños" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcaminodevida%2Fvideos%2F287372052753041%2F&show_text=true&width=560" width={560} height={429} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /> */}
                </Grid>
            </Grid>
        </div>
    )
}