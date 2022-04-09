import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <div id="about" className="container-fluid">
        <div className="row">
          <div className="col-sm-7">
            <h2 className="icons">About INFLUENZOS</h2>
            <br />
            <h4>What is Crowdfunding?</h4>
            <p class="text-justify">
              In it's simplest form, Crowdfunding is the use of small amounts of
              capital from large number of individals to finance business
              venture or to overcome specific social, cultural, or economic
              hurdles individuals face in their daily lives.
            </p>
            <br />
            <h4>So how does Crowdfunding work on Influenzos?</h4>
            <p class="text-justify">
              Let us assume an individual, unfortunately, suffering from brain
              tumor. His medical expenses and hospital bills starts piling up.
              Now he needs &#8377;10 lakhs. Fortunately, his best friend signed
              up on Influenzos Crowdfunding platform and created a campaign to
              raise funds. Now, this campaign can be shared with all his near
              and dear ones through WhatsApp, Instagram, Facebook, Twitter and
              E-mail. In an matter of few minutes, funds start coming in to
              support the financial needs of the injured friend.
            </p>
          </div>
          <div className="col-sm-5">
            <img
              className="aboutImage mw-50"
              src={require("../assets/about.png")}
              alt="about"
              height="300em"
              width="500em"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
