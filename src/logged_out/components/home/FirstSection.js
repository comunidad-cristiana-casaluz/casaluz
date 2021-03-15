import { Parallax } from "react-parallax";
import {
    Typography,
    Hidden,
} from "@material-ui/core";

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

const image1 =
    "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";


function MyParallax (props) {
    return (
        <Parallax style={{marginTop:'80px'}} bgImage={image1} strength={500}>
        <div style={{ height: props.height }}>
            <div style={insideStyles}>
                <Typography  style={{textAlign:'center'}} variant="h2"  >
                    Comunidad Cristiana Casa Luz 
                </Typography>
                <Typography
                    variant="h4"
                    >
                    Somos tu familia bienvenido a Casa
                    </Typography>
            </div>
        </div>
      </Parallax>
    )
}

export default function FirstSection () {
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
  