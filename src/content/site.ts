import type { Locale, SiteContent } from './types'

/**
 * All user-facing home + shell copy, grounded in COPY.md. Portuguese is
 * authoritative; English is a faithful translation with no new claims.
 * Section ids are shared across locales so anchors and the language switch
 * line up.
 */

const pt: SiteContent = {
  meta: {
    title: 'HLC Energias Renováveis e Infraestruturas, LDA',
    description:
      'Empresa moçambicana de contratação e execução para projectos de energia, infra-estruturas e construção, em Consórcio com a Construction Corporation No. 1 – JSC (CC1).',
  },
  nav: [
    { label: 'Início', to: '#top' },
    { label: 'Sobre', to: '#sobre' },
    { label: 'Consórcio', to: '#consorcio' },
    { label: 'Áreas de actuação', to: '#areas' },
    { label: 'Projectos', to: '#projectos' },
    { label: 'Compromisso', to: '#compromisso' },
  ],
  hero: {
    title: 'HLC Energias Renováveis e Infraestruturas, LDA',
    tagline: 'Energia e infra-estruturas em Moçambique',
    body: [
      'Entidade moçambicana de contratação e execução, em Consórcio com a CC1 (Vietname), o parceiro técnico e EPC.',
    ],
    primary: { label: 'Conheça a HLC', to: '#sobre' },
    secondary: { label: 'Contactos', to: '#contactos' },
  },
  about: {
    label: 'Sobre a HLC',
    heading: 'Sobre a HLC',
    body: [
      'HLC Moçambique é o nome comercial da HLC Energias Renováveis e Infraestruturas, LDA.',
      'A HLC Moçambique é uma sociedade constituída ao abrigo da lei moçambicana, membro do Grupo HLC (Vietname). A sociedade foi constituída com um propósito definido: servir como entidade moçambicana de contratação e de execução para os projectos de energia, infra-estruturas e construção do Grupo e dos seus parceiros técnicos em Moçambique.',
      'A estrutura é deliberada e corresponde à prática corrente dos empreiteiros internacionais na entrada em novos mercados: a entidade local assegura o enquadramento jurídico, as licenças, a mão-de-obra e o conteúdo local; o parceiro técnico do Consórcio assegura a experiência, a engenharia, a capacidade de execução e as garantias.',
    ],
  },
  consortium: {
    label: 'Consórcio',
    heading: 'O Consórcio HLC–CC1',
    body: [
      'Para projectos de energia e infra-estruturas em Moçambique, a HLC Moçambique opera em regime de Consórcio contratual com a Construction Corporation No. 1 – JSC (CC1), o parceiro técnico e EPC vietnamita do Consórcio.',
      'Perante o cliente, a HLC Moçambique é signatária dos contratos em Moçambique. A CC1 assegura a engenharia, a execução EPC, o suporte técnico e as garantias nos termos do Acordo de Consórcio.',
    ],
    roles: {
      localHeading: 'Entidade local',
      localName: 'HLC Moçambique',
      localItems: [
        'Entidade contratante e de execução local',
        'Pessoa jurídica moçambicana',
        'Licenciamento',
        'Mão-de-obra e conteúdo local',
        'Logística e apoio às obras',
      ],
      partnerHeading: 'Parceiro técnico',
      partnerName: 'CC1 — Construction Corporation No. 1',
      partnerItems: [
        'Capacidade técnica e de execução EPC',
        'Engenharia e gestão de projecto',
        'Quadros técnicos destacados',
        'Sistemas ISO (qualidade, ambiente, segurança)',
        'Garantias de execução',
        'Capacidade financeira',
      ],
    },
    credentials: {
      heading: 'Credenciais da CC1',
      items: [
        'Fundada em 1979 — uma das construtoras mais experientes do Vietname',
        'Sociedade cotada, de capitais integralmente privados',
        '45 anos de experiência; empreiteiro geral e EPC desde 2007',
        'Certificações ISO 9001, ISO 14001 e ISO 45001',
      ],
    },
    transfer: {
      heading: 'Transferência de capacidade',
      intro:
        'Modelo estruturado de transferência de competências técnicas e de gestão da CC1 para as operações do Consórcio em Moçambique.',
      pillars: [
        {
          title: 'Engenheiros e gestores destacados',
          body: 'Destacamento de engenheiros e gestores de projecto da CC1 para as obras em Moçambique, em regime definido por projecto.',
        },
        {
          title: 'Sistemas ISO de gestão',
          body: 'Aplicação dos sistemas de gestão de qualidade, ambiente e segurança da CC1 (ISO 9001/14001/45001) a todas as obras do Consórcio.',
        },
        {
          title: 'Aprovação técnica',
          body: 'Aprovação técnica dos projectos de engenharia pelos quadros seniores da CC1.',
        },
        {
          title: 'Equipamentos especializados',
          body: 'Mobilização de equipamentos especializados pela CC1 conforme as necessidades de cada obra.',
        },
      ],
      note: {
        title: 'Moçambicanização dos quadros',
        body: 'Formação em serviço de técnicos moçambicanos integrados nas equipas de obra, com metas de progressiva moçambicanização dos quadros técnicos e de gestão.',
      },
    },
  },
  legal: {
    heading: 'Informação legal',
    lines: [
      'HLC Energias Renováveis e Infraestruturas, LDA',
      'NUIT: 402198583',
      'N.º de entidade legal: 105074676',
      'Av./Rua de Micaia, Bairro Costa do Sol, Quarteirão 56, Casa N.º 115, Cidade de Maputo',
      'República de Moçambique',
    ],
  },
  areas: {
    label: 'Áreas de actuação',
    heading: 'Áreas de actuação',
    intro:
      'O Consórcio HLC–CC1 foca a sua actuação nos seguintes segmentos do sector energético e de infra-estruturas em Moçambique:',
    items: [
      { title: 'Centrais eléctricas EPC', body: 'Térmicas, hídricas e renováveis.' },
      { title: 'Linhas de transporte e distribuição' },
      { title: 'Subestações' },
      {
        title: 'Projectos solares IPP',
        body: 'Incluindo soluções de média escala ligadas à rede de 33 kV.',
      },
      { title: 'Electrificação rural', body: 'Mini-redes e sistemas isolados.' },
      {
        title: 'Obras civis e industriais',
        body: 'Construção civil de grande escala no âmbito de projectos de energia e infra-estruturas.',
      },
    ],
    outro:
      'A cobertura sectorial do Consórcio combina a experiência da CC1 em projectos de energia de grande escala com a presença local da HLC Moçambique, permitindo actuar desde centrais de produção até electrificação rural.',
  },
  commitment: {
    label: 'Compromisso nacional',
    heading: 'Compromisso com Moçambique',
    intro:
      'A HLC Energias Renováveis e Infraestruturas, LDA assume um compromisso de longo prazo com o desenvolvimento do sector energético e de infra-estruturas de Moçambique, assente nos seguintes pilares:',
    pillars: [
      {
        title: 'Emprego local',
        body: 'Prioridade à contratação e formação de trabalhadores moçambicanos em todas as fases dos projectos.',
      },
      {
        title: 'Fornecedores nacionais',
        body: 'Aquisição preferencial de bens e serviços a fornecedores nacionais e provinciais.',
      },
      {
        title: 'Conformidade legal',
        body: 'Integral cumprimento da legislação moçambicana aplicável ao sector eléctrico e à construção.',
      },
      {
        title: 'Articulação institucional',
        body: 'Articulação permanente com as autoridades nacionais e provinciais.',
      },
    ],
    notes: [
      'Conteúdo local como pilar estratégico de todas as operações do Consórcio.',
      'Progressiva capacitação de quadros moçambicanos para autonomia operacional.',
    ],
  },
  projects: {
    label: 'Projectos de referência',
    heading: 'Experiência técnica comprovada',
    intro:
      'Projectos de energia e infra-estruturas de grande escala executados pelo nosso parceiro técnico, a Construction Corporation No. 1 – JSC (CC1).',
    cta: { label: 'Ver projectos de referência', to: '#projectos' },
    record: {
      heading: 'Outras infra-estruturas de grande escala executadas pela CC1',
      intro:
        'Além da energia, a CC1 executa infra-estruturas de grande escala — aeroportos, transportes urbanos, rodovias e complexos industriais.',
      items: [
        { name: 'Long Thanh International Airport — Terminal de Passageiros, Fase 1', period: '2023–2026' },
        { name: 'Tan Son Nhat International Airport — Terminal T3', period: '2022–2024' },
        { name: 'Metro de Ho Chi Minh — Linha 1 (estações e túneis)', period: '2014–2018' },
        { name: 'Auto-estrada Norte–Sul (várias secções, 37–73 km cada)', period: '2021–2025' },
        { name: 'Refinaria e Complexo Petroquímico de Nghi Son (pacotes de construção)', period: '2013–2016' },
        { name: 'Complexo Petroquímico de Long Son (pacotes de construção)', period: '2020–2022' },
        { name: 'Estação de Tratamento de Água de Thu Duc — Fase 3 (300.000 m³/dia)', period: '2013–2015' },
      ],
    },
  },
  contact: {
    label: 'Contactos',
    heading: 'Contactos',
    infoTitle: 'Informação de contacto',
    addressLabel: 'Morada',
    address:
      'Moçambique, Cidade de Maputo, Distrito de Kamavota, Bairro Costa do Sol, Rua de Micaia, Q. N.º 56, N.º 115',
    emailLabel: 'E-mail',
    email: 'info.moz@hlmic.com',
    phoneLabel: 'Telefone',
    phone: '',
    cta: 'Enviar e-mail',
    identity: [
      'HLC Energias Renováveis e Infraestruturas, LDA',
      'Em Consórcio com Construction Corporation No. 1 – JSC (CC1)',
      'Sector da Energia e Infra-Estruturas',
      'República de Moçambique',
    ],
    form: {
      heading: 'Tem alguma',
      headingAccent: 'questão?',
      intro:
        'Preencha o formulário ou contacte-nos através dos dados indicados.',
      name: 'Nome',
      namePlaceholder: 'Introduza o nome',
      email: 'E-mail',
      emailPlaceholder: 'Introduza o e-mail',
      phone: 'Telefone',
      phonePlaceholder: 'Introduza o telefone (opcional)',
      company: 'Empresa',
      companyPlaceholder: 'Introduza o nome da empresa',
      message: 'Mensagem',
      messagePlaceholder: 'Introduza a mensagem',
      submit: 'Enviar',
      consent: 'Autorizo o tratamento dos meus dados para resposta a este contacto.',
      privacy:
        'Os seus dados são utilizados apenas para responder a este contacto e não são partilhados com terceiros.',
      sending: 'A enviar…',
      success: 'Mensagem enviada. Entraremos em contacto em breve.',
      error: 'Não foi possível enviar. Tente novamente ou escreva para o e-mail indicado.',
    },
  },
  footer: {
    tagline: 'Sector da Energia e Infra-Estruturas',
    navTitle: 'Navegação',
    areasTitle: 'Áreas de actuação',
    contactTitle: 'Contactos',
    contactCta: 'Fale connosco',
    backToTop: 'Voltar ao topo',
    copyright:
      '© 2026 HLC Energias Renováveis e Infraestruturas, LDA. Todos os direitos reservados.',
  },
  ui: {
    skipToContent: 'Saltar para o conteúdo',
    switchTo: 'English',
    menu: 'Menu',
    close: 'Fechar',
    contact: 'Contactos',
  },
}

