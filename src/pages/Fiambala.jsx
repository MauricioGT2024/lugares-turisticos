import { FiambalaDetails } from "../components";


export function Fiambala() {
  return (
    <>
      <div className="fiambala" id="fiambala">
        <img
          src="img/Fiambala/Duna Mágica de Fiambalá.jpg"
          alt="Duna Mágica de Fiambalá "
        />
        <div className="fiambala-content">
          <h2 className="fiambala-title">Duna Mágica de Fiambalá </h2>
          <p className="fiambala-description">
            La Duna Mágica de Fiambalá es una extensa duna de arena ubicada en
            el desierto de Fiambalá, en la provincia de Catamarca, Argentina. Es
            conocida por sus impresionantes formaciones de arena que crean un
            paisaje casi surrealista, además de su relevancia como destino
            turístico y lugar de eventos como el Dakar Rally.
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1810873.832820964!2d-69.91602560625!3d-27.566763399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e32e507f9d14b%3A0x1c0a5f6153489121!2sDuna%20M%C3%A1gica!5e0!3m2!1ses-419!2sar!4v1725204852483!5m2!1ses-419!2sar"></iframe>
        </div>
      </div>
     <FiambalaDetails />
    </>
  );
}
