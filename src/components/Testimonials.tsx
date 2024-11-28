import Prince from "../assets/Prince.svg";
import VV from "../assets/VV.svg";
import Dante from "../assets/dante.svg";
import Star from "../assets/Star.svg";
import EmptyStar from "../assets/EmptyStar.svg";
import "../styles/utility.css";
import "../styles/testimonials.css"
import '../styles/index.css';

const Testimonials: React.FC = () => (
    <section id="testimonials">
        <header>
            <span>
                <p className="desktop-only">
                    Conselho de quem conhece
                </p>
                <h2>Conheça nossos melhores clientes</h2>
            </span>
            <p>
                Eles sairam de pessoas quebradas e individadas para pessoas extremamente ricas e e bem sucedidas
            </p>
        </header>
        <section className="carousel">
            <div className="carousel-content" style={{ "paddingRight": "10px" }}>
                <div className="carousel-card">
                    <img id="perfil" src={Prince} alt="Imagem perfil cliente" />
                    <span className="testimony">
                        <p>
                            My Bradesco account is very full of money, very thanks
                        </p>
                    </span>
                    <div className="nota">
                        <span className="rating">
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={EmptyStar} alt="ícone estrela sem fundo" width={22} height={20} />
                        </span>
                        <span className="names">
                            <p>Nigirian Prince</p>
                            <p>Prince of Nigeria</p>
                        </span>
                    </div>
                </div>
                <div className="carousel-card">
                    <img id="perfil" src={VV} alt="Imagem perfil cliente" />
                    <span className="testimony">
                        <p>
                            Nunca mais vou precisar sonegar imposto com esse banco me ajudando
                        </p>
                    </span>
                    <div className="nota">
                        <span className="rating">
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={EmptyStar} alt="ícone estrela sem fundo" width={22} height={20} />
                            <img id="estrela" src={EmptyStar} alt="ícone estrela sem fundo" width={22} height={20} />
                        </span>
                        <span className="names">
                            <p>Junin</p>
                            <p>O Bonda</p>
                        </span>
                    </div>
                </div>
                <div className="carousel-card">
                    <img id="perfil" src={Dante} alt="Imagem perfil cliente" />
                    <span className="testimony">
                        <p>
                            "Filho de anjo e demonio. Devil May Cry, De-De-De- Devil May Cry"
                        </p>
                    </span>
                    <div className="nota">
                        <span className="rating">
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                        </span>
                        <span className="names">
                            <p>Dante</p>
                            <p>O Devil May Cry</p>
                        </span>
                    </div>
                </div>
            </div>

            <div className="carousel-content">
                <div className="carousel-card">
                    <img id="perfil" src={Prince} alt="Imagem perfil cliente" />
                    <span className="testimony">
                        <p>
                            My Bradesco account is very full of money, very thanks
                        </p>
                    </span>
                    <div className="nota">
                        <span className="rating">
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={EmptyStar} alt="ícone estrela sem fundo" width={22} height={20} />
                        </span>
                        <span className="names">
                            <p>Nigirian Prince</p>
                            <p>Prince of Nigeria</p>
                        </span>
                    </div>
                </div>
                <div className="carousel-card">
                    <img id="perfil" src={VV} alt="Imagem perfil cliente" />
                    <span className="testimony">
                        <p>
                            Nunca mais vou precisar sonegar imposto com esse banco me ajudando
                        </p>
                    </span>
                    <div className="nota">
                        <span className="rating">
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={EmptyStar} alt="ícone estrela sem fundo" width={22} height={20} />
                            <img id="estrela" src={EmptyStar} alt="ícone estrela sem fundo" width={22} height={20} />
                        </span>
                        <span className="names">
                            <p>Junin</p>
                            <p>O Bonda</p>
                        </span>
                    </div>
                </div>
                <div className="carousel-card">
                    <img id="perfil" src={Dante} alt="Imagem perfil cliente" />
                    <span className="testimony">
                        <p>
                            "Filho de anjo e demonio. Devil May Cry, De-De-De- Devil May Cry"
                        </p>
                    </span>
                    <div className="nota">
                        <span className="rating">
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                            <img id="estrela" src={Star} alt="ícone estrela" width={22} height={20} />
                        </span>
                        <span className="names">
                            <p>Dante</p>
                            <p>O Devil May Cry</p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </section>
);

export default Testimonials;
