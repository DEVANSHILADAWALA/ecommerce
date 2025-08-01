import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';

function Login() {
  const emailRef = useRef();
  const pwdRef = useRef();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = pwdRef.current.value;

    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    axios.post("https://studiogo.tech/student/shoppingapi/login.php", formdata)
      .then((response) => {
        if (response.status === 200) {
          const json = response.data;
          if(json.status == "yes")
          {
            sessionStorage.setItem("islogin", "true");
            sessionStorage.setItem("user_id", json.userdata.user_id);
            navigate("/Home");
          }
          else
          {
            var message  = json.message;
            alert(message);
          }
         
          
        }
      })
      .catch((error) => {
        console.log("Username and password not found");
      });
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="text-center form-label1 mb-4">User Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    ref={emailRef}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="UserName"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    ref={pwdRef}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                  />
                </div>
                <button type="submit" className="btncol w-100" onClick={handleLogin}>Login</button>
                <div className="text-end mt-3">
                  <small>
                    Not registered?{' '}
                    <a href="/register" className="text-decoration-none">
                      Register
                    </a>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
