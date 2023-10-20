import "../../styles/login/login.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Login = ({ swapPanel, setSwapPaneltrue }) => {
  return (
    <div className="form-container sign-in-container">
      <form className="Form_inicioSesion">
        <div className="formContent">
          <h1 className="title_iniciar">Iniciar sesion</h1>
          <input
            className="formButton"
            type="email"
            placeholder="Correo electronico"
          />
          <input
            className="formButton"
            type="password"
            placeholder="Contraseña"
          />
          <div className="buttonsRegister">
            <button type="submit" className="botonRegister">
              Registrarte
            </button>

          </div>
        </div>
        <p>¿Aún no tienes cuenta?<a onClick={()=>setSwapPaneltrue(true)}>Registrate</a></p>
      </form>
    </div>
  );
};

export default Login;