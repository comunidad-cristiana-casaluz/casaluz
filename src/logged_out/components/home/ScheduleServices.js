import React from "react";
import {
  Typography,
  isWidthUp,
  GridListTile,
  GridListTileBar
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Carousel from 'react-grid-carousel'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    onHoverCss: {
      "&:hover": {
        background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        borderRadius:'0px 0px 6px 6px'

      }
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
      marginBottom:'4px',
      
    },
    titleBar: {
        background: 'transparent'
    },
    wraper : {
      backgroundColor: '#edf8f8',
      padding:'80px 0px'
    },
    insideStyles: {
      background: 'rgba(255, 255, 255, 0)',
      color: 'white',
      padding: 20,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    },
    card: {
      fontFamily: "sans-serif",
      textAlign: "center"
    },
}));


const tileData = [
    {   
        img: "/images/iglesia_servicio.jpg",
        title: "Servicios centrales",
        body: 'Domingos 11:00 p.m.'
    },
    {   
        img: "/images/oracion.jpg",
        title: "Tiempo de oracion Shajah Online",
        body: 'Martes 8:00 p.m.'
    },
    {   
        img: "/images/jovenes.jpg",
        title: "Reunión de jovenes",
        body: 'Sabados 9:30 p.m.'
    },
    {   
        img: "/images/radicales.jpg",
        title: "Radicales",
        body: 'Sabados 7:00 p.m.'
    },
    {   
        img:  "/images/red.jpg",
        title: "RED",
        body: 'Sabados 5:30 p.m..'
    },
    {   
        img: "/images/niños/niños3.jpg",
        title: "Luz Kids",
        body: 'Sabados 11:00 a.m.'
    }
]

export default function ScheduleServices(props) {
  const { width } = props;
  const classes = useStyles();
  return (
    <div className={classes.wraper} >
        <div style={{textAlign:'center'}}>
            <Typography
                style={{padding:'20px 0px',marginBottom:"10px", color:'#333333',fontFamily:'sans-serif'}}
                variant={isWidthUp("lg", width) ? "h2" : "h3"}
            >
            Nuestros servicios
            </Typography>
        </div>
        
        <Carousel cols={3} rows={1} gap={20} loop autoplay={7000} >
            {tileData.map((tile) =>(
                <Carousel.Item key={tile.img}>
                    <GridListTile  style={{listStyle:'none'}}>
                        <img width="100%" src={`${process.env.PUBLIC_URL + tile.img}`} alt={tile.title} />
                         <GridListTileBar
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            className={classes.onHoverCss}
                            style={{height:'30%'}}
                            title= {<Typography variant='h4'>{tile.title}</Typography>}
                            subtitle={<Typography variant='h5'>{tile.body}</Typography>}
                        /> 
                    </GridListTile>
              </Carousel.Item>
            ))

            }
        </Carousel>
    </div>
 );
}

