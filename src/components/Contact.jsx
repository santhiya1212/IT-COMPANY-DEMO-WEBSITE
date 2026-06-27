import Navbar from "./Navbar";
import Footer from "./Footer";
import office from "../assets/images/office.jpg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="container py-5 mt-5">

        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            We'd love to hear from you. Reach out to our team anytime.
          </p>
        </div>

        <div className="row">

          {/* Office Image */}

          <div className="col-lg-6 mb-4">

            <img
              src={office}
              alt="Office"
              className="img-fluid rounded shadow"
            />

          </div>

          {/* Contact Details */}

          <div className="col-lg-6">

            <div className="card shadow border-0 p-4">

              <h3 className="mb-4 text-primary">
                Corporate Office
              </h3>

              <p>
                <FaMapMarkerAlt className="text-primary me-2" />
                TechNova Solutions Pvt Ltd,
                Tidel Park, Chennai - 600113,
                Tamil Nadu, India.
              </p>

              <p>
                <FaPhoneAlt className="text-primary me-2" />
                +91 98765 43210
              </p>

              <p>
                <FaEnvelope className="text-primary me-2" />
                info@technova.com
              </p>

              <p>
                <FaGlobe className="text-primary me-2" />
                www.technova.com
              </p>

              <hr />

              <h5>Business Hours</h5>

              <p>
                Monday - Friday : 9:00 AM - 6:00 PM
              </p>

              <p>
                Saturday : 9:00 AM - 1:00 PM
              </p>

              <p>
                Sunday : Closed
              </p>

              <hr />

              <h5>Follow Us</h5>

              <div className="fs-3">

                <FaLinkedin className="me-3 text-primary" />

                <FaTwitter className="me-3 text-info" />

                <FaFacebook className="me-3 text-primary" />

                <FaInstagram className="text-danger" />

              </div>

            </div>

          </div>

        </div>

        {/* Google Map */}

        <div className="mt-5">

          <h3 className="text-center mb-4">
            Find Us
          </h3>

          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Tidel+Park+Chennai&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;