import { CatamarcaDetails } from "../components";

export function Catamarca() {
  return (
    <>
      <div className="catamarca" id="catamarca">
        <img
          src="img/San Fernando Del Valle De Catamarca/Gruta de la Virgen del Valle.jpg"
          alt="Gruta de la Virgen del Valle"
        />
        <div className="catamarca-content">
          <h2 className="catamarca-title">Gruta de la Virgen del Valle</h2>
          <p className="catamarca-description">
            El Complejo Gruta Virgen del Valle es un centro religioso y
            turístico Incluye una gruta dedicada a la Virgen del Valle, patrona
            de la provincia, y un conjunto de instalaciones que comprenden
            capillas, áreas de oración, y espacios para la peregrinación. Es un
            importante sitio de devoción y atracción para visitantes y fieles.
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224679.84862245177!2d-65.944013521875!3d-28.370256435358243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9424264fb5a448e3%3A0xae112f88ce456aa9!2sGruta%20de%20la%20Virgen%20del%20Valle!5e0!3m2!1ses-419!2sar!4v1725200621926!5m2!1ses-419!2sar"></iframe>
        </div>
      </div>
      <CatamarcaDetails/>
    </>
  );
}
