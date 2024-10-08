import { useState,useEffect } from "react";
import {Navbar, Container,Nav} from "react-bootstrap";
import logo from '../assets/img/Portfolio-image.png';
import navIcon from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


export const NavBar = ()=> {
    
    const[enlaceActivo,cambiarEnlaceActivo]= useState('home');
    const[scroll,setScroll]=useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY > 50){
                setScroll(true);
            }else{
                setScroll(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return()=> window.removeEventListener("scroll",onScroll);
    },[])
    const onUpdateActiveLink=(value)=>{
        cambiarEnlaceActivo(value);
    }
   return(
    <Navbar  expand="lg" className={scroll ? "scrolled":""}>
    <Container>
      <Navbar.Brand href="#home">
        <img   src={logo} alt="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" > 
      <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            
          <Nav.Link href="#home" className={enlaceActivo=== 'home' ?
           'active navbar-link' : 'navbar-link' } 
           onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>

          <Nav.Link href="#skills" className={enlaceActivo === 'skills' ? 
          'active navbar-link' : 'navbar-link' }
          onClick={()=> onUpdateActiveLink('skills')}>Habilidades</Nav.Link> 

          <Nav.Link href="#projects" className={enlaceActivo === 'projects' ? 
          'active navbar-link' : 'navbar-link' }
          onClick={()=> onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
        </Nav>
        <span  className="navbar-text">
            <div className="social-icon">
                <a href="https://linkedin.com/in/bryan-georges-411989238/"><img src={navIcon} alt=""></img> </a>
                <a href="https://github.com/bryangrgs"> <img src={navIcon2} alt=""></img></a>
                <a href="https://www.instagram.com/l3ryan_georges/"><img src={navIcon3} alt=""></img></a>
               
            </div>
            <button className="vvd" onClick={()=> console.log('Conectado')}>
                <span>Contacto</span>
            </button>
        </span>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  
   ) 

}

/**  skills Lenguajes y herramientas que conozco
Proyectos Mis trabajos realizados
 detectar si el usuario se desplazo por un useState y un useEffect que deter
 mina si está desplazado o no, lo activamos una vez comience el desplazamiento
**/ 
