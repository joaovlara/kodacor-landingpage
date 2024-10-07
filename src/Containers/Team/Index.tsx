import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="ftco-section ftco-team">
      <div className="container-fluid px-md-5">
        <div className="row justify-content-center pb-3">
          <div className="col-md-10 heading-section text-center ftco-animate">
            <span className="subheading">Artistic Director</span>
            <h2 className="mb-4">Makeup Artist</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 ftco-animate">
            <div className="carousel-team owl-carousel">
              <div className="item">
                <a href="#" className="team text-center">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/stylist-1.jpg)' }}
                  ></div>
                  <h2>Danica Lewis</h2>
                  <span className="position">Hair Stylist</span>
                </a>
              </div>
              <div className="item">
                <a href="#" className="team text-center">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/stylist-2.jpg)' }}
                  ></div>
                  <h2>Nicole Simon</h2>
                  <span className="position">Nail Master</span>
                </a>
              </div>
              <div className="item">
                <a href="#" className="team text-center">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/stylist-3.jpg)' }}
                  ></div>
                  <h2>Cloe Meyer</h2>
                  <span className="position">Director</span>
                </a>
              </div>
              <div className="item">
                <a href="#" className="team text-center">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/stylist-4.jpg)' }}
                  ></div>
                  <h2>Rachel Clinton</h2>
                  <span className="position">Hair Stylist</span>
                </a>
              </div>
              <div className="item">
                <a href="#" className="team text-center">
                  <div
                    className="img"
                    style={{ backgroundImage: 'url(images/stylist-5.jpg)' }}
                  ></div>
                  <h2>Dave Buff</h2>
                  <span className="position">Barber</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
