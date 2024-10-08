import { AntofagastaDeLaSierraDetails } from "../components/index.js"


export function AntofagastaDeLaSierra() {
  return (
    <>
      <div className="antofagasta-de-la-sierra" id="antofagasta-de-la-sierra">
        <img
          src="img/Antofagasta-de-la-Sierra/Campo de Piedra Pómez.jpg"
          alt="Campo de Piedra Pómez"
        />
        <div className="antofagasta-de-la-sierra-content">
          <h2 className="antofagasta-de-la-sierra-title">Campo de Piedra Pómez</h2>
          <p className="antofagasta-de-la-sierra-description">
            El Área natural protegida Campo de Piedra Pómez es un área natural
            protegida que se encuentra en el departamento Antofagasta de la
            Sierra, en la provincia de Catamarca, Argentina
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28534.426449338745!2d-67.53326538916018!3d-26.62275079999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96a00f5e4e4c8a27%3A0xa5f6b3bd0e5a5de2!2sCampo%20De%20Piedra%20Pomez!5e0!3m2!1ses-419!2sar!4v1725376807406!5m2!1ses-419!2sar"></iframe>
        </div>
      </div>
     <AntofagastaDeLaSierraDetails/>
    </>
  );
}
