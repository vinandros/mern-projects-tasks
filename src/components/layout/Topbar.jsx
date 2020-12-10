import React, { useEffect, useContext } from "react";
import authenticationContext from "../../context/authentication/authenticationCotext";

const Topbar = () => {
  const { getAuthenticatedUser, user, logout } = useContext(
    authenticationContext
  );

  useEffect(() => {
    getAuthenticatedUser();
    // eslint-disable-next-line
  }, []);
  return (
    <header className="app-header">
      {user && (
        <p className="nombre-usuario">
          Hola <span> {user.userName}</span>
        </p>
      )}

      <nav className="nav-principal">
        <button onClick={logout} className="btn btn-blank cerrar-sesion">
          Logout
        </button>
      </nav>
    </header>
  );
};

export default Topbar;
