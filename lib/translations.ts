export type Lang = "en" | "es" | "pt";

export type Dict = {
  nav: {
    services: string;
    casestudies: string;
    contact: string;
  };
  services: {
    heading: string;
    sub: string;
    items: { title: string; desc: string }[];
  };
  sectorIdeas: {
    heading: string;
    sub: string;
    sectors: { name: string; items: string[] }[];
  };
  hero: {
    heading1: string;
    headingItalic: string;
    heading2: string;
    sub: string;
    cta1: string;
    cta2: string;
    badges: string[];
  };
  proof: {
    label: string;
  };
  problems: {
    heading: string;
    sub: string;
    items: { title: string; desc: string }[];
  };
  solutions: {
    heading: string;
    colArea: string;
    colWhat: string;
    colImpact: string;
    rows: { area: string; what: string; impact: string }[];
    cta: string;
  };
  methodology: {
    heading: string;
    sub: string;
    principles: string[];
    steps: { title: string; timeline: string }[];
  };
  comparison: {
    heading: string;
    goodItems: string[];
  };
  whyus: {
    heading: string;
    features: { title: string; desc: string }[];
    cta: string;
  };
  clientCards: {
    sectionLabel: string;
    heading: string;
    subtitle: string;
    restricted: string;
    clients: { desc: string }[];
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  cta: {
    heading: string;
    sub: string;
    btn1: string;
    btn2: string;
    badge: string;
  };
  footer: {
    copyright: string;
    links: string[];
  };
};

const en: Dict = {
  nav: {
    services: "Services",
    casestudies: "Case Studies",
    contact: "Contact",
  },
  services: {
    heading: "What we do",
    sub: "Three lines of work — from strategy to code in production.",
    items: [
      {
        title: "AI Labs",
        desc: "Co-creation workshops to discover where AI creates real value in your context — with the team directly involved in the operation.",
      },
      {
        title: "Market Intelligence",
        desc: "Custom sector reports — data that informs decisions, not just presentations.",
      },
      {
        title: "Development",
        desc: "Proprietary solutions in your infrastructure — your code, no SaaS dependency or external vendor.",
      },
    ],
  },
  sectorIdeas: {
    heading: "What's already possible — in your sector, today",
    sub: "Concrete AI applications for the operations that generate the most data.",
    sectors: [
      {
        name: "Logistics",
        items: [
          "Automatic invoice extraction",
          "Delay forecasting by route and history",
          "Early out-of-stock alerts",
          "Return reason analysis by SKU",
        ],
      },
      {
        name: "Retail / E-commerce",
        items: [
          "Price monitoring with automatic alerts",
          "Bulk product description generation",
          "AI-driven abandoned cart discount decisions",
          "Demand forecasting with auto-ordering",
        ],
      },
      {
        name: "Services",
        items: [
          "WhatsApp chatbot trained on your business",
          "Dynamic pricing by demand and seasonality",
          "Seasonality forecasting for team planning",
          "Review analysis to detect what drives churn",
        ],
      },
      {
        name: "Compliance",
        items: [
          "Regulatory obligation monitoring (LGPD, BACEN, CVM)",
          "AI-powered legal document classification",
          "Anomaly detection in contracts and audits",
          "AI-assisted due diligence for M&A",
        ],
      },
    ],
  },
  hero: {
    heading1: "Digital transformation that starts",
    headingItalic: "with people,",
    heading2: "not with the tool.",
    sub: "We identify, organize, and unlock the value of data your business already generates — and build custom technology solutions that optimize your operations. Diagnosis to deploy in 90 days.",
    cta1: "Get Free Diagnosis",
    cta2: "See Our Work",
    badges: ["We Co-create", "We Train", "We Deliver"],
  },
  proof: {
    label: "Sectors we serve",
  },
  problems: {
    heading: "Why most AI initiatives fail",
    sub: "Technology isn't the bottleneck. The problem is in how it gets adopted.",
    items: [
      {
        title: "Tools deployed without the people",
        desc: "Most AI projects fail from lack of team buy-in, not lack of technology. Without co-creation, the system becomes another tool nobody uses.",
      },
      {
        title: "Processes that limit what the team can deliver",
        desc: "Manual approvals, spreadsheet handoffs, duplicated data across systems. Every step that could be automated is time spent on process — not on the business.",
      },
      {
        title: "Data you generate but never act on",
        desc: "Your operation already produces the signal. What's missing is turning it into action — without depending on an external vendor to do it.",
      },
    ],
  },
  solutions: {
    heading: "What we build",
    colArea: "Area",
    colWhat: "What We Build",
    colImpact: "Business Impact",
    rows: [
      { area: "Revenue", what: "Dynamic pricing + demand forecasting", impact: "8–20% revenue uplift" },
      { area: "Operations", what: "Process automation + RPA", impact: "40% less process time" },
      { area: "Logistics", what: "Smart routing + cost optimization", impact: "25–35% lower costs" },
      { area: "Intelligence", what: "Real-time data platforms + dashboards", impact: "Decisions, not guesses" },
      { area: "Compliance", what: "Automated reporting + audit trails", impact: "Zero manual overhead" },
    ],
    cta: "Get Your Free Diagnosis",
  },
  methodology: {
    heading: "Diagnosis to implementation in 90 days",
    sub: "Three principles that guide every project.",
    principles: [
      "We co-create — alongside the people running the operation, from day one",
      "We train — your team uses the system independently, no vendor dependency",
      "We deliver — documented code, running inside your own infrastructure",
    ],
    steps: [
      { title: "Discovery", timeline: "Process map" },
      { title: "Diagnosis", timeline: "Case matrix" },
      { title: "Solution design", timeline: "Architecture plan" },
      { title: "Pilot", timeline: "Prototype + metrics" },
      { title: "Deploy & Optimization", timeline: "System in production" },
    ],
  },
  comparison: {
    heading: "A long-term partner. Not a one-off vendor.",
    goodItems: [
      "We co-create with your team — we don't outsource the work",
      "We train for full autonomy — no vendor lock-in",
      "We deliver documented code running in your infrastructure",
      "Fixed price per milestone — you own the system",
    ],
  },
  whyus: {
    heading: "Built for operators, not committees",
    features: [
      {
        title: "Grounded in your real documents",
        desc: "We start from your balance sheets, DFs, ticketing exports, and logistics logs — not industry benchmarks. Every opportunity we identify is traceable back to a source.",
      },
      {
        title: "You own the system",
        desc: "No vendor lock-in, no SaaS subscriptions. Custom agents built to run inside your own infrastructure, fully documented and transferable.",
      },
    ],
    cta: "Talk to us",
  },
  clientCards: {
    sectionLabel: "Restricted access · Exclusive studies",
    heading: "Systems in production",
    subtitle: "Each study is built from public data, sector research, and financial disclosures.",
    restricted: "Restricted access",
    clients: [
      { desc: "Heavy construction, public tenders, and contract management — market study and custom diagnosis." },
      { desc: "Soy trading, crop planning, and logistics compliance — AI-powered financial impact analysis." },
      { desc: "Cruise terminal, events, and port compliance — study based on public financial disclosures and sector research." },
      { desc: "Ticketing, railway operations, and ICMBio compliance — revenue analysis and predictive maintenance." },
      { desc: "Cable car, events, and gastronomy — dynamic ticketing analysis and predictive maintenance." },
      { desc: "7 ecotourism units (AquaRio, BioParque, Cataratas, Noronha) — flow analysis and ICMBio compliance." },
    ],
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        q: "How does the free diagnosis work?",
        a: "We map your operation, the processes your team handles day-to-day, and the data you already generate. From there, we identify the 3 biggest opportunities for automation or AI in your business. You get a written summary within 48 hours — no generic benchmarks.",
      },
      {
        q: "Do we need to replace our existing systems?",
        a: "No. We integrate with what you have — ERP, CRM, custom APIs. The goal is to add intelligence to your current infrastructure, not force a migration.",
      },
      {
        q: "Do you replace our IT or data team?",
        a: "No — we work alongside them. We handle the AI architecture and model building; your team handles infrastructure access and deployment approvals. Knowledge transfer is part of every project.",
      },
      {
        q: "What industries do you know best?",
        a: "Logistics, retail and e-commerce, services, and compliance. Our work adapts to any operation that generates data and involves repeatable processes — these sectors make up most of our projects.",
      },
    ],
  },
  cta: {
    heading: "Ready for a partner who builds alongside you?",
    sub: "Schedule a 45-min conversation — no commitment, no generic benchmarks.",
    btn1: "Start Diagnosis",
    btn2: "Talk to Us",
    badge: "No commitment. Your code, your team.",
  },
  footer: {
    copyright: "© 2026 River Labs.",
    links: ["Services", "Case Studies", "Contact"],
  },
};

