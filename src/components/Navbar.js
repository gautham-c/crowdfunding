import React, { useEffect, useState } from "react";
import {
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from "../utils/wallet";

const Navbar = () => {
  const [wallet, setWallet] = useState(null);

  const handleConnectWallet = async () => {
    const { wallet } = await connectWallet();
    setWallet(wallet);
  };
  const handleDisconnectWallet = async () => {
    const { wallet } = await disconnectWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    const func = async () => {
      const account = await getActiveAccount();
      if (account) {
        setWallet(account.address);
      }
    };
    func();
  }, []);
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#myPage">
            Influenzos
          </a>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            {/* <li><a href="#services">SERVICES</a></li> */}
            {/* <li><a href="#portfolio">PORTFOLIO</a></li> */}
            <li>
              <a href="#pricing">CAMPAIGN</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>
              <button
                onClick={wallet ? handleDisconnectWallet : handleConnectWallet}
                className="btn btn-default btn-md signin"
              >
                <p className="text-dark vertical-center">
                  {" "}
                  {wallet ? "Sign Out" : "Sign In"}
                </p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
