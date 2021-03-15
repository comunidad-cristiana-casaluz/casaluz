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

export default function SecondSection() {
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
            <Grid container spacing={7}  style={{marginTop: '-3%',paddingLeft:'10%', paddingTop:'100px', paddingBottom:'200px', backgroundImage: "url('https://caminodevida.com/wp-content/uploads/2020/04/foto2-min.jpg')" , padding:'40px 40px'}}>
                <Grid item xs={9} sm={6} md={5}  lg={4} >
                    <Typography style={{color: 'black', margin:'auto',paddingTop:'20px'}} variant="h4" paragraph  gutterBottom >
                        NO FUIMOS DISEÑADOS PARA ESTAR SOLOS
                    </Typography>
                    <Typography style={{margin:'auto',paddingTop:'10px', color:'black'}} variant="body1" paragraph  gutterBottom >
                    Descripcion de Casas de Luz: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. velit esse proident
                    </Typography>
                    <Typography style={{margin:'auto',paddingTop:'10px', color:'black'}} variant="body1" paragraph  gutterBottom >
                    Descripcion de Casas de Luz: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident
                    </Typography>

                    
                </Grid>
            </Grid>
        </div>
    )
}