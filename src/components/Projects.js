import { Container,Row,Col, Tab } from "react-bootstrap"

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
                title:"Aplicacion socket",
                description:"Chat con node en tiempo real",
                imgUrl: ProjImg3,
            },
        
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2> Proyectos</h2>
                    <p> descripcion</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Seleciona 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Selecciona 2</Nav.Link>
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
                                    prokects.map((project,index)=>{
                                        return(
                                            <p>{project.title}</p>
                                        )
                                    })
                                }
                            </Row>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Descripcion</Tab.Pane>
                        <Tab.Pane eventKey="Third">descripcion </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                    </Row>
            </Container>
        </section>
    );
}