import React from "react";
import { Link } from "react-router-dom";
const SingUp = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirmation: "",
    userName: "",
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

  const { email, password, userName, passwordConfirmation } = formData;
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={handleChange}
              placeholder="Put your user name here!"
              value={userName}
            />
          </div>
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
            <label htmlFor="passwordConfirmation">Password Confirmation</label>
            <input
              type="password"
              name="passwordConfirmation"
              id="passwordConfirmation"
              onChange={handleChange}
              placeholder="Repit your password here!"
              value={passwordConfirmation}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          {" "}
          Go Login!
        </Link>
      </div>
    </div>
  );
};

export default SingUp;
