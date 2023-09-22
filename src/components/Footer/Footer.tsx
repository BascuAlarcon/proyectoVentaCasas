import React from "react";
import {
  Box  
} from "./FooterStyles";
import { Link } from "react-router-dom";
  
export const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "white", 
                   textAlign: "center", 
                   marginTop: "-10px",
                   paddingTop: "10px" }}>
        <a href="https://bascualarcon.github.io/proyectoVentaCasas/#" className='anchorWithoutStyle'>Inmobiliaria CV</a> 
      </h1> 
      <div className="divContactoFooter">
        <h4 className="textContactoFooter">clauvalmon@hotmail.com</h4>
        <h4 className="textContactoFooter">+56 9 4553 5991</h4>
      </div>
      <div className="divPoliticasFooter">
        <div className="divContainerTextFooterPoliticas"><a className="anchorContainerFooterPoliticas" href="https://bascualarcon.github.io/proyectoVentaCasas/politicas/#privacidad"><p className="textPoliticasFooter">Politicas de Privacidad</p></a></div>
        <div className="divContainerTextFooterPoliticas"><a className="anchorContainerFooterPoliticas" href="https://bascualarcon.github.io/proyectoVentaCasas/politicas/#privacidad"><p className="textPoliticasFooter">@Copyright</p></a></div>
      </div>
    </Box>
  );
};
export default Footer;