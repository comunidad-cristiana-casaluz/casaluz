import React from "react";
import { Parallax } from "react-parallax";
import {
    Typography,
    Hidden
  } from "@material-ui/core"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
    background: 'rgba(255, 255, 255, 0)',
    color: 'white',
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};

const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";


function MyParallax (props) {
  return (
    <Parallax bgImage={image3} strength={-100}>
            <div style={{ height: props.height }}>
                <div style={insideStyles}>
                    <Typography  style={{textAlign:'center'}} variant="h2"  >
                    <strong>Bienvenido a Casa Luz</strong> 
                    </Typography>
                    <Typography
                        variant="h4"
                        >
                        Una luz en tu familia
                        </Typography>
                </div>
            </div>
          </Parallax>
  )
}
export default function HeadSection (){
    return (
        <div style={styles}>
          <Hidden smUp>
            <MyParallax  height={500}/>
         </Hidden>
         <Hidden xsDown>
          <MyParallax  height={800}/>
         </Hidden>
        </div>
      );
} 

