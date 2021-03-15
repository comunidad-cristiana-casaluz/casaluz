import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-grid-carousel'
import {
    Grid,
    Typography,
  } from "@material-ui/core"

import ZoomImage from "../../../shared/components/ZoomImage"

const tileData = [
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    },
    {   
        img: "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    }
]


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding:'20px',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    image: {
        maxWidth: "100%",
        verticalAlign: "middle",
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[4],
    },
}));

export default function PhotosSection() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={10} >
                <Grid item xs={10} sm={10} md={10}  lg={6} style={{margin:'auto', textAlign:'center'}} >
                    <div style={{padding:"40px"}}>
                        <Typography variant="h4" paragraph  gutterBottom >
                            Galeria de Fotos
                        </Typography>
                    </div>
                </Grid>
            </Grid>
            
            <Grid container >
                <Grid item xs={11} sm={11} md={11}  lg={11} style={{margin:'auto'}} >
                    <Carousel cols={3} rows={2} gap={30} loop autoplay={2400} >
                        {tileData.map((tile) =>(
                            <Carousel.Item key={tile.img}>
                                <ZoomImage
                                    style={{marginTop:'4px'}}
                                    src={'https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001'}
                                    className={classes.image}
                                    alt="header example"
                                    width="100%"
                                />
                        </Carousel.Item>
                        ))}
                    </Carousel>
                </Grid>
            </Grid>
            
        
        </div>
    );
}
