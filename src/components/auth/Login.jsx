import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { email, password } = formData;
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Put your email here!"
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Put your password here!"
              value={password}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Sign In"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/signup"} className="enlace-cuenta">
          {" "}
          Get an account here!
        </Link>
      </div>
    </div>
  );
};

export default Login;
