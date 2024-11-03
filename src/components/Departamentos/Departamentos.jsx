import './Departamentos.css'; // O ajusta la ruta según tu estructura

function Departamentos() {
  const departamentos = [
    
    {
      id: "catamarca",
      imgSrc: "img/San Fernando Del Valle De Catamarca/Capital.jpg",
      alt: "San Fernando Del Valle De Catamarca",
      title: "San Fernando Del Valle De Catamarca",
      description: "San Fernando del Valle de Catamarca es la capital de Catamarca, Argentina, y un centro cultural y administrativo con una rica historia y tradiciones.",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224679.84862245177!2d-65.944013521875!3d-28.370256435358243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942428bf1d0f9fcd%3A0x7e1edd4b1609861a!2sSan%20Fernando%20del%20Valle%20de%20Catamarca%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1725203961007!5m2!1ses-419!2sar",
      link: "Catamarca"
    },
    {
      id: "fiambala",
      imgSrc: "img/Fiambala/Capital.jpg",
      alt: "Fiambalá",
      title: "Fiambalá",
      description: "Es una localidad del Departamento Tinogasta en el oeste de la provincia argentina de Catamarca, y es la última ciudad que alberga la RN 60 antes de adentrarse camino a la República de Chile.",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113057.57502058668!2d-67.70636441847597!3d-27.6848736041996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e30f162b7c3bf%3A0xd70071b33b64eb44!2sFiambala%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1725204250826!5m2!1ses-419!2sar",
      link: "Fiambala"
    },
    {
      id: "tinogasta",
      imgSrc: "img/Tinogasta/Capital.jpg",
      alt: "Tinogasta",
      title: "Tinogasta",
      description: "Es una ciudad y municipio en Catamarca, Argentina, conocida por su rica historia, arquitectura colonial y atractivos naturales.",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28165.99870289708!2d-67.56607431004785!3d-28.062661988302203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e0550e252366b%3A0x2107a5bcf191ff23!2sTinogasta%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1725204422451!5m2!1ses-419!2sar",
      link: "Tinogasta"
    },
    {
      id: "antofagasta-de-la-sierra",
      imgSrc: "img/Antofagasta-de-la-Sierra/Capital.jpg",
      alt: "Antofagasta de la Sierra",
      title: "Antofagasta de la Sierra",
      description: "Antofagasta de la Sierra es la capital del departamento homónimo en la provincia de Catamarca, en plena cordillera de los Andes.",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7168.333242857714!2d-67.41152290916331!3d-26.060810470610253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a080132e06d10b%3A0x3c02f3fa338632ac!2sAntofagasta%20de%20la%20Sierra%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1725204163946!5m2!1ses-419!2sar",
      link: "Antofagasta-De-La-Sierra"
    },
  ];

  return (
    <div className="departamentos-container">
      {departamentos.map(departamento => (
        <div className={`card ${departamento.id}`} key={departamento.id}>
          <img
            src={departamento.imgSrc}
            alt={departamento.alt}
            className="card-img"
          />
          <div className="card-content">
            <h2 className="card-title">{departamento.title}</h2>
            <p className="card-description">{departamento.description}</p>
            <a href={departamento.link} target="_blank" rel="noopener noreferrer" className="card-link">Ver más</a>
            <div className="card-map">
              <iframe
                src={departamento.mapSrc}
                title={`Ubicación de ${departamento.title}`}
                className="card-map-iframe"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Departamentos;
