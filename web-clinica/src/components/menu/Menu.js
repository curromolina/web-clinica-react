
import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
				<div class="container">
					<div class="col-md-12">
						<div class="navbar-header">
							<button aria-label="Barra de navegacion" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<a class="navbar-brand" href="#"><img src="img/text.webp" alt="logo texto" class="img-responsive"></img></a>
						</div>
						<div class="collapse navbar-collapse navbar-right" id="myNavbar">
							<ul class="nav navbar-nav">
								<li class="active"><a href="#banner" aria-label="secciones">Inicio</a></li>
								<li class=""><a href="#service" aria-label="secciones">Servicios</a></li>
								<li class=""><a href="#about" aria-label="secciones">Nosotros</a></li>
								<li class=""><a href="#clinic" aria-label="secciones">La clínica</a></li>
								<li class=""><a href="#contact" aria-label="secciones">Contacto</a></li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		)
  }
}

export default Menu;
