import userIcon from "../../imgs/userIcon.png";
import arrow2 from "../../imgs/Arrow 2.png";
import portoLogo from "../../imgs/LogoPorto.png";
import ArrowPreto from "../../imgs/ArrowPreto.png";
import "./NavBarP.css";
import { Link } from "react-router-dom";

function NavBarP() {
  return (
    <section className="header">
      <div className="upperHeader">
        <div>
          <div>

            <Link className="logo" to='/'>
              <div>
                <img src={portoLogo} alt="Logo da porto" />
              </div>

              <div>
                <h3 className="porto">Porto</h3>
                <h3>Bike Care</h3>
              </div>
            </Link>

          </div>

          <div className="line"></div>

          <div className="upperNav">
            <ul className="nav">
              <li>
                <a href="https://www.portoseguro.com.br/conteudo/seguros/bike/">
                  Porto Bike
                </a>
              </li>
              <li>
                <a href="https://www.portoseguro.com.br/area-do-cliente">
                  Sobre Nós
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <Link className="login" to="/Conta">
            <img src={userIcon} className="bonequinho" />
            <p className="entrar"> {localStorage.getItem("logado") == "true" ? "Conta" : "Entrar"}</p>
          </Link>
        </div>
      </div>

      <div className="downHeader">
        <a href="#1" className="imgSwitch">
          <p className="texto2">Coberturas</p>
          <img src={ArrowPreto} alt="arrow " className="arrow" />
          <img src={arrow2} className="arrow2" />
        </a>

        <a href="#2" className="imgSwitch">
          <p className="texto1">Planos</p>
          <img src={ArrowPreto} alt="arrow " className="arrow" />
          <img src={arrow2} className="arrow2" />
        </a>
      </div>
    </section>
  );
}

export default NavBarP;
