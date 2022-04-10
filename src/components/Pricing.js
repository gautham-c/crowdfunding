import React, { useState } from "react";
import Popup from "reactjs-popup";
const Pricing = () => {
	const data = require("../utils/data.json");
	const [showModal, setShowModal] = useState(false);
	console.log(showModal);

	return (
		<div id="pricing" class="container-fluid">
			<div class="text-center">
				<h2 className="icons">Campaign</h2>
				<h4>Make your impact</h4>
			</div>
			<div class="row slideanim">
				{data.map((value) => (
					<div class="col-sm-4 col-xs-12">
						<div class="panel panel-default text-center">
							<div class="panel-heading">
								<h1>{value.title}</h1>
							</div>
							<div class="panel-body text-justify">
								<p>{value.description}</p>
							</div>
							<div class="panel-footer">
								<div class="row">
									<div>
										<p>
											<strong>Target Amount:</strong>
											{value.targetAmount}
										</p>
									</div>
									<div>
										<p>
											<strong>Amount Collected:</strong>
											{value.amountCollected}
										</p>
									</div>
								</div>

								<Popup
									trigger={<button className="btn btn-default btn-lg p-0 m-0"> {"Donate"}</button>}
									modal>
									<div>
										<div>Form</div>
									</div>
								</Popup>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pricing;
