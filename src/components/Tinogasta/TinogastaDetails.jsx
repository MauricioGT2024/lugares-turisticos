import './Tinogasta.css';

const TinogastaDetails = () => {
  const locations = [
    {
      imgSrc: "img/Tinogasta/Complejo Termal La Aguadita.jpg",
      alt: "Complejo Termal La Aguadita",
      title: "Complejo Termal La Aguadita",
      description: "es un centro de relajación y bienestar en Catamarca, Argentina, que ofrece aguas termales, spa y diversas instalaciones recreativas. Es un destino popular para quienes buscan tratamientos terapéuticos y una experiencia de descanso en un entorno natural",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16752.710023847474!2d-67.66723668203443!3d-28.0298713999726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e117e2197b615%3A0xd0ba5c17a34028f7!2sComplejo%20Termal%20La%20Aguadita!5e0!3m2!1ses-419!2sar!4v1727445521377!5m2!1ses-419!2sar"
    },
    {
      imgSrc: "img/Tinogasta/Mirador Del Abaucan.jpg",
      title: "Mirador Del Abaucan",
      description:
        "es un punto panorámico en Catamarca, Argentina, que ofrece vistas impresionantes del paisaje circundante, incluyendo montañas y valles. Es un lugar ideal para el turismo, la fotografía y el disfrute de la naturaleza, atrayendo tanto a visitantes como a locales.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.2459691683907!2d-67.42854172506722!3d-28.260557597515717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969dff0079017569%3A0xd3bdac87e6d68215!2sMirador%20del%20Abauc%C3%A1n!5e0!3m2!1ses-419!2sar!4v1728744962255!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/Tinogasta/Mirador El Gigante Dormido.jpg",
      title: "El Gigante Dormido",
      description:
        "es un punto turístico en Catamarca, Argentina, conocido por su espectacular vista de la formación montañosa que se asemeja a un gigante recostado. Es un lugar popular para el senderismo y la fotografía, ofreciendo un entorno natural impresionante y una experiencia única para los visitantes.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.444906316654!2d-67.5783644250301!3d-28.0414370413072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e118b4329c729%3A0x923dbc63da48b4b2!2sMirador%20El%20Gigante%20Dormido!5e0!3m2!1ses-419!2sar!4v1727445665529!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/Tinogasta/Quebrada Las Angosturas.jpg",
      title: "Quebrada Las Angosturas",
      description:
        "es un impresionante cañón ubicado en Catamarca, Argentina. Destaca por sus formaciones rocosas y paisajes escénicos, siendo un lugar popular para el senderismo, la fotografía y el avistamiento de flora y fauna. Es un destino atractivo para los amantes de la naturaleza y la aventura.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808602.994130342!2d-70.23368350625!3d-27.704077200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e512620cf9c15%3A0xc51f1aaf13c1409c!2sQuebrada%20Las%20Angosturas!5e0!3m2!1ses-419!2sar!4v1727447105590!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/Tinogasta/Camping Santa Ana.jpg",
      title: "Camping Santa Ana",
      description:
        "es un área recreativa en Catamarca, Argentina, que ofrece espacios para acampar en un entorno natural. Equipado con servicios básicos, es un lugar ideal para disfrutar de actividades al aire libre, como senderismo, picnics y conexión con la naturaleza, atrayendo a familias y amantes del camping.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.8176210882357!2d-67.58569922451993!3d-28.06059277598192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e11aa282a8129%3A0x38bd6fb819548841!2sCamping%20Santa%20Ana!5e0!3m2!1ses-419!2sar!4v1728744742414!5m2!1ses-419!2sar",
    },
    {
      imgSrc: "img/Tinogasta/Mirador Cuesta de Zapata.jpg",
      title: "Mirador Cuesta de Zapata",
      description:
        "es un atractivo turístico en Catamarca, Argentina, que ofrece vistas panorámicas de los paisajes montañosos y valles circundantes. Es un lugar ideal para detenerse y disfrutar de la belleza natural de la región, convirtiéndose en un punto popular para turistas y fotógrafos.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.261717030212!2d-67.37429152503678!3d-27.893940834914357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9420a100709976a9%3A0x676460225a34ebf9!2sMirador%20Cuesta%20de%20Zapata!5e0!3m2!1ses-419!2sar!4v1728745166012!5m2!1ses-419!2sardepa"
      }, 
      {
      imgSrc: "img/Tinogasta/Parroquia San Juan Bautista.jpg",
      title: "Parroquia San Juan Bautista",
      description:
        "es una iglesia ubicada en Catamarca, Argentina. Este templo es un importante centro religioso y cultural para la comunidad, donde se celebran misas, eventos y actividades comunitarias. Su arquitectura y ambiente acogedor la convierten en un lugar significativo para los fieles de la zona.",
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.649942074083!2d-67.56786872502897!3d-28.06571124236247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e055473f5c7ef%3A0x3f17c6c76d3b1cfb!2sParroquia%20San%20Juan%20Bautista!5e0!3m2!1ses-419!2sar!4v1727451137108!5m2!1ses-419!2sar",
    },
  ];

  return (
    <div className="tinogasta-details">
      <h2>Descubre Tinogasta</h2>
      <div className="tinogasta-container">
        {locations.map((location, index) => (
          <div className="custom-card" key={index}>
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
        ))}
      </div>
    </div>
  );
};

export default TinogastaDetails;

