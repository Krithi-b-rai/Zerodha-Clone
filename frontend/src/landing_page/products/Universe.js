import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p> 

    {/* Zerodha Fund House */}
    <div className="col-md-4 mb-5">
      <img src="media/images/zerodhafundhouse.png" style={{ width: "48%" }} alt="Zerodha Fund House" />
       
      <p style={{ fontSize: "13px" }} className="mt-4 text-center">
        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
      </p>
    </div>

    {/* Sensibull */}
    <div className="col-md-4 mb-5">
      <img src="media\images\sensibullLogo.svg" style={{ width: "58%" }}  alt="Sensibull" />
       
      <p style={{ fontSize: "13px" }} className="mt-4 text-center">
        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
      </p>
    </div>

    {/* Tijori */}
    <div className="col-md-4 mb-5">
      <img src="media\images\tijori.svg" style={{ width: "48%" }} alt="Tijori" />
       
      <p style={{ fontSize: "13px" }} className="mt-4 text-center">
        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
      </p>
    </div>

    {/* Streak */}
    <div className="col-md-4 mb-4">
      <img src="media\images\streakLogo.png" style={{ width: "40%" }} alt="Streak" />
      
      <p style={{ fontSize: "13px" }} className="mt-4 text-center">
        Systematic trading platform that allows you to create and backtest strategies without coding.
      </p>
    </div>

    {/* Smallcase */}
    <div className="col-md-4 mb-4">
      <img src="media\images\smallcaseLogo.png" style={{ width: "50%" }} alt="Smallcase" />
       
      <p style={{ fontSize: "13px" }} className="mt-4 text-center">
        Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
      </p>
    </div>

    {/* Ditto */}
    <div className="col-md-4 mb-4">
      <img src="media\images\dittoLogo.png" style={{ width: "35%" }} alt="Ditto" />
       
      <p style={{ fontSize: "13px" }} className="mt-4 text-center">
        Personalized advice on life and health insurance. No spam and no mis-selling.
      </p>
    </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
