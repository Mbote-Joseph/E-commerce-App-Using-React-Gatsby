import React from "react";
import Heading from "../Reuseable/Heading";
export default function Contact() {
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/f/mjvpdvld" method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Enter your Mobile"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder=" Type here ..."
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-info btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
