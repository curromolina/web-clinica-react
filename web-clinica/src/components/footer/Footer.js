
import React from 'react';
 
class Footer extends React.Component {
  render() {
    return (
  		<footer id="footer">
				<div className="top-footer">
					<div className="container">
						<div className="row">
							<div className="col-xs-6 text-left">
								<a href="#banner" aria-label="logo"><img src="img/footer-logo.webp" alt="logo" className="img-responsive"></img></a>
								<div className="col-xs-6 text-right">
									<div className="info-sec">
										<p className="social-icon">
											<a className="social-cont" href="https://www.facebook.com/Centro-Veterinario-VetCantos-708371386020661/" aria-label="rrss" target="_blank"><span className="fa fa-facebook"></span></a>
											<a className="social-cont" href="https://www.instagram.com/centroveterinariovetcantos/?hl=es" aria-label="rrss" target="_blank"><span className="fa fa-instagram"></span></a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="barraaceptacion">
						<div className="inner">
							Este sitio web utiliza cookies para que usted tenga la mejor experiencia de usuario. Si continúa navegando está dando su consentimiento para la aceptación de nuestra política de cookies, pinche el enlace para mayor información.
							<a href="#" aria-label="cookies" className="ok"><b>Aceptar</b></a>
							<a href="#modal-cookies" aria-label="info" data-toggle="modal" className="info"><b>Más información</b></a>
						</div>
					</div>
					<div className="footer-line">
						<div className="container">
							<div className="row">
								<div className="col-md-6 text-left">
									<a href="#modal-legal" aria-label="legal" data-toggle="modal">Avisos Legales y Política de Privacidad</a>
									<a href="#modal-cookies" aria-label="legal" data-toggle="modal">Política de cookies</a>
								</div>
								<div className="col-md-6 text-right">
									<p>Diseño y programación: <a href="mailto:fmolinacdev@gmail.com" aria-label="autor">Fmolina</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
  }
}

export default Footer;
