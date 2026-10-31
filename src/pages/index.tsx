import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function IconClients() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path
        d="M4 20v-1.5A3.5 3.5 0 0 1 7.5 15h5a3.5 3.5 0 0 1 3.5 3.5V20M10 11.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM16.5 4.7a3 3 0 0 1 0 5.6M18 15h.5a3.5 3.5 0 0 1 3.5 3.5V20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconContract() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path
        d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1ZM14 3.5v4h4M9 12h6M9 15.5h6M9 19h3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSecurity() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path
        d="M12 3.5 5 6.3v5.2c0 4.3 2.9 7.5 7 9 4.1-1.5 7-4.7 7-9V6.3L12 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9.3 12 1.8 1.8 3.7-3.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Card = {
  title: string;
  description: ReactNode;
  Icon: () => ReactNode;
  action?: {
    label: string;
    to: string;
  };
  status?: string;
};

const cards: Card[] = [
  {
    title: 'Visão por Cliente',
    description: (
      <>
        Documentação segmentada para grandes contas integradas. Acesse as
        especificações dedicadas para parceiros como <strong>Itaú</strong>,{' '}
        <strong>Grupo Assobes</strong> e demais instituições.
      </>
    ),
    Icon: IconClients,
    action: {
      label: 'Explorar clientes',
      to: '/docs/category/clientes',
    },
  },
  {
    title: 'Contratos e Termos',
    description: (
      <>
        Endpoints para emissão de termos de compromisso, aditivos, cadastro
        prévio de estudantes e validação de dados em tempo real.
      </>
    ),
    Icon: IconContract,
    status: 'Documentação em evolução',
  },
  {
    title: 'Padrão Restful & OAuth2',
    description: (
      <>
        Rotas estruturadas sob padrão REST, payload em JSON e autenticação via
        tokens de acesso individuais por contrato de serviço.
      </>
    ),
    Icon: IconSecurity,
    status: 'Documentação em evolução',
  },
];

function HomepageHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className="container">
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            🔒 Uso Interno e Clientes Homologados
          </span>
          <Heading as="h1" className={styles.heroTitle}>
            Portal de APIs de Integração CIEE
          </Heading>
          <p className={styles.heroSubtitle}>
            Catálogo oficial de APIs para contratação e gestão de estagiários e
            aprendizes. Reservado para parceiros e sistemas parceiros
            autorizados.
          </p>
          <div className={styles.buttons}>
            <Link
              className={`button button--lg ${styles.primaryButton}`}
              to="/docs/geral/introducao">
              Explorar Catálogo de APIs
              <span className={styles.buttonArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="Catálogo oficial de APIs do CIEE para contratação e gestão de estagiários e aprendizes. Acesso restrito a clientes e parceiros homologados.">
      <HomepageHero />
      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Documentação por perfil</span>
              <Heading as="h2" className={styles.sectionTitle}>
                Encontre a integração que você precisa
              </Heading>
              <p className={styles.sectionSubtitle}>
                Acesse as especificações técnicas, os contratos de serviço e os
                padrões de segurança que orientam a integração com o CIEE.
              </p>
            </div>

            <div className={styles.cardGrid}>
              {cards.map(({title, description, Icon, action, status}) => (
                <article className={styles.card} key={title}>
                  <div className={styles.iconWrap}>
                    <Icon />
                  </div>
                  <Heading as="h3" className={styles.cardTitle}>
                    {title}
                  </Heading>
                  <p className={styles.cardDescription}>{description}</p>
                  <div className={styles.cardFooter}>
                    {action ? (
                      <Link className={styles.cardLink} to={action.to}>
                        {action.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <span className={styles.cardStatus}>{status}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <p className={styles.notice}>
              <span aria-hidden="true">🔒</span>
              A documentação é destinada a clientes e parceiros homologados. Em
              caso de dúvida sobre credenciais de acesso, acione o time de
              integração do CIEE.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
