import React from 'react';

const Contact = () => (
  <div className="contact-page">
    <p>Contate-me</p>
    <div>
      <span className="contact-container">
        <span className="contacts">
          <p>
            <i className="fab fa-whatsapp"> (11) 96864-1335</i>
          </p>
          <p>
            <i className="far fa-envelope-open">
              henriquelima.jsdev@hotmail.com
            </i>
          </p>
          <span className="media">
            <a
              href="https://www.linkedin.com/in/henrique-silva-lima-80077915b/"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-linkedin-in"
            >
              {' '}
            </a>
            <a
              href="https://github.com/henriqueyang"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-github"
            >
              {' '}
            </a>
          </span>
        </span>
      </span>

      <span className="contact-container">
        <form
          action="https://formspree.io/henriqueyang17@gmail.com"
          method="POST"
          target="_blank"
        >
          <input
            type="email"
            name="email"
            autoComplete="off"
            placeholder="Informe seu email"
            required
          />
          <input
            type="text"
            name="assunto"
            autoComplete="off"
            placeholder="Informe o assunto"
            required
          />
          <textarea
            type="text"
            name="mensagem"
            placeholder="Deixe sua mensagem :)"
            required
          />
          <button className="btn-blue" type="submit">
            ENVIAR MENSANGEM
          </button>
        </form>
      </span>
    </div>
  </div>
);

export default Contact;
