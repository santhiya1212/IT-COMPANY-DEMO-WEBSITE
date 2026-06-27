import hero1 from "../assets/images/hero1.jpg";
import hero2 from "../assets/images/hero2.avif";
import hero3 from "../assets/images/hero3.jpg";

function HeroCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">

          <img src={hero1} className="d-block w-100 hero-img" alt="" />

          <div className="carousel-caption">

            <h1>Engineering Digital Transformation</h1>

            <p>
              Empowering enterprises through cloud,
              AI and digital innovation.
            </p>

          </div>

        </div>

        <div className="carousel-item">

          <img src={hero2} className="d-block w-100 hero-img" alt="" />

          <div className="carousel-caption">

            <h1>Delivering Enterprise Solutions</h1>

            <p>
              Modern applications for global businesses.
            </p>

          </div>

        </div>

        <div className="carousel-item">

          <img src={hero3} className="d-block w-100 hero-img" alt="" />

          <div className="carousel-caption">

            <h1>Cloud • AI • Data</h1>

            <p>
              Building the future with emerging technologies.
            </p>

          </div>

        </div>

      </div>

      <button
        className="carousel-control-prev"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default HeroCarousel;