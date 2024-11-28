import "../styles/utility.css";
import "../styles/contact.css"
import '../styles/index.css';
import { useState } from 'react';


export default function Contact() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleMail = () => {
        setStatus('');
        fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2MjgyNTg2MDExMTNlNjU3NmE0NTMzNzM2NWZlOGI4OTczZDE2NzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwMTgzNTQxMzY4MTM3MzkxNTgzIiwiZW1haWwiOiJtdXJpbG8udGNhc3RpbGhvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiZkltVkE1VHo5Z0FEWHZhYmgtZmt0dyIsImlhdCI6MTczMjc1NzU3MCwiZXhwIjoxNzMyNzYxMTcwfQ.emNO0Zaayj6nH88RUOMUzABa3bEwmhux0UMXA7JV8rdJYU97dEYoZOPTrNaXbCdJi1amIDVSy4EGc-Ox57zCnv0smV_RS3eWijMWy1USe7gar0VqMs7Rz9ubO-sAkEYqEZbzHqeLp-UCinjpDcHX_LNa2qVOqLWT_oeRVZEFtkjNWrjgA6iST-ikCZarBIKTqV8pSlrYeY_94g032orooidCoLbbvR5fJF10B_x8J4q0eaQpAnfC1l16kQNgETJB5I9rt-kQ34OniT7rKeQJsBrdqIHd2AFqKSPq32D3XFS2PCbQhYIluKKNURV6-NMRZujoo0dJkwbI15am1OJrTQ',
            },
            body: JSON.stringify({
                email,
                message,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.text().then((text) => {
                        throw new Error(text);
                    });
                }
                return response.text();
            })
            .then((_data) => {
                setStatus('Email enviado com sucesso!');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                setStatus('Erro ao enviar o email.');
                console.error('Erro:', error);
            });
    };

    return (
    <section id="contact">
        <div className="contact-header">
            <h3>Envie sua dúvida</h3>
            <h2>Entre em contato</h2>
            <p>
                Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder. 😇
            </p>
        </div>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); handleMail(); }}>
            <div className="form-inputs">
                <input type="email" placeholder="Seu melhor Email" id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} required
                />
                <textarea placeholder="Motivo do contato: Ex: Gostei muito do produto X, poderia me enviar um orçamento?" id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required>
                </textarea>
            </div>
            <div className="form-button">
                <button type="submit">Enviar</button>
            </div>
        </form>
        {status && (
                <p className={status.includes('sucesso') ? 'success-message' : 'error-message'}>
                    {status}
                </p>
            )}
    </section>
    )
}
