import "../../styles/profile.css";
import Nav from "../../components/nav-bar";
import Footer from "../../components/footer";
import { FaArrowLeft, FaStar } from "react-icons/fa";

function profile() {
  const color_star = "gold";

  return (
    <>
      <Nav />
      <div className="align_text_icon">
        <div>
          <FaArrowLeft style={{ marginLeft: "20px", marginTop:"5px" }} />
        </div>
        <div>
          <div>
            <span className="titulo_perfil">
              <b>Perfil</b>
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <hr style={{ height: "5px", backgroundColor: "#6E0086", width: "95%" }} />

      <section className="cont-profile">
        <div className="info_profile">
          <div className="img_stars">
            <img
              className="img_profile"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div style={{ padding: "20px", fontSize: "25px" }}>
              <FaStar color={color_star} />
              <FaStar color={color_star} />
              <FaStar color={color_star} />
              <FaStar color={color_star} />
              <FaStar />
            </div>
          </div>
          <div>
            <section className="inputs_info">
              <div>
                <span>
                  Nombre <br />
                </span>
                <input className="inputs-datos" type="text" name="" id="" />
              </div>
              <div>
                <span>
                  Estado <br />
                </span>
                <input className="inputs-datos" type="text" name="" id="" />
              </div>
              <div>
                <span>
                  Apellido paterno <br />
                </span>
                <input className="inputs-datos" type="text" name="" id="" />
              </div>
              <div>
                <span>
                  Email <br />
                </span>
                <input className="inputs-datos" type="email" name="" id="" />
              </div>
              <div>
                <span>
                  Apellido materno <br />
                </span>
                <input className="inputs-datos" type="text" name="" id="" />
              </div>
              <div>
                <span>
                  Contraseña <br />
                </span>
                <input className="inputs-datos" type="password" name="" id="" />
              </div>
            </section>
          </div>
        </div>
        <div className="amigos_perfil">
          <h2 style={{ textAlign: "center", margin: "10px" }}>Amigos</h2>
          <div className="info_amigo">
            <img
              className="img_foto_amigo"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div className="name_calif_amigo">
              <b>
                <span>Rosa melano</span>
              </b>
              <div>
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="info_amigo">
            <img
              className="img_foto_amigo"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div className="name_calif_amigo">
              <b>
                <span>Rosa melano</span>
              </b>
              <div>
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="info_amigo">
            <img
              className="img_foto_amigo"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div className="name_calif_amigo">
              <b>
                <span>Rosa melano</span>
              </b>
              <div>
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="info_amigo">
            <img
              className="img_foto_amigo"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div className="name_calif_amigo">
              <b>
                <span>Rosa melano</span>
              </b>
              <div>
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="info_amigo">
            <img
              className="img_foto_amigo"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div className="name_calif_amigo">
              <b>
                <span>Rosa melano</span>
              </b>
              <div>
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="info_amigo">
            <img
              className="img_foto_amigo"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div className="name_calif_amigo">
              <b>
                <span>Rosa melano</span>
              </b>
              <div>
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="info_amigo">
            <img
              className="img_foto_amigo"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div className="name_calif_amigo">
              <b>
                <span>Rosa melano</span>
              </b>
              <div>
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="info_amigo">
            <img
              className="img_foto_amigo"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div className="name_calif_amigo">
              <b>
                <span>Rosa melano</span>
              </b>
              <div>
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar />
              </div>
            </div>
          </div>
          <div className="info_amigo">
            <img
              className="img_foto_amigo"
              src="https://as1.ftcdn.net/v2/jpg/05/63/77/92/1000_F_563779293_rr2qHgGLpHoq2QwZHjjo9XE4JyJaFDnt.jpg"
            />
            <div className="name_calif_amigo">
              <b>
                <span>Rosa melano</span>
              </b>
              <div>
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar color={color_star} />
                <FaStar />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="btns-editar_eliminar">
        <button className="btn-editar" style={{backgroundColor: "#9225AA"}}>Editar informacion</button>
        <button className="btn-eliminar"  style={{backgroundColor: "#BF213E"}}>Eliminar mi cuenta</button>
      </div>
      <Footer />
    </>
  );
}

export default profile;
