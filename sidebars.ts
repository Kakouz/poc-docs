import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// Menu lateral explícito do Portal de APIs do CIEE.
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '📌 Geral (Comum)',
      collapsed: false,
      items: ['geral/introducao', 'geral/autenticacao'],
    },
    {
      type: 'category',
      label: '🏦 Grupo Assobes',
      collapsed: false,
      items: [
        'assobes/inserir-cadastro',
        'assobes/atualizar-cadastro',
        'assobes/buscar-supervisores',
        'assobes/buscar-cursos',
        'assobes/buscar-locais-contrato',
        'assobes/gerar-tce',
        'assobes/gerar-ta',
        'assobes/receber-contrato-assinado',
        'assobes/rescisao-contrato',
      ],
    },
    {
      type: 'category',
      label: '🏛️ Itaú (Escopo Estendido)',
      collapsed: false,
      items: [
        'itau/inserir-cadastro',
        'itau/atualizar-cadastro',
        'itau/buscar-supervisores',
        'itau/buscar-cursos',
        'itau/buscar-locais-contrato',
        'itau/gerar-tce',
        'itau/gerar-ta',
        'itau/receber-contrato-assinado',
        'itau/rescisao-contrato',
        'itau/prorrogacao-alterar-supervisor',
        'itau/prorrogacao-alterar-dados-contrato',
      ],
    },
  ],
};

export default sidebars;
