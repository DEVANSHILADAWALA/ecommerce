import React, { useRef } from "react";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear inputs
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "900px" }}>
      <h2 className="mb-4" style={{ color: "#3F69AA" }}>
        Contact Us
      </h2>

      <div className="row">
        {/* Form column */}
        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                required
                className="form-control"
                placeholder="Your full name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                required
                className="form-control"
                placeholder="Your email address"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                ref={messageRef}
                required
                className="form-control"
                rows="5"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary m-2"
              style={{ backgroundColor: "#3F69AA", borderColor: "#3F69AA" }}
              onClick={() => alert("Message is Send successful!")}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact info column */}
        <div className="col-md-5">
          <div className="p-3 ">
            <h5>Contact Information</h5>
            <p>
              <strong>Address:</strong> 123 E Shop, Los Angeles, CA, USA
            </p>
            <p>
              <strong>Email:</strong> email@example.com
            </p>
            <p>
              <strong>Phone:</strong> +123-456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
