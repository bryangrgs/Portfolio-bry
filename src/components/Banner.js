import {Container, Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import LogoPortfolio from "../assets/img/LogoPortfolio.png";
import {useState,useEffect} from 'react';

export const Banner = ()=>{
    const[loopNum, setLoopNum]=useState(0);
    const[eliminado, esEliminado]=useState(false);
    const paraRotar=["Desarrollador web","Diseñador web","backend developer"]
    const[texto,cambiarTexto]=useState('');
    const [delta , setDelta]= useState(300- Math.random()*100);
    const periodo= 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();

        },delta)
        return()=>{clearInterval(ticker)};
    },[texto])

    const tick = ()=>{
        let i = loopNum % paraRotar.length;
        let fullText= paraRotar[i];
        let updatedText = eliminado ? 
        fullText.substring(0, texto.length -1) : 
        fullText.substring(0,texto.length + 1);
        cambiarTexto(updatedText);

        if(eliminado){
            setDelta(prevDelta => prevDelta/2)

        }
        if(!eliminado && updatedText === fullText){
           esEliminado(true);
           setDelta(periodo);
        }else if(esEliminado && updatedText === '' ){
            esEliminado(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Bienvenido a  mi portafolio</span>
                        <h1>{`Hola soy Bryan Georges `}<span className="wrap">{texto}</span></h1>
                        <p>Desarrollador</p>
                        <button onClick={()=> console.log('Conectado')}>Contactame <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={LogoPortfolio} alt="Headder IMG"/>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}