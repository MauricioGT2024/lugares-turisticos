import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Fiambala.css";
import PageTransition from "../PageTransition/PageTransition";

const FiambalaDetails = () => {
  const locations = [
    {
      imgSrc: "img/Fiambala/Duna Mágica de Fiambalá.webp",
      title: "Duna Magica De Fiambala",
      description:
        "La Duna Mágica de Fiambalá es una extensa duna de arena ubicada en el desierto de Fiambalá, en la provincia de Catamarca, Argentina. Es conocida por sus impresionantes formaciones de arena que crean un paisaje casi surrealista, además de su relevancia como destino turístico y lugar de eventos como el Dakar Rally.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1810873.832820964!2d-69.91602560625!3d-27.566763399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e32e507f9d14b%3A0x1c0a5f6153489121!2sDuna%20M%C3%A1gica!5e0!3m2!1ses-419!2sar!4v1725204852483!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/Fiambala/Museo del Hombre.webp",
      title: "Museo del Hombre",
      description:
        "El Museo del Hombre de Fiambalá es un museo que Se centra en la preservación y exhibición de la cultura y el patrimonio de la región, destacando elementos de la vida cotidiana, la historia y las tradiciones de las comunidades locales. Además, el museo muestra artefactos arqueológicos y objetos relacionados con la vida en el desierto de Fiambalá.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56527.4725187543!2d-67.67387397832032!3d-27.68741379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e305f186c9675%3A0xed67e418f8122e17!2sMuseo%20del%20Hombre!5e0!3m2!1ses-419!2sar!4v1725208727019!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/Fiambala/Dunas De Fiambala.webp",
      title: "Dunitas",
      description:
        "Las dunitas de Fiambalá son formaciones rocosas compuestas principalmente de dunita, una roca ígnea ultramáfica rica en olivino. Se encuentran en la región de Fiambalá, en la provincia de Catamarca, Argentina. Estas formaciones tienen importancia geológica y mineralógica, ya que la dunita es un tipo de roca clave en el estudio de los procesos de formación del manto terrestre.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56527.4725187543!2d-67.67387397832032!3d-27.68741379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e317980d7154f%3A0x8ea240f0ce20b7f1!2sDunitas!5e0!3m2!1ses-419!2sar!4v1725208661767!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/Fiambala/Piedras talladas de Fiambala.webp",
      title: "Piedras talladas",
      description:
        "Las piedras talladas de Fiambalá son un conjunto de rocas esculpidas ubicadas en la región de Fiambalá, Argentina. Estas piedras presentan grabados y figuras que se cree que tienen un origen prehispánico, relacionadas con culturas antiguas que habitaron la zona. Las tallas suelen representar motivos zoomorfos, geométricos y antropomórficos, y son consideradas un importante patrimonio arqueológico, ofreciendo información sobre las creencias y la vida cotidiana de las sociedades que las crearon.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56567.25703381668!2d-67.75809627832028!3d-27.610465999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e3559a28b96ff%3A0x5d6822ee6a832118!2sPiedras%20talladas!5e0!3m2!1ses-419!2sar!4v1725211154987!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/Fiambala/Termas de Fiambala.webp",
      title: "Termas de Fiambalá",
      description:
        "Las Termas de Fiambalá son un complejo de aguas termales conocidas por sus propiedades curativas y terapéuticas. Están situadas en un entorno desértico y montañoso, ofreciendo impresionantes vistas naturales.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56498.95374376925!2d-67.62239257832026!3d-27.742451399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e2523d2348297%3A0xeba404dd89c8abae!2sTermas%20de%20Fiambala!5e0!3m2!1ses-419!2sar!4v1725208627514!5m2!1ses-419!2sar",
    },
  ];

  return (
    <PageTransition>
      {" "}
      <div className="fiambala-details">
        <h2 className="page-title">Descubre Fiambalá</h2>
        <TransitionGroup className="fiambala-container">
          {locations.map((location, index) => (
            <CSSTransition
              key={index}
              timeout={500}
              classNames="card"
              appear={true}
            >
              <div className="custom-card">
                <img
                  src={location.imgSrc}
                  alt={location.title}
                  className="custom-card-img"
                />
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
    </PageTransition>
  );
};

export default FiambalaDetails;
