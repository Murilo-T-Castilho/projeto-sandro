import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Button from "./Button";
import "../styles/utility.css";
import "../styles/hero.css";

const Hero: React.FC = () => (
    <section id="hero">
        <span>
            <img src={HeroRectangleTwo} alt="Retangulo" className="retnagulo2" />
        </span>
        <img src={HeroRectangleOne} alt="Retangulo" />
        <div className="container content">
            <h1>Um sistema inovador para organizar suas finanças</h1>
            <p>
                Quer organizar seu dinheiro para comprar o carro dos seus sonhos, ou não consegue administrar suas dívidas?
                Este é o site perfeito para você.
            </p>
            <div className="flex gap-1">
                <span><Button text="Cadastre-se" /></span>
                <span className="desktop-only">
                    <Button text="Veja mais" secondary />
                </span>
            </div>
        </div>
    </section>
);

export default Hero;
