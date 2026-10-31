import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/">
            Ler a documentação
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Prova de conceito para documentar APIs com Docusaurus e publicar no GitHub Pages.">
      <HomepageHeader />
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--4">
            <Heading as="h2">Objetivo</Heading>
            <p>
              Validar o Docusaurus como ferramenta para publicar a documentação
              das nossas APIs de forma simples e versionada.
            </p>
          </div>
          <div className="col col--4">
            <Heading as="h2">Conteúdo</Heading>
            <p>
              Esta versão reduzida contém a página inicial e uma API de exemplo,
              usadas apenas para validar o fluxo de publicação.
            </p>
          </div>
          <div className="col col--4">
            <Heading as="h2">Próximos passos</Heading>
            <p>
              Após a validação do time, adicionaremos as APIs reais, guias de
              autenticação, exemplos e versionamento.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
