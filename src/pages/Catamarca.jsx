import { CatamarcaDetails } from "../components";

export function Catamarca() {
  return (
		<>
			<div className="catamarca-details">
				<h2 style={{ color: "steelblue", transition: "all 0.5s ease-in-out" }}>
					Descubre Catamarca
				</h2>
			</div>
			<CatamarcaDetails />
		</>
	);
}
