import "./CatamarcaDetails.css"; // Asegúrate de tener los estilos correctos

function CatamarcaDetails() {
  const locations = [
    {
      imgSrc:
        "img/San Fernando Del Valle De Catamarca/Gruta de la Virgen del Valle.jpg",
      alt: "Gruta de la Virgen del Valle",
      title: "Gruta de la Virgen del Valle",
      description:
        "El Complejo Gruta Virgen del Valle es un centro religioso y turístico Incluye una gruta dedicada a la Virgen del Valle, patrona de la provincia, y un conjunto de instalaciones que comprenden capillas, áreas de oración, y espacios para la peregrinación. Es un importante sitio de devoción y atracción para visitantes y fieles.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224679.84862245177!2d-65.944013521875!3d-28.370256435358243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9424264fb5a448e3%3A0xae112f88ce456aa9!2sGruta%20de%20la%20Virgen%20del%20Valle!5e0!3m2!1ses-419!2sar!4v1725200621926!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/San Fernando Del Valle De Catamarca/Dique El Jumeal.jpg",
      title: "Dique El Jumeal",
      description:
        "es un punto panorámico en Catamarca, Argentina, que ofrece vistas impresionantes del paisaje circundante, incluyendo montañas y valles. Es un lugar ideal para el turismo, la fotografía y el disfrute de la naturaleza, atrayendo tanto a visitantes como a locales.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224679.84869732868!2d-65.9440135!3d-28.3702564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9424287e17555d0f%3A0xf5cff60acb642953!2sDique%20El%20Jumeal!5e0!3m2!1ses-419!2sar!4v1725200893912!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/San Fernando Del Valle De Catamarca/Dique Las Pirquitas.jpg",
      title: "Dique Las Pirquitas",
      description:
        "es un punto turístico en Catamarca, Argentina, conocido por su espectacular vista de la formación montañosa que se asemeja a un gigante recostado. Es un lugar popular para el senderismo y la fotografía, ofreciendo un entorno natural impresionante y una experiencia única para los visitantes.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224679.84869732868!2d-65.9440135!3d-28.3702564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942418a6fab81873%3A0x8f5d82be3622a341!2sDique%20Las%20Pirquitas.!5e0!3m2!1ses-419!2sar!4v1725201057665!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/San Fernando Del Valle De Catamarca/El Rodeo.jpg",
      title: "El Rodeo",
      description:
        "El Rodeo es una importante villa turística de la provincia de Catamarca, Argentina. Está situada en el Departamento Ambato, al pie de la sierra de Ambato, a 1.250 m s. n. m. y a solo 39 km de la capital provincial.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14063.2499710228!2d-65.87580297189504!3d-28.213008923482572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9426a0a3432880cf%3A0xa6e667a7b0e9bb24!2sEl%20Rodeo%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1725211988093!5m2!1ses-419!2sar",
    },
    {
      imgSrc:
        "img/San Fernando Del Valle De Catamarca/Catedral Basílica de Nuestra Señora del Valle.jpg",
      title: "Catedral Basílica de Nuestra Señora del Valle",
      description:
        "La Catedral Basílica de Nuestra Señora del Valle es una iglesia conocida por su arquitectura neoclásica y barroca. Es un importante centro de culto, destacada por ser el lugar de veneración de la Virgen del Valle, patrona de la provincia.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224679.84862245177!2d-65.944013521875!3d-28.370256435358243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942428c0a154ce0d%3A0xd345b1b18b6bb281!2sCatedral%20Bas%C3%ADlica%20de%20Nuestra%20Se%C3%B1ora%20del%20Valle!5e0!3m2!1ses-419!2sar!4v1725200667289!5m2!1ses-419!2sar",
    },
    {
      imgSrc:
        "img/San Fernando Del Valle De Catamarca/La Fiesta Nacional e Internacional del Poncho.jpg",
      title: "La Fiesta Nacional e Internacional del Poncho",
      description:
        "es un atractivo turístico en Catamarca, Argentina, que ofrece vistas panorámicas de los paisajes montañosos y valles circundantes. Es un lugar ideal para detenerse y disfrutar de la belleza natural de la región, convirtiéndose en un punto popular para turistas y fotógrafos.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224679.84862245177!2d-65.944013521875!3d-28.370256435358243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94242fea64817755%3A0x12a068eda95f2dce!2sFiesta%20Nacional%20e%20Internacional%20Del%20Poncho!5e0!3m2!1ses-419!2sar!4v1725200736641!5m2!1ses-419!2sar",
    },

    {
      imgSrc: "img/Valle-Chico/Capital.jpg",
      title: "Valle-Chico",
      description:
        " es un desarrollo urbanístico en Catamarca, Argentina, que combina áreas residenciales, comerciales y recreativas. Este proyecto busca ofrecer una calidad de vida integral a sus habitantes, promoviendo espacios verdes y servicios modernos, lo que lo convierte en un lugar atractivo para vivir y visitar.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28050.509401957726!2d-65.8401143117459!3d-28.500208897152085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942429b27148f9a9%3A0x22202ae96e088a77!2sValle%20Chico%2C%20K4700%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1727449819166!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/Valle-Chico/Primera Plaza Valle Chico.jpg",
      title: "Primera Plaza Valle Chico",
      description:
        "Primera Plaza Valle Chico es un centro comercial en Catamarca, Argentina, que ofrece una variedad de tiendas, restaurantes y servicios, convirtiéndose en un punto de encuentro y entretenimiento para la comunidad local.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112237.01694606073!2d-65.97710995664063!3d-28.4672938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942429d4ec06d145%3A0x49b74ceb484ce973!2sPrimera%20Plaza%20Valle%20Chico!5e0!3m2!1ses-419!2sar!4v1727446018206!5m2!1ses-419!2sar",
    },
    {
      imgSrc:
        "img/San Fernando Del Valle De Catamarca/Parque de Los Vientos.jpg",
      title: "Parque de los Vientos",
      description:
        "El Parque de los Vientos es un parque ubicado en San Fernando del Valle de Catamarca, Argentina. Destaca por su diseño paisajístico, espacios verdes y áreas recreativas, y es conocido por su ambiente tranquilo y agradable para el esparcimiento.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224679.84869732868!2d-65.9440135!3d-28.3702564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94242945140abdc1%3A0x97c25d368732db3!2sParque%20de%20Los%20Vientos!5e0!3m2!1ses-419!2sar!4v1725200958395!5m2!1ses-419!2sar",
    },
  ];

  return (
    <div className="catamarca-details">
      <h2>Descubre Catamarca</h2>
      <div className="catamarca-container">
        {locations.map((location) => (
          <div className="catamarca" key={location.title}>
            <img src={location.imgSrc} alt={location.title} className="catamarca-img" />
            <div className="catamarca-content">
              <h3 className="catamarca-title">{location.title}</h3>
              <p className="catamarca-description">{location.description}</p>
              <a href={location.mapSrc} target="_blank" rel="noopener noreferrer">
                <iframe className="map-iframe" src={location.mapSrc} title={location.title} allowFullScreen></iframe>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatamarcaDetails;