const es: Dict = {
  nav: {
    services: "Servicios",
    casestudies: "Casos de Éxito",
    contact: "Contacto",
  },
  services: {
    heading: "Lo que hacemos",
    sub: "Tres líneas de trabajo — de la estrategia al código en producción.",
    items: [
      {
        title: "AI Labs",
        desc: "Workshops de co-creación para descubrir dónde la IA genera valor real en tu contexto — con el equipo directamente involucrado en la operación.",
      },
      {
        title: "Inteligencia de mercado",
        desc: "Reportes sectoriales personalizados — datos que informan decisiones, no solo presentaciones.",
      },
      {
        title: "Desarrollo",
        desc: "Soluciones propietarias en tu infraestructura — tu código, sin dependencia de SaaS ni proveedor externo.",
      },
    ],
  },
  sectorIdeas: {
    heading: "Lo que ya es posible — en tu sector, hoy",
    sub: "Aplicaciones concretas de IA para las operaciones que generan más datos.",
    sectors: [
      {
        name: "Logística",
        items: [
          "Extracción automática de facturas",
          "Pronóstico de retrasos por ruta e historial",
          "Alertas tempranas de ruptura de stock",
          "Análisis de motivos de devolución por SKU",
        ],
      },
      {
        name: "Retail / E-commerce",
        items: [
          "Monitoreo de precios con alertas automáticas",
          "Generación masiva de descripciones de productos",
          "IA decide descuentos en carritos abandonados",
          "Pronóstico de demanda con pedido automático",
        ],
      },
      {
        name: "Servicios",
        items: [
          "Chatbot en WhatsApp entrenado en tu negocio",
          "Precios dinámicos por demanda y estacionalidad",
          "Pronóstico de estacionalidad para planear equipo",
          "Análisis de reseñas para detectar causas de churn",
        ],
      },
      {
        name: "Compliance",
        items: [
          "Monitoreo de obligaciones regulatorias",
          "Clasificación de documentos jurídicos con IA",
          "Detección de anomalías en contratos y auditorías",
          "Due diligence asistida por IA en M&A",
        ],
      },
    ],
  },
  hero: {
    heading1: "Transformación digital que empieza",
    headingItalic: "por las personas,",
    heading2: "no por la herramienta.",
    sub: "Nos dedicamos a identificar, organizar y potenciar el uso de los datos generados por tu negocio, y a desarrollar soluciones tecnológicas personalizadas que optimicen tu operación. Del diagnóstico al deploy en 90 días.",
    cta1: "Diagnóstico Gratuito",
    cta2: "Ver Nuestro Trabajo",
    badges: ["Co-creamos", "Capacitamos", "Entregamos"],
  },
  proof: {
    label: "Sectores que atendemos",
  },
  problems: {
    heading: "Por qué la mayoría de las iniciativas de IA no funcionan",
    sub: "La tecnología no es el cuello de botella. El problema está en cómo se adopta.",
    items: [
      {
        title: "Ferramentas implantadas sem as pessoas",
        desc: "La mayoría de los proyectos de IA fallan por falta de compromiso del equipo, no por falta de tecnología. Sin cocreación, el sistema se convierte en otra herramienta que nadie usa.",
      },
      {
        title: "Procesos que limitan lo que el equipo puede entregar",
        desc: "Aprobaciones manuales, handoffs por planilla, información duplicada. Cada paso que podría automatizarse es tiempo que el equipo gasta en el proceso — no en el negocio.",
      },
      {
        title: "Datos que generas pero que no se convierten en acción",
        desc: "Tu operación ya produce la señal. Lo que falta es convertirla en acción — sin depender de un proveedor externo para eso.",
      },
    ],
  },
  solutions: {
    heading: "Lo que construimos",
    colArea: "Área",
    colWhat: "Qué Construimos",
    colImpact: "Impacto en el Negocio",
    rows: [
      { area: "Ingresos", what: "Precios dinámicos + pronóstico de demanda", impact: "8–20% más ingresos" },
      { area: "Operaciones", what: "Automatización de procesos + RPA", impact: "40% menos tiempo de proceso" },
      { area: "Logística", what: "Rutas inteligentes + optimización de costos", impact: "25–35% menos costos" },
      { area: "Inteligencia", what: "Plataformas de datos + dashboards en tiempo real", impact: "Decisiones, no suposiciones" },
      { area: "Compliance", what: "Reportes automáticos + trazabilidad de auditoría", impact: "Cero carga manual" },
    ],
    cta: "Obtén Tu Diagnóstico Gratuito",
  },
  methodology: {
    heading: "Del diagnóstico a la implementación en 90 días",
    sub: "Tres principios que guían cada proyecto.",
    principles: [
      "Cocreamos — junto al equipo de la operación, desde el inicio hasta el final",
      "Capacitamos — tu equipo usa el sistema con autonomía, sin depender de nosotros",
      "Entregamos — código documentado, funcionando dentro de tu infraestructura",
    ],
    steps: [
      { title: "Descubrimiento", timeline: "Mapa de proceso" },
      { title: "Diagnóstico", timeline: "Matriz de casos" },
      { title: "Diseño de solución", timeline: "Plan de arquitectura" },
      { title: "Piloto", timeline: "Prototipo + métricas" },
      { title: "Deploy & Optimización", timeline: "Sistema en producción" },
    ],
  },
  comparison: {
    heading: "Socio de largo plazo. No proveedor puntual.",
    goodItems: [
      "Cocreamos con tu equipo — sin tercerizar el trabajo",
      "Capacitamos para autonomía total — sin dependencia de proveedor",
      "Entregamos código documentado funcionando en tu infraestructura",
      "Precio fijo por hito — tú eres dueño del sistema",
    ],
  },
  whyus: {
    heading: "Construido para operadores, no para comités",
    features: [
      {
        title: "Basado en tus documentos reales",
        desc: "Empezamos desde tus balances, DFs, exportaciones de ticketing y logs de logística — no benchmarks de industria. Cada oportunidad que identificamos es rastreable a una fuente.",
      },
      {
        title: "Tú eres dueño del sistema",
        desc: "Sin dependencia de proveedores, sin suscripciones SaaS. Agentes personalizados construidos para correr en tu propia infraestructura, completamente documentados y transferibles.",
      },
    ],
    cta: "Habla con nosotros",
  },
  clientCards: {
    sectionLabel: "Acceso restringido · Estudios exclusivos",
    heading: "Sistemas en producción",
    subtitle: "Cada estudio está construido a partir de datos públicos, investigación sectorial y divulgaciones financieras.",
    restricted: "Acceso restringido",
    clients: [
      { desc: "Construcción pesada, licitaciones y gestión de contratos — estudio de mercado y diagnóstico personalizado." },
      { desc: "Trading de soja, planificación de cosecha y compliance logístico — análisis de impacto financiero con IA." },
      { desc: "Terminal de cruceros, eventos y compliance portuario — estudio basado en divulgaciones financieras públicas e investigación sectorial." },
      { desc: "Boletería, operación ferroviaria y compliance ICMBio — análisis de ingresos y mantenimiento predictivo." },
      { desc: "Teleférico, eventos y gastronomía — análisis de boletería dinámica y mantenimiento predictivo." },
      { desc: "7 unidades de ecoturismo (AquaRio, BioParque, Cataratas, Noronha) — análisis de flujo y compliance ICMBio." },
    ],
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        q: "¿Cómo funciona el diagnóstico gratuito?",
        a: "Mapeamos tu operación, los procesos que tu equipo gestiona día a día y los datos que ya generas. A partir de ahí, identificamos las 3 mayores oportunidades de automatización o IA para tu negocio. Recibes un resumen escrito en 48 horas — sin benchmarks genéricos.",
      },
      {
        q: "¿Necesitamos reemplazar nuestros sistemas existentes?",
        a: "No. Nos integramos con lo que tienes — ERP, CRM, APIs personalizadas. El objetivo es agregar inteligencia a tu infraestructura actual, no forzar una migración.",
      },
      {
        q: "¿Reemplazan a nuestro equipo de IT o datos?",
        a: "No — trabajamos junto a ellos. Nosotros manejamos la arquitectura de IA y la construcción de modelos; tu equipo maneja el acceso a infraestructura y las aprobaciones de despliegue. La transferencia de conocimiento es parte de cada proyecto.",
      },
      {
        q: "¿Qué industrias conocen mejor?",
        a: "Logística, retail y e-commerce, servicios y compliance. Nuestro trabajo se adapta a cualquier operación que genere datos e involucre procesos repetibles — estos sectores representan la mayor parte de nuestros proyectos.",
      },
    ],
  },
  cta: {
    heading: "¿Listo para un socio que co-construya contigo?",
    sub: "Agenda una conversación de 45 min — sin compromiso, sin benchmarks genéricos.",
    btn1: "Iniciar Diagnóstico",
    btn2: "Hablar con Nosotros",
    badge: "Sin compromiso. Tu código, tu equipo.",
  },
  footer: {
    copyright: "© 2026 River Labs.",
    links: ["Servicios", "Casos de Éxito", "Contacto"],
  },
};

