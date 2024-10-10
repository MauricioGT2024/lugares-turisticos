import { TinogastaDetails } from "../components/index.js";
export function Tinogasta() {
  return (
    <>
      <div className="tinogasta" id="tinogasta">
        <img
          src="img/Tinogasta/Complejo Termal La Aguadita.jpg"
          alt="Complejo Termal La Aguadita"
          className="tinogasta-img"
        />
        <div className="tinogasta-content">
          <h2 className="tinogasta-title">Complejo Termal La Aguadita</h2>
          <p className="tinogasta-description">
            es un centro de relajación y bienestar en Catamarca, Argentina, que
            ofrece aguas termales, spa y diversas instalaciones recreativas. Es
            un destino popular para quienes buscan tratamientos terapéuticos y
            una experiencia de descanso en un entorno natural.
          </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16752.710023847474!2d-67.66723668203443!3d-28.0298713999726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x969e117e2197b615%3A0xd0ba5c17a34028f7!2sComplejo%20Termal%20La%20Aguadita!5e0!3m2!1ses-419!2sar!4v1727445521377!5m2!1ses-419!2sar"></iframe>
      </div>
      <TinogastaDetails />
    </>
  );
}
