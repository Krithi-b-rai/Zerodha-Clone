import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <div className="d-flex gap-5 flex-wrap mt-3">
            <div>
              <a
                href=""
                className="d-block border-bottom text-white text-decoration-none"
              >
                Track account opening
              </a>
            </div>
            <div>
              <a
                href=""
                className="d-block border-bottom text-white text-decoration-none"
              >
                Track segment activation
              </a>
            </div>
            <div>
              <a
                href=""
                className="d-block border-bottom text-white text-decoration-none"
              >
                Intraday margins
              </a>
            </div>
            <div>
              <a
                href=""
                className="d-block border-bottom text-white text-decoration-none"
              >
                Kite user manual
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