const en: SiteContent = {
  meta: {
    title: 'HLC Renewable Energies and Infrastructures, LDA',
    description:
      'Mozambican contracting and execution company for energy, infrastructure and construction projects, operating in Consortium with Construction Corporation No. 1 – JSC (CC1).',
  },
  nav: [
    { label: 'Home', to: '#top' },
    { label: 'About', to: '#sobre' },
    { label: 'Consortium', to: '#consorcio' },
    { label: 'Areas of activity', to: '#areas' },
    { label: 'Projects', to: '#projectos' },
    { label: 'Commitment', to: '#compromisso' },
  ],
  hero: {
    title: 'HLC Renewable Energies and Infrastructures, LDA',
    tagline: 'Energy and infrastructure in Mozambique',
    body: [
      'Mozambican contracting and execution entity, in Consortium with CC1 (Vietnam), the technical and EPC partner.',
    ],
    primary: { label: 'About HLC', to: '#sobre' },
    secondary: { label: 'Contact', to: '#contactos' },
  },
  about: {
    label: 'About HLC',
    heading: 'About HLC',
    body: [
      'HLC Mozambique is the trading name of HLC Renewable Energies and Infrastructures, LDA.',
      'HLC Mozambique is a company incorporated under Mozambican law, and a member of the HLC Group (Vietnam). The company was established with a defined purpose: to serve as the Mozambican contracting and execution entity for the energy, infrastructure, and construction projects of the Group and its technical partners in Mozambique.',
      "The structure is deliberate and corresponds to the current practice of international contractors entering new markets: the local entity ensures the legal framework, licenses, workforce, and local content; the Consortium's technical partner ensures the experience, engineering, execution capacity, and guarantees.",
    ],
  },
  consortium: {
    label: 'Consortium',
    heading: 'The HLC–CC1 Consortium',
    body: [
      'For energy and infrastructure projects in Mozambique, HLC Mozambique operates under a contractual Consortium with Construction Corporation No. 1 – JSC (CC1), the Vietnamese technical and EPC partner of the Consortium.',
      'Before the client, HLC Mozambique is the signatory to contracts in Mozambique. CC1 provides the engineering, EPC execution, technical support and guarantees under the terms of the Consortium Agreement.',
    ],
    roles: {
      localHeading: 'Local entity',
      localName: 'HLC Mozambique',
      localItems: [
        'Local contracting and execution entity',
        'Mozambican legal entity',
        'Licensing',
        'Workforce and local content',
        'Logistics and works support',
      ],
      partnerHeading: 'Technical partner',
      partnerName: 'CC1 — Construction Corporation No. 1',
      partnerItems: [
        'Technical and EPC execution capacity',
        'Engineering and project management',
        'Assigned technical personnel',
        'ISO systems (quality, environment, safety)',
        'Execution guarantees',
        'Financial capacity',
      ],
    },
    credentials: {
      heading: 'CC1 credentials',
      items: [
        "Founded in 1979 — one of Vietnam's most experienced construction companies",
        'Publicly listed company with fully private capital',
        '45 years of experience; general and EPC contractor since 2007',
        'ISO 9001, ISO 14001 and ISO 45001 certified',
      ],
    },
    transfer: {
      heading: 'Capacity transfer',
      intro:
        "A structured model for transferring CC1's technical and management skills to the Consortium's operations in Mozambique.",
      pillars: [
        {
          title: 'Seconded engineers and managers',
          body: 'Secondment of CC1 engineers and project managers to works in Mozambique, on a per-project basis.',
        },
        {
          title: 'ISO management systems',
          body: "Application of CC1's quality, environment and safety management systems (ISO 9001/14001/45001) to all Consortium works.",
        },
        {
          title: 'Technical sign-off',
          body: "Technical approval of engineering designs by CC1's senior staff.",
        },
        {
          title: 'Specialised equipment',
          body: 'Mobilisation of specialised equipment by CC1 as each project requires.',
        },
      ],
      note: {
        title: 'Localisation of Mozambican personnel',
        body: 'On-the-job training of Mozambican technicians embedded in site teams, with targets for the progressive localisation of technical and management staff.',
      },
    },
  },
  legal: {
    heading: 'Legal information',
    lines: [
      'HLC Energias Renováveis e Infraestruturas, LDA',
      'NUIT: 402198583',
      'Legal entity number: 105074676',
      'Av./Rua de Micaia, Bairro Costa do Sol, Quarteirão 56, Casa N.º 115, Maputo City',
      'Republic of Mozambique',
    ],
  },
  areas: {
    label: 'Areas of activity',
    heading: 'Areas of activity',
    intro:
      'The HLC–CC1 Consortium focuses its activities on the following energy and infrastructure segments in Mozambique:',
    items: [
      { title: 'EPC power plants', body: 'Thermal, hydro and renewable.' },
      { title: 'Transmission and distribution lines' },
      { title: 'Substations' },
      {
        title: 'Solar IPP projects',
        body: 'Including medium-scale solutions connected to the 33 kV grid.',
      },
      { title: 'Rural electrification', body: 'Mini-grids and isolated systems.' },
      {
        title: 'Civil and industrial works',
        body: 'Large-scale civil construction within energy and infrastructure projects.',
      },
    ],
    outro:
      "The Consortium's sector coverage combines CC1's experience in large-scale energy projects with HLC Mozambique's local presence, enabling activities ranging from generation plants to rural electrification.",
  },
  commitment: {
    label: 'National commitment',
    heading: 'Commitment to Mozambique',
    intro:
      "HLC Renewable Energies and Infrastructures, LDA makes a long-term commitment to the development of Mozambique's energy and infrastructure sector, based on the following pillars:",
    pillars: [
      {
        title: 'Local employment',
        body: 'Priority is given to recruiting and training Mozambican workers throughout all project phases.',
      },
      {
        title: 'National suppliers',
        body: 'Preference is given to purchasing goods and services from national and provincial suppliers.',
      },
      {
        title: 'Legal compliance',
        body: 'Full compliance with Mozambican legislation applicable to the electricity and construction sectors.',
      },
      {
        title: 'Institutional coordination',
        body: 'Permanent coordination with national and provincial authorities.',
      },
    ],
    notes: [
      'Local content as a strategic pillar of all Consortium operations.',
      'Progressive capacity development of Mozambican personnel for operational autonomy.',
    ],
  },
  projects: {
    label: 'Reference projects',
    heading: 'Proven technical experience',
    intro:
      'Large-scale energy and infrastructure projects executed by our technical partner, Construction Corporation No. 1 – JSC (CC1).',
    cta: { label: 'View reference projects', to: '#projectos' },
    record: {
      heading: 'Other large-scale infrastructure delivered by CC1',
      intro:
        'Beyond energy, CC1 delivers large-scale infrastructure — airports, urban transit, expressways and industrial complexes.',
      items: [
        { name: 'Long Thanh International Airport — Passenger Terminal, Phase 1', period: '2023–2026' },
        { name: 'Tan Son Nhat International Airport — Terminal T3', period: '2022–2024' },
        { name: 'Ho Chi Minh City Urban Railway Line 1 (metro stations and tunnels)', period: '2014–2018' },
        { name: 'North–South Expressway (various sections, 37–73 km each)', period: '2021–2025' },
        { name: 'Nghi Son Refinery & Petrochemical Complex (construction packages)', period: '2013–2016' },
        { name: 'Long Son Petrochemical Complex (construction packages)', period: '2020–2022' },
        { name: 'Thu Duc Water Plant — Phase 3 (300,000 m³/day)', period: '2013–2015' },
      ],
    },
  },
  contact: {
    label: 'Contact',
    heading: 'Contact',
    infoTitle: 'Contact information',
    addressLabel: 'Address',
    address:
      'Mozambique, Maputo City, Kamavota District, Costa do Sol Neighbourhood, Rua de Micaia, Quarter No. 56, No. 115',
    emailLabel: 'Email',
    email: 'info.moz@hlmic.com',
    phoneLabel: 'Phone',
    phone: '',
    cta: 'Send email',
    identity: [
      'HLC Renewable Energies and Infrastructures, LDA',
      'In Consortium with Construction Corporation No. 1 – JSC (CC1)',
      'Energy and Infrastructure Sector',
      'Republic of Mozambique',
    ],
    form: {
      heading: 'Do you have',
      headingAccent: 'any questions?',
      intro: 'Fill out the form or contact us using the details provided.',
      name: 'Name',
      namePlaceholder: 'Enter name',
      email: 'Email',
      emailPlaceholder: 'Enter email',
      phone: 'Phone',
      phonePlaceholder: 'Enter phone (optional)',
      company: 'Company',
      companyPlaceholder: 'Enter company name',
      message: 'Message',
      messagePlaceholder: 'Enter message',
      submit: 'Submit',
      consent: 'I agree to the processing of my data to respond to this enquiry.',
      privacy:
        'Your data is used only to respond to this enquiry and is not shared with third parties.',
      sending: 'Sending…',
      success: 'Message sent. We will get back to you soon.',
      error: 'Could not send. Please try again or email us directly.',
    },
  },
  footer: {
    tagline: 'Energy and Infrastructure Sector',
    navTitle: 'Navigation',
    areasTitle: 'Areas of activity',
    contactTitle: 'Contact',
    contactCta: 'Get in touch',
    backToTop: 'Back to top',
    copyright:
      '© 2026 HLC Renewable Energies and Infrastructures, LDA. All rights reserved.',
  },
  ui: {
    skipToContent: 'Skip to content',
    switchTo: 'Português',
    menu: 'Menu',
    close: 'Close',
    contact: 'Contact',
  },
}

export const content: Record<Locale, SiteContent> = { pt, en }
