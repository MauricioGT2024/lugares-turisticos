import { TinogastaDetails } from "../components/index.js";
export function Tinogasta() {
  return (
		<>
			<div className="tinogasta-details">
				<h2 style={{ color: "seagreen", transition: "all 0.5s ease-in-out" }}>
					Descubre Tinogasta
				</h2>
			</div>
			<TinogastaDetails />
		</>
	);
}
