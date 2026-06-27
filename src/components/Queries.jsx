import { useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import Footer from "./Footer";

function Queries() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:5000/api/queries",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {

      alert("Error submitting query");

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />

      <section className="py-5 mt-5">
        <div className="container">

          <div className="col-lg-8 mx-auto">

            <h2 className="mb-4">
              Submit Your Query
            </h2>

            <form
              className="shadow p-4 rounded bg-white"
              onSubmit={submit}
            >

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control mb-3"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control mb-3"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Enter your query"
                className="form-control mb-3"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button className="btn btn-primary">
                Submit
              </button>

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Queries;