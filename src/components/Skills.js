import { Container,Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/navicon.png";
import meter2 from "../assets/img/navicon2.png";
import meter3 from "../assets/img/navicon3.png";
import meter4 from "../assets/img/navicon.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = ()=>{
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
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
        <section className="skill" id= "skills">
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
                                <h5>Web development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image"></img>
                                <h5>Desarrollador</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image"></img>
                                <h5>fronted developer</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image"></img>
                                <h5>react</h5>
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