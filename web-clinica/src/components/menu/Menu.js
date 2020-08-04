
import React from 'react';

import logo from '../../text.webp';

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="col-md-12">
						<div className="navbar-header">
							<button aria-label="Barra de navegacion" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#"><img src={logo} alt="logo texto" className="img-responsive"></img></a>
						</div>
						<div className="collapse navbar-collapse navbar-right" id="myNavbar">
							<ul className="nav navbar-nav">
								<li className="active"><a href="#banner" aria-label="secciones">Inicio</a></li>
								<li className=""><a href="#service" aria-label="secciones">Servicios</a></li>
								<li className=""><a href="#about" aria-label="secciones">Nosotros</a></li>
								<li className=""><a href="#clinic" aria-label="secciones">La clínica</a></li>
								<li className=""><a href="#contact" aria-label="secciones">Contacto</a></li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		)
  }
}

export default Menu;
