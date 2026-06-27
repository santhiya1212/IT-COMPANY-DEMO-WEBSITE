import ScrollTop from "./ScrollTop";
function Footer() {
  return (
  <>
    <ScrollTop />

    <footer className="footer">

      <div className="container">

        <div className="row">

          <div className="col-md-4">

            <h3>TechNova</h3>

            <p>

              Delivering innovative digital engineering,
              cloud and AI solutions worldwide.

            </p>

          </div>

          <div className="col-md-4">

            <h5>Quick Links</h5>

            <ul>

              <li>Home</li>

              <li>About</li>

              <li>Services</li>

              <li>Products</li>

            </ul>

          </div>

          <div className="col-md-4">

            <h5>Contact</h5>

            <p>Email : info@technova.com</p>

            <p>Phone : +91 9876543210</p>

            <p>Chennai, India</p>

          </div>

        </div>

        <hr />

        <p className="text-center">

          © 2026 TechNova Solutions. All Rights Reserved.

        </p>

      </div>

    </footer>

</>
  );
}

export default Footer;