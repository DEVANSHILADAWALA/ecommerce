import axios from "axios";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const nameRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    const name = nameRef.current.value;
    const contact = contactRef.current.value;
    const email = emailRef.current.value;
    const password = pwdRef.current.value;

    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("contact", contact);
    formdata.append("email", email);
    formdata.append("password", password);

    axios.post("https://studiogo.tech/student/shoppingapi/register.php", formdata)
      .then((response) => {
        if (response.status === 200) {
          const json = response.data;
          console.log(json);
          sessionStorage.setItem("isregister", "true");

          navigate("/Login");
        }
      })
      .catch((error) => {
        console.log("Registration failed", error);
      });
  }

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="text-center form-label1 mb-4">Create an Account</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      ref={nameRef}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contact" className="form-label">Contact</label>
                    <input
                      ref={contactRef}
                      type="text"
                      className="form-control"
                      id="contact"
                      placeholder="Enter contact"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      ref={emailRef}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input
                      ref={pwdRef}
                      type="password"
                      className="form-control"
                      id="Password"
                      placeholder="Enter password"
                    />
                  </div>
                  <button type="submit" className="w-100 btncol" onClick={handleRegister}>
                    Register
                  </button>

                  {/* Login link below button aligned right */}
                  <div className="text-end mt-3">
                    <small>
                      Already have an account?{' '}
                      <Link to="/login" className="text-decoration-none">
                        Login
                      </Link>
                    </small>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
