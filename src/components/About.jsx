import Navbar from "./Navbar";
import Footer from "./Footer";
import about from "../assets/images/about.jpg";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-page py-5 mt-5">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <img
                src={about}
                className="img-fluid rounded shadow"
                alt="About"
              />

            </div>

            <div className="col-lg-6">

              <h5 className="text-primary">
                ABOUT US
              </h5>

              <h2 className="fw-bold mb-4">

                Delivering Digital Engineering Excellence

              </h2>

              <p>

                TechNova is a leading digital engineering
                company helping businesses modernize
                applications, migrate to cloud and
                accelerate innovation using AI.

              </p>

              <p>

                Our teams work across Banking,
                Healthcare, Retail, Telecom,
                Manufacturing and Insurance.

              </p>

              <button className="btn btn-primary">

                Learn More

              </button>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default About;