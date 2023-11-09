import userIcon from '../../imgs/userIcon.png'
import portoLogo from '../../imgs/LogoPorto.png'
import { Link } from 'react-router-dom';
import '../NavBarP/NavBarP.css'

function NavBarS() {
    return (
        <section className='header'>
            <div className='upperHeader'>
                <div>
                    <Link to='/' className='logo'>
                        <div>
                            <img src={portoLogo} alt="Logo da porto" />
                        </div>

                        <div>
                            <h3 className='porto'>Porto</h3>
                            <h3>Bike Care</h3>
                        </div>
                    </Link>

                    <div className='line'></div>

                    <div className='upperNav'>
                        <ul className='nav'>
                            <li><a href="https://www.portoseguro.com.br/conteudo/seguros/bike/">Porto Bike</a></li>
                            <li><a href="https://www.portoseguro.com.br/area-do-cliente">Sobre Nós</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <Link className='login' to='/Conta'>
                        <img src={userIcon} alt="bonequinho " className='bonequinho' />
                        <p className="entrar"> {localStorage.getItem("logado") == "true" ? "Conta" : "Entrar"}</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NavBarS;