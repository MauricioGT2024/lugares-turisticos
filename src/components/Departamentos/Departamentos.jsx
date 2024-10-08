import './Departamentos.css' // O ajusta la ruta según tu estructura

function Departamentos() {
  return (
    <>
    <div className="catamarca" id="catamarca">
    <img
      src="img/San Fernando Del Valle De Catamarca/Capital.jpg"
      alt="San Fernando Del Valle De Catamarca"
      className="catamarca-img"
    />
    <div className="catamarca-content">
      <h2 className="catamarca-title">
        San Fernando Del Valle De Catamarca
      </h2>
      <p className="catamarca-description">
        San Fernando del Valle de Catamarca es la capital de Catamarca,
        Argentina, y un centro cultural y administrativo con una rica
        historia y tradiciones.
      </p>
      <button>
        <span>
          <a href="Catamarca">ver mas</a>{" "}
        </span>
      </button>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224679.84862245177!2d-65.944013521875!3d-28.370256435358243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942428bf1d0f9fcd%3A0x7e1edd4b1609861a!2sSan%20Fernando%20del%20Valle%20de%20Catamarca%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1725203961007!5m2!1ses-419!2sar"></iframe>
    </div>
  </div>
  <div className="fiambala" id="fiambala">
    <img
      src="img/Fiambala/Capital.jpg"
      alt="Fiambalá"
      className="fiambala-img"
    />
    <div className="fiambala-content">
      <h2 className="fiambala-title">Fiambalá</h2>
      <p className="fiambala-description">
        es una localidad del Departamento Tinogasta en el oeste de la
        provincia argentina de Catamarca, y es la última ciudad que alberga
        la RN 60 antes de adentrarse camino a la República de Chile.
        Fiambalá se originó a finales del siglo XVII, donde fue fundada
        oficialmente en 1701
      </p>
      <button>
        <span>
          {" "}
          <a href="Fiambala">ver mas</a>{" "}
        </span>
      </button>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113057.57502058668!2d-67.70636441847597!3d-27.6848736041996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e30f162b7c3bf%3A0xd70071b33b64eb44!2sFiambala%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1725204250826!5m2!1ses-419!2sar"></iframe>
    </div>
  </div>
  <div className="tinogasta" id="tinogasta">
    <img
      src="img/Tinogasta/Capital.jpg"
      alt="Tinogasta"
      className="tinogasta-img"
    />
    <div className="tinogasta-content">
      <h2 className="tinogasta-title">Tinogasta</h2>
      <p className="tinogasta-description">
        es una ciudad y municipio en Catamarca, Argentina, conocida por su
        rica historia, arquitectura colonial y atractivos naturales. Es
        famosa por sus aguas termales, su producción agrícola y vinícola, y
        su cercanía a la cordillera de los Andes, lo que la convierte en un
        destino turístico popular para quienes buscan disfrutar de la
        naturaleza y la cultura local.
      </p>
      <button>
        <span>
          {" "}
          <a href="Tinogasta">ver mas</a>{" "}
        </span>
      </button>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28165.99870289708!2d-67.56607431004785!3d-28.062661988302203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e0550e252366b%3A0x2107a5bcf191ff23!2sTinogasta%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1725204422451!5m2!1ses-419!2sar"></iframe>
    </div>
  </div>
  <div className="antofagasta-de-la-sierra" id="antofagasta-de-la-sierra">
    <img
      src="img/Antofagasta-de-la-Sierra/Capital.jpg"
      alt="Antofagasta de la Sierra"
      className="antofagasta-de-la-sierra-img"
    />
    <div className="antofagasta-de-la-sierra-content">
      <h2 className="antofagasta-de-la-sierra-title">Antofagasta de la Sierra</h2>
      <p className="antofagasta-de-la-sierra-description">
        Antofagasta de la Sierra es la capital del departamento homónimo en
        la provincia de Catamarca, en plena cordillera de los Andes, en la
        zona denominada Puna.
      </p>
      <button>
        <span>
          {" "}
          <a href="Antofagasta-De-La-Sierra">ver mas</a>{" "}
        </span>
      </button>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7168.333242857714!2d-67.41152290916331!3d-26.060810470610253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a080132e06d10b%3A0x3c02f3fa338632ac!2sAntofagasta%20de%20la%20Sierra%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1725204163946!5m2!1ses-419!2sar"></iframe>
    </div>
  </div>
  <div className="vallechico" id="vallechico">
    <img
      src="img/Valle-Chico/Capital.jpg"
      alt="Antofagasta de la Sierra"
      className="vallechico-img"
    />
    <div className="vallechico-content">
      <h2 className="vallechico-title">Valle Chico</h2>
      <p className="vallechico-description">
        es un desarrollo urbanístico en Catamarca, Argentina, que combina
        áreas residenciales, comerciales y recreativas. Este proyecto busca
        ofrecer una calidad de vida integral a sus habitantes, promoviendo
        espacios verdes y servicios modernos, lo que lo convierte en un
        lugar atractivo para vivir y visitar.
      </p>
      <button>
        <span>
          {" "}
          <a href="Valle-Chico">ver mas</a>{" "}
        </span>
      </button>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28050.509401957726!2d-65.8401143117459!3d-28.500208897152085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942429b27148f9a9%3A0x22202ae96e088a77!2sValle%20Chico%2C%20K4700%2C%20Catamarca!5e0!3m2!1ses-419!2sar!4v1727449819166!5m2!1ses-419!2sar"></iframe>
    </div>
  </div>
  </>
  );
}

export default Departamentos;