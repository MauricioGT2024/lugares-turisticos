import { Link } from "react-router-dom";

function HomeDetails() {
	return (
		<section className="bg-gray-100 py-12" id="home">
			{" "}
			{/* Added section and background color */}
			<div className="container mx-auto px-4 text-center">
				{" "}
				{/* Container for centering */}
				<h2 className="text-3xl font-bold mb-4 text-gray-800">
					San Fernando Del Valle De Catamarca
				</h2>{" "}
				{/* Title styling */}
				<p className="text-lg text-gray-600 mb-8">
					San Fernando del Valle de Catamarca es la capital de la provincia de
					Catamarca, Argentina. <br />
					Es un centro administrativo, <br />
					cultural y económico, con una rica historia y tradiciones, así como un
					entorno natural atractivo.
				</p>
				<div className="mb-8">
					{" "}
					{/* Added margin bottom for better spacing */}
					<h3 className="text-xl font-bold mb-4 text-gray-700">
						Puntos de Interés:
					</h3>
					<ul className="flex flex-wrap justify-center gap-4">
						{" "}
						{/* Responsive list */}
						<li className="text-gray-600">🏞️ Parque Adán Quiroga</li>
						<li className="text-gray-600">⛪ La Catedral Basílica</li>
						<li className="text-gray-600">🏛️ Casa de la Cultura</li>
						<li className="text-gray-600">
							🎉 Fiesta Nacional e Internacional del Poncho
						</li>
					</ul>
				</div>
				<Link
					to="/Provincia"
					className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				>
					{" "}
					{/* Button styling with Link */}
					Ver más
				</Link>
			</div>
		</section>
	);
}

export default HomeDetails;
