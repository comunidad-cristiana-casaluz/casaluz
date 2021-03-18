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


  function MyParalax (props){
    return (
      <Parallax bgImage={image3} strength={-100} >
      <div style={{ height: props.height, maxHeight:'100%' }}>
          <div style={insideStyles}>
              <Typography  style={{textAlign:'center'}} variant="h2"  >
                  Comunidad Cristiana Casa Luz 
              </Typography>
              <Typography
                  variant="h4"
                  >
                  Somos tu familsdsia bienvenido a Casa
                  </Typography>
          </div>
      </div>
    </Parallax>)
  }
    

export default function HeadSection(){
    return (
        <div style={styles}>
         <Hidden smUp>
            <MyParalax  height={500}/>
         </Hidden>
         <Hidden xsDown>
          <MyParalax  height={800}/>
         </Hidden>
          
        </div>
      );
} 

