import { Parallax  } from "react-parallax";
import {
    Typography,
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



export default function FirstSection () {
    return (
        <div style={styles}>
            <Parallax 
                style={{height:'100%',marginTop:'80px'}} 
                bgImage={`${process.env.PUBLIC_URL}/images/logged_out/iglesia1.jpg`} 
                strength={500}
                bgImageAlt={"Bienvenido a Comunidad Cristiana Casa Luz"}
                renderLayer={() => (
                <div
                    style={{
                        position: 'absolute',
                        background: 'rgba(0, 0, 0,0.5)',
                        width:'100%',
                        height: '100%',
                    }}
                />
            )}
            >
                <div style={{ height: '100vh' }}>
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
        </div>
    );
}
  