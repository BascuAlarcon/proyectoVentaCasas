import React from "react";
import {
  Box  
} from "./FooterStyles";
  
export const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-30px",
                   paddingTop: "10px" }}>
        Almirante Gerken 743 Lote n° 20, Quilpué
      </h1> 
      <div className="divContactoFooter">
        <h4 className="textContactoFooter">clauvalmon@gmail.com</h4>
        <h4 className="textContactoFooter">+56 9 5862 6642</h4>
      </div>
      <div className="divPoliticasFooter">
        <h4 className="textPoliticasFooter">Politicas de Privacidad</h4>
        <h4 className="textPoliticasFooter">@Copyright</h4>
      </div>
    </Box>
  );
};
export default Footer;