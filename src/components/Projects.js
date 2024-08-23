import { Container,Row,Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard";

import ProjImg1 from "../assets/img/Proyecto1.png";
import ProjImg2 from "../assets/img/Proyecto2.png";
import ProjImg3 from "../assets/img/navicon.png";
import Proj2Img1 from "../assets/img/imgUtn/Cimage.jpeg";
import Proj2Img2 from "../assets/img/imgUtn/Robocodeimg.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = ()=>{
    const projects=[
        
            {
                title:"Ecommerce",
                description:"Ecommerce para prueba técnica",
                imgUrl: ProjImg1,
            },
            {
                title:"Ecommerce",
                description:"Ecommerce para practica profesionalizante",
                imgUrl: ProjImg2,
            },
            {
                title:"Proyecto integrador Node.js",
                description:"Pagina web Funkoshop",
                imgUrl: ProjImg3,
            },
        
    ]
    const projects2=[
        
        {
            title:"Proyecto Funciones C++",
            description:"Funciones  en C++",
            imgUrl: Proj2Img1,
        },
        {
            title:"Proyecto Robocode",
            description:"Trabajo practico(En proceso)",
            imgUrl: Proj2Img2,
        },
        
    
]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>  
                    { ({ isVisible}) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": "" }>
                    <h2> Proyectos</h2>
                   
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Paginas webs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Proyectos UTN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">
                     Seleciona 3
                    </Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first" >
                            <Row>
                                {
                                    projects.map((project,index)=>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project} />
                                        )
                                    })
                                }
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second"><Row>
                                {
                                    projects2.map((project,index)=>{
                                        return(
                                            <ProjectCard
                                            key={index}
                                            {...project} />
                                        )
                                    })
                                }
                            </Row></Tab.Pane>
                        <Tab.Pane eventKey="Third">descripcion </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                    </Row>
            </Container>
          
        </section>
    );
}