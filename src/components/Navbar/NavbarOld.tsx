import React from 'react';
import {
Nav, 
Bars,
NavMenu, 
AnchorNav,
NavBtnAnchor
} from './NavbarElements';

export const Navbar = () => {
return (
	<>
	<Nav>
		<Bars /> 
		<NavMenu>
			<AnchorNav href="#inicio">Inicio</AnchorNav> 
			<AnchorNav href="#galeria">Galeria</AnchorNav> 
			<AnchorNav href="#plano">Plano</AnchorNav> 
			<AnchorNav href="#ubicacion">Ubicacion</AnchorNav>   
			<NavBtnAnchor href="#formulario">Contacto</NavBtnAnchor>
		</NavMenu>   
	</Nav>
	</>
);
};

export default Navbar;