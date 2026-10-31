import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Este arquivo roda no Node.js - não use APIs de navegador aqui.
const config: Config = {
  title: 'CIEE — Portal de APIs de Integração',
  tagline: 'Documentação Técnica para Clientes e Parceiros',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  // URL e caminho de publicação no GitHub Pages.
  url: 'https://kakouz.github.io',
  baseUrl: '/poc-docs/',
  organizationName: 'Kakouz',
  projectName: 'poc-docs',
  trailingSlash: true,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Kakouz/poc-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CIEE APIs',
      logo: {
        alt: 'CIEE — Portal de APIs de Integração',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentação',
        },
        {
          to: '/docs/category/clientes',
          label: 'Clientes',
          position: 'left',
        },
        {
          type: 'html',
          position: 'right',
          value:
            '<span class="ciee-navbar-badge">🔒 Uso Restrito / Homologação</span>',
        },
        {
          href: 'https://github.com/Kakouz/poc-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Introdução',
              to: '/docs/geral/introducao',
            },
            {
              label: 'Clientes homologados',
              to: '/docs/category/clientes',
            },
            {
              label: 'APIs',
              to: '/docs/apis/exemplo',
            },
          ],
        },
        {
          title: 'Projeto',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Kakouz/poc-docs',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} CIEE — Centro de Integração Empresa-Escola. Uso restrito a clientes e parceiros homologados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
