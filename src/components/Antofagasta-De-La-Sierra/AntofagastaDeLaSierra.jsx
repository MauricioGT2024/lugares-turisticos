import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import "./AntofagastaDeLaSierra.css";

function Card({ imgSrc, title, description, mapSrc }) {
	return (
		<div className="card">
			<div className="card-img-container">
				<img src={imgSrc} alt={title} className="card-img" />
			</div>
			<div className="card-content">
				<h2 className="card-title">{title}</h2>
				<p className="card-description">{description}</p>
				<div className="card-map">
					<iframe
						src={mapSrc}
						title={`Ubicación de ${title}`}
						className="card-map-iframe"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	imgSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	mapSrc: PropTypes.string.isRequired,
};

function AntofagastaDeLaSierraDetails() {
	const locations = [
		{
			imgSrc: "img/Antofagasta-de-la-Sierra/Campo de Piedra Pómez.jpg",
			title: "Campo De Piedra Pómez",
			description:
				"El Área natural protegida Campo de Piedra Pómez es un área natural protegida que se encuentra en el departamento Antofagasta de la Sierra, en la provincia de Catamarca, Argentina",
			mapSrc:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28534.426449338745!2d-67.53326538916018!3d-26.62275079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a00f5e4e4c8a27%3A0xa5f6b3bd0e5a5de2!2sCampo%20De%20Piedra%20Pomez!5e0!3m2!1ses-419!2sar!4v1725376807406!5m2!1ses-419!2sar",
		},
		{
			imgSrc: "img/Antofagasta-de-la-Sierra/Cerro Galán.jpg",
			title: "Cerro Galán",
			description:
				"El Cerro Galán, también llamado volcán Galán, es una caldera volcánica con un domo resurgente que forma un cerro en su interior ubicado en el departamento Antofagasta de la Sierra, provincia de Catamarca,",
			mapSrc:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14354.262434370576!2d-66.87696675414651!3d-25.916646886247985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941e4c37937b9115%3A0xc0ff834afce1922d!2sCerro%20Gal%C3%A1n!5e0!3m2!1ses-419!2sar!4v1725376887732!5m2!1ses-419!2sar",
		},
		{
			imgSrc: "img/Antofagasta-de-la-Sierra/Volcan Antofagasta.jpg",
			title: "Volcan Antofagasta",
			description:
				"Antofagasta es un volcán de unos 3.495 m s. n. m. de forma de cono de ceniza, se ubica a unos 8 km al sur de la localidad de Antofagasta de la Sierra, en la Provincia de Catamarca, Argentina",
			mapSrc:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.0952313495295!2d-67.41382642511465!3d-26.12843776089156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a07f61bf34fb6f%3A0x1efe3b302bf40c18!2sVolcan%20Antofagasta!5e0!3m2!1ses-419!2sar!4v1725376916627!5m2!1ses-419!2sar",
		},
		{
			imgSrc: "img/Antofagasta-de-la-Sierra/Salar de Antofalla.jpg",
			title: "Salar de Antofalla",
			description:
				"El salar de Antofalla es un gran salar o desierto de sal que se encuentra en el sector de la Puna de Atacama correspondiente a la provincia de Catamarca, departamento Antofagasta de la Sierra.",
			mapSrc:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14378.623777172372!2d-67.72085535428336!3d-25.71581315550718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a0befe83d7e133%3A0xc9f31f3b8cf9983b!2sSalar%20de%20Antofalla!5e0!3m2!1ses-419!2sar!4v1725376967420!5m2!1ses-419!2sar",
		},
		{
			imgSrc: "img/Antofagasta-de-la-Sierra/Museo del Hombre.jpg",
			title: "Museo del Hombre",
			description:
				"El Museo del Hombre de Antofagasta de la Sierra es un museo que se centra en la preservación y exhibición de artefactos y objetos relacionados con la cultura y la historia de los pueblos originario de la región andina.",
			mapSrc:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.221891661414!2d-67.40956772511767!3d-26.05900375807516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a0806c629be297%3A0xbb6eddd4f4813919!2sMuseo%20del%20Hombre!5e0!3m2!1ses-419!2sar!4v1725377008704!5m2!1ses-419!2sar",
		},
		{
			imgSrc: "img/Antofagasta-de-la-Sierra/salar del Hombre Muerto.jpg",
			title: "Salar del Hombre Muerto",
			description:
				"El salar del Hombre Muerto está ubicado en el sur de la Puna de Atacama sobre el límite septentrional y occidental de la provincia de Catamarca con la provincia de Salta, en Argentina. Se encuentra en el departamento Antofagasta de la Sierra.",
			mapSrc:
				"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14422.621447897041!2d-67.08005295453079!3d-25.349343300071386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941e0c20a11a0ccb%3A0x4a701e84c897a0df!2sSalar%20del%20Hombre%20Muerto!5e0!3m2!1ses-419!2sar!4v1725377046161!5m2!1ses-419!2sar",
		},
	];

	return (
		<div className="antofagasta-details">
		  <h2 className="page-title">Descubre Antofagasta de la Sierra</h2>
		  <TransitionGroup className="antofagasta-container">
			{locations.map((location, index) => (
			  <CSSTransition
				key={index}
				timeout={500}
				classNames="card"
				appear={true}
			  >
				<div className="custom-card">
				  <img src={location.imgSrc} alt={location.title} className="custom-card-img" />
				  <div className="custom-card-body">
					<h5 className="custom-card-title">{location.title}</h5>
					<p className="custom-card-text">{location.description}</p>
					<iframe
					  className="custom-map-iframe"
					  src={location.mapSrc}
					  title={location.title}
					  allowFullScreen
					></iframe>
				  </div>
				</div>
			  </CSSTransition>
			))}
		  </TransitionGroup>
		</div>
	  );
	};


export default AntofagastaDeLaSierraDetails;