const pt: Dict = {
  nav: {
    services: "Serviços",
    casestudies: "Casos de Sucesso",
    contact: "Contato",
  },
  services: {
    heading: "O que fazemos",
    sub: "Três linhas de atuação — da estratégia ao código em produção.",
    items: [
      {
        title: "AI Labs",
        desc: "Workshops de co-criação para descobrir onde a IA gera valor real no seu contexto — com o time diretamente envolvido na operação.",
      },
      {
        title: "Inteligência de mercado",
        desc: "Relatórios setoriais customizados — dados que ajudam com a toma de decisões, não só para apresentações.",
      },
      {
        title: "Desenvolvimento",
        desc: "Soluções proprietárias na sua infraestrutura — código seu, sem dependência de SaaS ou fornecedor externo.",
      },
    ],
  },
  sectorIdeas: {
    heading: "O que já dá pra fazer — no seu setor, agora",
    sub: "Aplicações concretas de IA para as operações que geram mais dados.",
    sectors: [
      {
        name: "Logística",
        items: [
          "Extração automática de notas fiscais",
          "Previsão de atrasos por rota e histórico",
          "Alerta de ruptura de estoque antecipado",
          "Identificação de motivos de devolução por SKU",
        ],
      },
      {
        name: "Varejo / E-commerce",
        items: [
          "Monitoramento de preços com alerta automático",
          "Geração em massa de descrições de produtos",
          "IA decide quais carrinhos abandonados merecem desconto",
          "Previsão de demanda com pedido automático",
        ],
      },
      {
        name: "Serviços",
        items: [
          "Chatbot no WhatsApp treinado no seu negócio",
          "Precificação dinâmica por demanda e sazonalidade",
          "Previsão de estacionalidade para planejar equipe",
          "Análise de avaliações para detectar o que afasta clientes",
        ],
      },
      {
        name: "Compliance",
        items: [
          "Monitoramento de obrigações regulatórias (LGPD, BACEN, CVM)",
          "Triagem e classificação de documentos jurídicos com IA",
          "Detecção de anomalias em contratos e auditorias",
          "Due diligence assistida por IA em M&A",
        ],
      },
    ],
  },
  hero: {
    heading1: "Transformação digital que começa",
    headingItalic: "pelas pessoas,",
    heading2: "não pela ferramenta.",
    sub: "Nos dedicamos a identificar, organizar e potencializar o uso de dados gerados pelo seu negócio, e desenvolver soluções tecnológicas customizadas que otimizem sua operação.",
    cta1: "Diagnóstico Gratuito",
    cta2: "Ver Nosso Trabalho",
    badges: ["Co-criamos", "Capacitamos", "Entregamos"],
  },
  proof: {
    label: "Setores que atendemos",
  },
  problems: {
    heading: "Por que a maioria das iniciativas de IA não funciona",
    sub: "A tecnologia não é mais o gargalo. O problema está em como ela é adotada.",
    items: [
      {
        title: "Ferramentas implantadas sem as pessoas",
        desc: "A maioria dos projetos de IA falha por falta de engajamento da equipe, não por falta de tecnologia.",
      },
      {
        title: "Processos que limitam o que a equipe consegue entregar",
        desc: "Aprovações manuais, handoffs por planilha, informações duplicadas. Cada etapa que poderia ser automatizada é tempo que a equipe gasta no processo — e não no negócio.",
      },
      {
        title: "Dados gerados que não viram decisão",
        desc: "A maioria das empresas gera mais dados do que consegue usar. Mas normalmente estão dispersos, desconectados e não são aproveitados de maneira estratégica.",
      },
    ],
  },
  solutions: {
    heading: "O que construímos",
    colArea: "Área",
    colWhat: "O que Construímos",
    colImpact: "Impacto no Negócio",
    rows: [
      { area: "Receita", what: "Precificação dinâmica + previsão de demanda", impact: "8–20% de aumento de receita" },
      { area: "Operações", what: "Automação de processos + RPA", impact: "40% menos tempo de processo" },
      { area: "Logística", what: "Roteirização inteligente + otimização de custos", impact: "25–35% menos custos" },
      { area: "Inteligência", what: "Plataformas de dados + dashboards em tempo real", impact: "Decisões, não suposições" },
      { area: "Compliance", what: "Relatórios automáticos + trilha de auditoria", impact: "Zero overhead manual" },
    ],
    cta: "Obtenha Seu Diagnóstico Gratuito",
  },
  methodology: {
    heading: "Do diagnóstico à implementação em 90 dias",
    sub: "Três princípios que guiam cada projeto.",
    principles: [
      "Co-criamos — junto ao time da operação, do início ao fim",
      "Capacitamos — sua equipe usa o sistema com autonomia, sem depender de nós",
      "Entregamos — código documentado, rodando dentro da sua infraestrutura",
    ],
    steps: [
      { title: "Descoberta", timeline: "Mapa de processo" },
      { title: "Diagnóstico", timeline: "Matriz de casos" },
      { title: "Design da solução", timeline: "Plano de arquitetura" },
      { title: "Piloto", timeline: "Protótipo + métricas" },
      { title: "Deploy & Otimização", timeline: "Sistema em produção" },
    ],
  },
  comparison: {
    heading: "Parceiro de jornada. Não fornecedor avulso.",
    goodItems: [
      "Co-criamos com o time da operação — sem terceirizar",
      "Capacitamos para autonomia total — sem dependência de fornecedor",
      "Entregamos código documentado rodando na sua infraestrutura",
      "Preço fixo por marco — você é dono do sistema",
    ],
  },
  whyus: {
    heading: "Feito para operadores, não para comitês",
    features: [
      {
        title: "Baseado nos seus documentos reais",
        desc: "Começamos pelos seus balanços, DFs, exportações de bilheteria e logs de logística — não benchmarks de setor. Cada oportunidade que identificamos é rastreável a uma fonte.",
      },
      {
        title: "Você é dono do sistema",
        desc: "Sem dependência de fornecedor, sem assinaturas SaaS. Agentes sob medida construídos para rodar na sua própria infraestrutura, totalmente documentados e transferíveis.",
      },
    ],
    cta: "Fale com a gente",
  },
  clientCards: {
    sectionLabel: "Acesso restrito · Estudos exclusivos",
    heading: "Sistemas em produção",
    subtitle: "Cada estudo é construído a partir de dados públicos, pesquisa setorial e divulgações financeiras.",
    restricted: "Acesso restrito",
    clients: [
      { desc: "Construção pesada, licitações e gestão de contratos — estudo de mercado e diagnóstico personalizado." },
      { desc: "Trading de soja, planejamento de safra e compliance logístico — análise de impacto financeiro com IA." },
      { desc: "Terminal de cruzeiros, eventos e compliance portuário — estudo baseado em divulgações financeiras públicas e pesquisa setorial." },
      { desc: "Bilheteria, operação ferroviária e compliance ICMBio — análise de receita e manutenção preditiva." },
      { desc: "Teleférico, eventos e gastronomia — análise de bilheteria dinâmica e manutenção preditiva." },
      { desc: "7 unidades de ecoturismo (AquaRio, BioParque, Cataratas, Noronha) — análise de fluxo e compliance ICMBio." },
    ],
  },
  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        q: "Como funciona o diagnóstico gratuito?",
        a: "Mapeamos sua operação, os processos que seu time toca no dia-a-dia e os dados que você já gera. A partir daí, identificamos as 3 maiores oportunidades de automação ou IA para o seu negócio. Você recebe um resumo escrito em 48 horas — sem benchmarks genéricos.",
      },
      {
        q: "Precisamos substituir nossos sistemas existentes?",
        a: "Não. Integramos com o que você tem — ERP, CRM, APIs personalizadas. O objetivo é adicionar inteligência à sua infraestrutura atual, sem forçar uma migração.",
      },
      {
        q: "Vocês substituem nossa equipe de TI ou dados?",
        a: "Não — trabalhamos junto com eles. A gente cuida da arquitetura de IA e construção dos modelos; sua equipe cuida do acesso à infraestrutura e aprovações de deploy. Transferência de conhecimento faz parte de todo projeto.",
      },
      {
        q: "Quais setores vocês conhecem melhor?",
        a: "Logística, varejo e e-commerce, serviços e compliance. Nosso trabalho se adapta a qualquer operação que gere dados e envolva processos repetíveis — esses setores representam a maior parte dos nossos projetos.",
      },
    ],
  },
  cta: {
    heading: "Pronto para um parceiro que co-constrói com você?",
    sub: "Agende uma conversa de 45 min — sem compromisso, sem benchmarks genéricos.",
    btn1: "Iniciar Diagnóstico",
    btn2: "Falar com a Gente",
    badge: "Sem compromisso. Código seu, equipe independente.",
  },
  footer: {
    copyright: "© 2026 River Labs.",
    links: ["Serviços", "Casos de Sucesso", "Contato"],
  },
};

const dictionaries: Record<Lang, Dict> = { en, es, pt };

export function getDictionary(lang: string): Dict {
  return dictionaries[(lang as Lang)] ?? en;
}
