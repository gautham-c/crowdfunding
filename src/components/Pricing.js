import React from "react";

const Pricing = () => {
  const data = require("../utils/data.json");

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
                <button class="btn btn-lg">Donate</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
