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
    steps: { title: string; timeline: string; desc: string }[];
  };
  comparison: {
    heading: string;
    badTitle: string;
    badItems: string[];
    goodItems: string[];
  };
  whyus: {
    heading: string;
    features: { title: string; desc: string }[];
    cta: string;
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
        title: "Pricing that doesn't react to demand",
        desc: "Dynamic occupancy, seasonality, events — your pricing stays fixed while your competitors adapt in real time.",
      },
      {
        title: "Processes bleeding cash quietly",
        desc: "Manual workflows, fragmented data, slow approvals. The operational friction is hard to see on a spreadsheet, but it adds up fast.",
      },
      {
        title: "Data you have but don't use",
        desc: "Balance sheets, ticketing records, logistics logs — your operation already generates the signal. Nobody is reading it.",
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
    heading: "Diagnosis to ROI in 90 days",
    sub: "We start with your financial documents, not a blank slide deck.",
    steps: [
      {
        title: "Financial diagnosis",
        timeline: "Wk 1–2",
        desc: "We read your balance sheets, ticketing data, and operational records. We map where revenue is leaking and build your opportunity model.",
      },
      {
        title: "Working prototype",
        timeline: "Wk 3–6",
        desc: "A real system running on your real data — not a demo. You test it, break it, and approve before we go further.",
      },
      {
        title: "Production & optimization",
        timeline: "Wk 7–12",
        desc: "Live integration into your existing stack. Continuous monitoring against the KPIs we defined at diagnosis.",
      },
    ],
  },
  comparison: {
    heading: "Not your typical consulting firm",
    badTitle: "Typical agency",
    badItems: [
      "R$50k diagnostic report you'll never implement",
      "Generic best practices, no access to your data",
      "6 months before you see anything working",
      "Monthly retainers with no defined outcome",
    ],
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
      {
        title: "Fixed price, defined scope",
        desc: "Every project is priced by milestone, not by the hour. You know the cost before we start and the KPIs we're accountable for before we finish.",
      },
    ],
    cta: "Talk to us",
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
        q: "What happens after the pilot?",
        a: "You test the prototype with real data and decide whether to deploy. If you do, we integrate into production and monitor KPIs. If you don't, you keep the diagnosis — there's no obligation.",
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
    sub: "Share your documents. We'll map your 3 biggest revenue levers — specific, auditable, no cost.",
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
        title: "Precios que no reaccionan a la demanda",
        desc: "Ocupación dinámica, estacionalidad, eventos — tus precios se mantienen fijos mientras la competencia se adapta en tiempo real.",
      },
      {
        title: "Procesos que sangran caja en silencio",
        desc: "Flujos manuales, datos fragmentados, aprobaciones lentas. La fricción operativa es difícil de ver en una hoja de cálculo, pero se acumula rápido.",
      },
      {
        title: "Datos que tienes pero no usas",
        desc: "Balances, registros de ticketing, logs de logística — tu operación ya genera la señal. Nadie la está leyendo.",
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
    heading: "Del diagnóstico al ROI en 90 días",
    sub: "Empezamos con tus documentos financieros, no con una presentación en blanco.",
    steps: [
      {
        title: "Diagnóstico financiero",
        timeline: "Sem 1–2",
        desc: "Analizamos tus balances, datos de ticketing y registros operativos. Mapeamos dónde se está escapando el ingreso y construimos tu modelo de oportunidades.",
      },
      {
        title: "Prototipo funcional",
        timeline: "Sem 3–6",
        desc: "Un sistema real corriendo en tus datos reales — no una demo. Lo pruebas, lo rompes y lo apruebas antes de seguir.",
      },
      {
        title: "Producción y optimización",
        timeline: "Sem 7–12",
        desc: "Integración en vivo en tu stack existente. Monitoreo continuo contra los KPIs que definimos en el diagnóstico.",
      },
    ],
  },
  comparison: {
    heading: "No somos una consultora típica",
    badTitle: "Agencia típica",
    badItems: [
      "Reporte de diagnóstico de R$50k que nunca implementarás",
      "Mejores prácticas genéricas, sin acceso a tus datos",
      "6 meses antes de ver algo funcionando",
      "Retenciones mensuales sin resultado definido",
    ],
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
      {
        title: "Precio fijo, alcance definido",
        desc: "Cada proyecto tiene precio por hito, no por hora. Conoces el costo antes de empezar y los KPIs de los que somos responsables antes de terminar.",
      },
    ],
    cta: "Habla con nosotros",
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
        q: "¿Qué pasa después del piloto?",
        a: "Pruebas el prototipo con datos reales y decides si implementar. Si lo haces, integramos en producción y monitoreamos KPIs. Si no, te quedas con el diagnóstico — sin obligación.",
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
    sub: "Comparte tus documentos. Mapearemos tus 3 mayores palancas de ingreso — específicas, auditables, sin costo.",
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
        title: "Precificação que não reage à demanda",
        desc: "Ocupação dinâmica, sazonalidade, eventos — seus preços ficam fixos enquanto a concorrência se adapta em tempo real.",
      },
      {
        title: "Processos sangrando caixa em silêncio",
        desc: "Fluxos manuais, dados fragmentados, aprovações lentas. A fricção operacional é difícil de ver na planilha, mas se acumula rápido.",
      },
      {
        title: "Dados que você tem mas não usa",
        desc: "Balanços, registros de bilheteria, logs de logística — sua operação já gera o sinal. Ninguém está lendo.",
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
    heading: "Do diagnóstico ao ROI em 90 dias",
    sub: "Começamos pelos seus documentos financeiros, não por um slide em branco.",
    steps: [
      {
        title: "Diagnóstico financeiro",
        timeline: "Sem 1–2",
        desc: "Lemos seus balanços, dados de bilheteria e registros operacionais. Mapeamos onde a receita está vazando e construímos seu modelo de oportunidades.",
      },
      {
        title: "Protótipo funcionando",
        timeline: "Sem 3–6",
        desc: "Um sistema real rodando nos seus dados reais — não uma demo. Você testa, quebra e aprova antes de irmos adiante.",
      },
      {
        title: "Produção e otimização",
        timeline: "Sem 7–12",
        desc: "Integração em produção no seu stack existente. Monitoramento contínuo contra os KPIs que definimos no diagnóstico.",
      },
    ],
  },
  comparison: {
    heading: "Não somos uma consultoria típica",
    badTitle: "Consultoria típica",
    badItems: [
      "Relatório de diagnóstico de R$50k que você nunca vai implementar",
      "Melhores práticas genéricas, sem acesso aos seus dados",
      "6 meses para ver qualquer coisa funcionando",
      "Contratos mensais sem resultado definido",
    ],
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
      {
        title: "Preço fixo, escopo definido",
        desc: "Todo projeto tem preço por marco, não por hora. Você sabe o custo antes de começar e os KPIs pelos quais somos responsáveis antes de terminarmos.",
      },
    ],
    cta: "Fale com a gente",
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
        q: "O que acontece depois do piloto?",
        a: "Você testa o protótipo com dados reais e decide se vai para produção. Se decidir, integramos e monitoramos os KPIs. Se não, você fica com o diagnóstico — sem obrigação.",
      },
      {
        q: "Vocês substituem nossa equipe de TI ou dados?",
        a: "Não — trabalhamos junto com eles. A gente cuida da arquitetura de IA e construção dos modelos; sua equipe cuida do acesso à infraestrutura e aprovações de deploy. Transferência de conhecimento faz parte de todo projeto.",
      },
      {
        q: "Quais setores vocês conhecem melhor?",
        a: "Turismo e hospitalidade, agronegócio, portos e logística, e imóveis. Esses setores compõem a maior parte do nosso trabalho porque suas operações geram dados financeiros ricos que a IA consegue agir diretamente.",
      },
    ],
  },
  cta: {
    heading: "Descubra o que sua operação está deixando para trás",
    sub: "Compartilhe seus documentos. Mapeamos suas 3 maiores alavancas de receita — específicas, auditáveis, sem custo.",
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
