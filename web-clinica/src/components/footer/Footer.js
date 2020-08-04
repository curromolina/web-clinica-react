
import React from 'react';
 
class Footer extends React.Component {
  render() {
    return (
  		<footer id="footer">
				<div class="top-footer">
					<div class="container">
						<div class="row">
							<div class="col-xs-6 text-left">
								<a href="#banner" aria-label="logo"><img src="img/footer-logo.webp" alt="logo" class="img-responsive"></img></a>
								<div class="col-xs-6 text-right">
									<div class="info-sec">
										<p class="social-icon">
											<a class="social-cont" href="https://www.facebook.com/Centro-Veterinario-VetCantos-708371386020661/" aria-label="rrss" target="_blank"><span class="fa fa-facebook"></span></a>
											<a class="social-cont" href="https://www.instagram.com/centroveterinariovetcantos/?hl=es" aria-label="rrss" target="_blank"><span class="fa fa-instagram"></span></a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="barraaceptacion">
						<div class="inner">
							Este sitio web utiliza cookies para que usted tenga la mejor experiencia de usuario. Si continúa navegando está dando su consentimiento para la aceptación de nuestra política de cookies, pinche el enlace para mayor información.
							<a href="javascript:void(0);" aria-label="cookies" class="ok" onclick="PonerCookie();"><b>Aceptar</b></a> |
							<a href="#modal-cookies" aria-label="info" data-toggle="modal" class="info"><b>Más información</b></a>
						</div>
					</div>
					<div class="footer-line">
						<div class="container">
							<div class="row">
								<div class="col-md-6 text-left">
									<a href="#modal-legal" aria-label="legal" data-toggle="modal">Avisos Legales y Política de Privacidad</a>
									<a href="#modal-cookies" aria-label="legal" data-toggle="modal">Política de cookies</a>
								</div>
								<div class="col-md-6 text-right">
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
