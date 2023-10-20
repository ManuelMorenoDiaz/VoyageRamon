import "../../styles/Login/register.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Register = ({ swapPanel, setSwapPanelfalse }) => {


  return (
    <div className="form-container sign-up-container">
      <form className="Form_registro">
        <div className="formContent">
          <h1 className="title_iniciar">Registrarse</h1>


          <input
            className="formButton"
            type="text"

            placeholder="Nombre"
          />




          <input
            className="formButton"
            type="text"

            placeholder="Apellido"
          />




          <input
            className="formButton"
            type="email"

            placeholder="Email"
          />



          <input
            className="formButton"
            type="password"

            placeholder="Contraseña"
          />




          <input
            className="formButton"
            type="password"

            placeholder="Confirmar contraseña"
          />

          <div className="buttonsRegister">
            <button type="submit" className="botonRegister">
              Registrarte
            </button>
          </div>
          <p>
            ¿Ya estas registrado? 
            <a onClick={() => setSwapPanelfalse(false)}>Iniciar sesion</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;