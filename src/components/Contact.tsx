import "../styles/utility.css";
import "../styles/contact.css"

import sgMail from '@sendgrid/mail';

// Defina a chave da API
sgMail.setApiKey('CZYCF21HY6GDP976YBLK31VX');

const sendEmail = async (toEmail: string, text: string) => {
  const msg = {
    to: toEmail, // E-mail de destino
    from: 'seu-email@dominio.com', // Seu e-mail de origem (precisa ser verificado no SendGrid)
    text: text, // Corpo do e-mail
  };

  try {
    await sgMail.send(msg);
    console.log('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
  }
};

// Exemplo de uso
sendEmail('murilo.castilho@gmail.com', 'Corpo do e-mail')
  .then(() => console.log('E-mail disparado'))
  .catch((error) => console.error('Erro ao disparar e-mail:', error));


const Contact: React.FC = () => (
  <section id="contact">
    <div className="contact-header">
      <h3>Envie sua dúvida</h3>
      <h2>Entre em contato</h2>
      <p>
        Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder. 😇
      </p>
    </div>
    <form className="contact-form">
      <div className="form-inputs">
        <input type="email" placeholder="Seu melhor Email" required />
        <textarea placeholder="Motivo do contato: Ex: Gostei muito do produto X, poderia me enviar um orçamento?" required></textarea>
      </div>
      <div className="form-button">
        <button type="submit">Enviar</button>
      </div>
    </form>
  </section>
);

export default Contact;
