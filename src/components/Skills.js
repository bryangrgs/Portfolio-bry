import { Container,Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/lenguajes/HTML&CSS.png";
import meter2 from "../assets/img/desarrollador-image.png";
import meter3 from "../assets/img/front-image.png";
import meter4 from "../assets/img/react-icon.png";
import meter5 from "../assets/img/lenguajes/js-image.jpg";
import meter6 from "../assets/img/lenguajes/node-image.jpg";
import meter7 from "../assets/img/lenguajes/python.png";
import meter8 from "../assets/img/lenguajes/sql.png";
import meter9 from "../assets/img/imgUtn/Cimage.jpeg";

import colorSharp from "../assets/img/color-sharp.png";

export const Skills = ()=>{
    const responsive = {
    superLargeDesktop: {
        
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1

      }
    };
    return(
        
        <section className="skill" id="skills">
            <Container>
                <Row>

                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Habilidades
                        </h2>
                        <p> Mis habilidades</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image"></img>
                                <h5>HTML&CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"></img>
                                <h5>Desarrollador</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image"></img>
                                <h5>Fronted developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image"></img>
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image"></img>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image"></img>
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image"></img>
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image"></img>
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image"></img>
                                <h5>C++</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}