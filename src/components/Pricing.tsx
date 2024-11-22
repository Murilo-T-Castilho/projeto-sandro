import "../styles/pricing.css";
import "../styles/utility.css";
import Button from "./Button";
import check from "../assets/check.svg";

const Pricing: React.FC = () => (
  <section id="pricing">
    <div className="pricing-header">
      <h2>Planos e preços</h2>
      <h1>Nossos planos</h1>
    </div>
    <div className="pricing-cards">
      <div className="pricing-card basic">
        <h3>Básico</h3>
        <h2>Grátis</h2>
        <Button text="Baixar agora" secondary />
        <ul className="checks">
          <li> <img id="check" src={check} alt="certo" /> Com anúncios</li>
          <li> <img id="check" src={check} alt="certo" /> Utilize sem limitação X</li>
        </ul>
      </div>
      <div className="pricing-card premium">
        <div className="bonus">1º mês grátis</div>
        <h3>Premium</h3>
        <h2>R$ 19,90</h2>
        <p>ao mês</p>
        <Button text="Experimente de graça" />
        <ul className="checks">
          <li> <img id="check" src={check} alt="certo" /> Sem anúncios </li>
          <li> <img id="check" src={check} alt="certo" /> Uso ilimitado </li>
          <li> <img id="check" src={check} alt="certo" /> Todos os serviços disponiveis </li>
        </ul>
      </div>
      <div className="pricing-card empresarial">
        <h3>Empresarial</h3>
        <h2>R$ 12,90</h2>
        <p>ao mês por dev</p>
        <Button text="Baixar agora" secondary />
        <ul className="checks">
          <li> <img id="check" src={check} alt="certo" /> Com anúncios</li>
          <li> <img id="check" src={check} alt="certo" /> Utilize sem limitação X</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Pricing;
