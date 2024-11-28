//import Logo from "../assets/logo.svg";
import insta from "../assets/instagram.svg";
import face from "../assets/facebook.svg";
import ytube from "../assets/youtube.svg";
import "../styles/utility.css";
import "../styles/footer.css"
import '../styles/index.css';



const Footer: React.FC = () => (
    <section id="footer">
        <div className="footer-content">
            <div className="logo">
                <p>LogoMarca</p>
                <div className="social-icons">
                    <a href="#" aria-label="Instagram"><img src={insta} alt="Instagram" /></a>
                    <a href="#" aria-label="Facebook"><img src={face} alt="Facebook" /></a>
                    <a href="#" aria-label="YouTube"><img src={ytube} alt="YouTube" /></a>
                </div>
            </div>
            <div className="footer-links">
                <div className="column">
                    <h3>Empresa</h3>
                    <ul>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Faça parte do time</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Funcionalidades</h3>
                    <ul>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Análise de dados</a></li>
                        <li><a href="#">Boot discord</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>Recursos</h3>
                    <ul>
                        <li><a href="#">IOS & Android</a></li>
                        <li><a href="#">Teste a Demo</a></li>
                        <li><a href="#">Clientes</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Feito com amor na aula de Programação Web💙 &copy; 2024 AktieTech - Todos os direitos reservados.</p>
        </div>
    </section>
);

export default Footer;
