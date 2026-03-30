export type Lang = "en" | "es" | "pt";

export type Dict = {
  nav: {
    services: string;
    casestudies: string;
    contact: string;
  };
  hero: {
    heading1: string;
    headingItalic: string;
    heading2: string;
    sub: string;
    cta1: string;
    cta2: string;
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
  hero: {
    heading1: "Your operation is leaving",
    headingItalic: "revenue on the table.",
    heading2: "We find it — and build the system to capture it.",
    sub: "Custom AI calibrated on your real financial data. Working prototype in 3 weeks. ROI in 90 days.",
    cta1: "Get Free Diagnosis",
    cta2: "See Our Work",
  },
  proof: {
    label: "Trusted by",
  },
  problems: {
    heading: "The losses are invisible until they aren't",
    sub: "By the time the problem is obvious, you've already left months of revenue behind.",
    items: [
      {
        title: "Pricing that doesn't adapt to demand",
        desc: "Demand shifts with seasonality, events, and occupancy — but pricing doesn't follow. The margin you could capture stays on the table.",
      },
      {
        title: "Processes that limit what the team can deliver",
        desc: "Manual approvals, spreadsheet handoffs, duplicated information across systems. Every step that could be automated is time your team spends on process — not on the business.",
      },
      {
        title: "Data you generate but don't use",
        desc: "Balance sheets, ticketing records, logistics logs — your operation already generates the signal.",
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
    sub: "Built for the people who run the operation day-to-day.",
    principles: [
      "We co-create solutions with the team directly involved in the operation",
      "We train your team to use the tools independently — no vendor lock-in, no SaaS subscriptions",
      "We deliver documented code and a working system inside your infrastructure.",
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
    heading: "We build systems. We don't write reports.",
    goodItems: [
      "Free diagnosis — specific to your financials",
      "AI systems calibrated on your real documents",
      "Working prototype in 3 weeks",
      "Fixed price per milestone, you own the code",
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
        a: "We review the financial and operational documents you share — balance sheets, ticketing data, logistics records — and build a specific opportunity model for your business. No generic benchmarks. You get a written summary of your 3 biggest levers within 48 hours.",
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
        a: "Tourism & hospitality, agribusiness, ports & logistics, and real estate. These sectors make up most of our work because their operations generate rich financial data that AI can directly act on.",
      },
    ],
  },
  cta: {
    heading: "Find out what your operation is leaving behind",
    sub: "Schedule a 45-min diagnosis call — specific, no commitment.",
    btn1: "Get My Free Diagnosis",
    btn2: "Book a 15-Min Call",
    badge: "No commitment. No generic benchmarks.",
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
  hero: {
    heading1: "Tu operación está dejando",
    headingItalic: "ingresos sobre la mesa.",
    heading2: "Los encontramos — y construimos el sistema para capturarlos.",
    sub: "IA a medida calibrada en tus datos financieros reales. Prototipo funcional en 3 semanas. ROI en 90 días.",
    cta1: "Diagnóstico Gratuito",
    cta2: "Ver Nuestro Trabajo",
  },
  proof: {
    label: "Con la confianza de",
  },
  problems: {
    heading: "Las pérdidas son invisibles hasta que ya es tarde",
    sub: "Para cuando el problema es obvio, ya dejaste meses de ingresos atrás.",
    items: [
      {
        title: "Precios que no se adaptan a la demanda",
        desc: "La demanda varía por estacionalidad, eventos y ocupación — pero el precio no la sigue. El margen que podrías capturar se queda en la mesa.",
      },
      {
        title: "Procesos que limitan lo que el equipo puede entregar",
        desc: "Aprobaciones manuales, handoffs por planilla, información duplicada entre sistemas. Cada paso que podría automatizarse es tiempo que la operación gasta en proceso — y no en el negocio.",
      },
      {
        title: "Datos que generas pero no utilizas",
        desc: "Balances, registros de ticketing, logs de logística — tu operación ya genera la señal.",
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
    sub: "Diseñado para quien lleva la operación día a día.",
    principles: [
      "Cocreamos soluciones junto al equipo directamente involucrado en la operación",
      "Capacitamos a tu equipo para usar las herramientas con autonomía: sin dependencia de proveedor, sin suscripciones SaaS",
      "Entregamos el código documentado y el sistema funcionando dentro de tu infraestructura.",
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
    heading: "Construimos sistemas. No escribimos reportes.",
    goodItems: [
      "Diagnóstico gratuito — específico para tus finanzas",
      "Sistemas de IA calibrados en tus documentos reales",
      "Prototipo funcional en 3 semanas",
      "Precio fijo por hito, tú eres dueño del código",
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
        a: "Revisamos los documentos financieros y operativos que compartes — balances, datos de ticketing, registros logísticos — y construimos un modelo de oportunidades específico para tu negocio. Sin benchmarks genéricos. Recibes un resumen escrito de tus 3 mayores palancas en 48 horas.",
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
        a: "Turismo y hotelería, agronegocios, puertos y logística, y bienes raíces. Estos sectores representan la mayor parte de nuestro trabajo porque sus operaciones generan datos financieros ricos que la IA puede aprovechar directamente.",
      },
    ],
  },
  cta: {
    heading: "Descubre qué está dejando atrás tu operación",
    sub: "Agenda una llamada de diagnóstico de 45 min — específica, sin compromiso.",
    btn1: "Obtener Mi Diagnóstico Gratuito",
    btn2: "Agendar Llamada de 15 Min",
    badge: "Sin compromiso. Sin benchmarks genéricos.",
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
  hero: {
    heading1: "Sua operação está deixando",
    headingItalic: "receita para trás.",
    heading2: "A gente encontra — e constrói o sistema pra capturar.",
    sub: "IA sob medida, calibrada nos seus dados financeiros reais. Protótipo em 3 semanas. ROI em 90 dias.",
    cta1: "Diagnóstico Gratuito",
    cta2: "Ver Nosso Trabalho",
  },
  proof: {
    label: "Confiado por",
  },
  problems: {
    heading: "As perdas são invisíveis — até que deixam de ser",
    sub: "Quando o problema fica óbvio, você já deixou meses de receita para trás.",
    items: [
      {
        title: "Precificação que não se adapta à demanda",
        desc: "A demanda varia com sazonalidade, eventos e ocupação — mas o preço não acompanha. A margem que poderia ser capturada fica na mesa.",
      },
      {
        title: "Processos que limitam o que a equipe consegue entregar",
        desc: "Aprovações manuais, handoffs por planilha, informações duplicadas entre sistemas. Cada etapa que poderia ser automatizada é tempo que a operação gasta no processo — e não no negócio.",
      },
      {
        title: "Dados que você gera, mas não utiliza",
        desc: "Balanços, registros de bilheteria, logs de logística — sua operação já gera o sinal.",
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
    sub: "Feito para quem toca a operação no dia-a-dia.",
    principles: [
      "Cocriamos soluções junto ao time diretamente envolvido na operação",
      "Capacitamos seu time a utilizar as ferramentas com autonomia: sem dependência de fornecedor, sem assinaturas SaaS",
      "Entregamos o código documentado e o sistema funcionando dentro da sua infraestrutura.",
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
    heading: "Construímos sistemas. Não escrevemos relatórios.",
    goodItems: [
      "Diagnóstico gratuito — específico para o seu negócio",
      "Sistemas de IA calibrados nos seus documentos reais",
      "Protótipo funcionando em 3 semanas",
      "Preço fixo por marco, você é dono do código",
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
        a: "Revisamos os documentos financeiros e operacionais que você compartilha — balanços, dados de bilheteria, registros de logística — e construímos um modelo de oportunidades específico para o seu negócio. Sem benchmarks genéricos. Você recebe um resumo escrito das suas 3 maiores alavancas em 48 horas.",
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
        a: "Turismo e hospitalidade, agronegócio, portos e logística, e imóveis. Esses setores compõem a maior parte do nosso trabalho porque suas operações geram dados financieros ricos que a IA consegue agir diretamente.",
      },
    ],
  },
  cta: {
    heading: "Descubra o que sua operação está deixando para trás",
    sub: "Agende uma conversa de diagnóstico de 45 min — específica, sem compromisso.",
    btn1: "Obter Meu Diagnóstico Gratuito",
    btn2: "Agendar Chamada de 15 Min",
    badge: "Sem compromisso. Sem benchmarks genéricos.",
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
