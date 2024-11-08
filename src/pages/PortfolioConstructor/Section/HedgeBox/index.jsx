import React from "react";

const HedgeBox = () => {
	return (
		<div className="card card-congratulation-medal sizing" id="hedge_histogram_card" style={{ display: "none" }}>
			<div className="card-body">
				<div className="row" style={{ height: "100%" }}>
					<div className="col-lg-12 customizer-styling-direction px-2">
						<p className="font-weight-bold" style={{ display: "inline-block" }}>Hedged Portfolio</p>
						<p id="hedge_contract_symbol" style={{ marginLeft: "3rem", display: "inline-block" }} />
						<p id="hedge_numbers_of_contracts" style={{ marginLeft: "3rem", display: "inline-block" }} />
						<p id="hedge_cost" style={{ marginLeft: "3rem", display: "inline-block" }} />
						<div className="col-md-12 mb-1 size-first-canvas" style={{ height: "95%" }}>
							<p id="best_match_hedge" style={{ display: "none", color: "yellow", fontSize: "small" }}></p>
							<canvas id="hedge_histogram_chart" className="canvas-sizing"></canvas>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HedgeBox;