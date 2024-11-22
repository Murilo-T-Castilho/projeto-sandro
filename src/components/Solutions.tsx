import Codebar from "../assets/codebar.svg";
import Bank from "../assets/bank.svg";
import Human from "../assets/human.svg";
import "../styles/utility.css";
import "../styles/coiso.css";

const Solutions: React.FC = () => (
  <section id="coiso">
    <div className="container">
      <header>
        <h3>Soluções</h3>
        <h1>Para monitorar seus gastos</h1>
        <p>
          O site do <span className="colorido">FinanciON</span> possui funções e recursos dinâmicos e intuitivos para
          melhorar a sua experiência.
        </p>
      </header>

      <div className="products">
        <div className="product-card">
          <div className="icone-1"><img src={Codebar} alt="Código de barra" /></div>
          <p>
            Fazemos e monitoramos pagamentos por boleto, pix e cartão de crédito e débito.
          </p>
        </div>
        <div className="product-card">
          <div className="icone-2"><img src={Bank} alt="banco" /></div>
          <p>
            Nós realizamos <span className="colorido">OpenFinance</span> com os mais diversos bancos, entre
            eles Caixa, Banco do Brasil, Itaú, Nubank, entre outros.
          </p>
        </div>
        <div className="product-card">
          <div className="icone-3"><img src={Human} alt="pessoa" /></div>
          <p>
            Usamos os dados coletados para trazer gráficos e estatísticas personalizadas para refletir
            o seu perfil de consumidor.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Solutions;
