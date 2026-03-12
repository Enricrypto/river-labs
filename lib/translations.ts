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
    stat1: string;
    stat2: string;
    stat3: string;
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
  testimonials: {
    heading: string;
    items: { quote: string; name: string; role: string }[];
    stats: { value: string; label: string }[];
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
    heading1: "Transform Operations with",
    headingItalic: "AI",
    heading2: "That Delivers Results",
    sub: "Custom autonomous agents and data platforms that cut logistics costs 25-40%, predict real estate values, and automate retail pricing. Prototypes in 3 weeks, not 6 months.",
    cta1: "Start Free Diagnosis",
    cta2: "See Our Work",
  },
  proof: {
    stat1: "10+ industries transformed",
    stat2: "30% average cost reduction",
    stat3: "Prototypes in 3 weeks",
  },
  problems: {
    heading: "Your Operations Are Losing Money You Can't See",
    sub: "Generic software and agencies promise transformation. You get reports and retainers instead. You're dealing with:",
    items: [
      { title: "Logistics", desc: "Teams spending 8+ hours/week on routes that waste fuel and time." },
      { title: "Real Estate", desc: "Portfolios valued by gut feel, missing 10-15% market shifts." },
      { title: "Retail", desc: "Managers guessing inventory needs, tying up cash in dead stock." },
      { title: "Process", desc: "Fragile spreadsheets that break constantly when you try to scale." },
    ],
  },
  solutions: {
    heading: "6 Industry Solutions Built to Scale",
    colArea: "Area",
    colWhat: "What We Build",
    colImpact: "Business Impact",
    rows: [
      { area: "Logistics", what: "Smart routing + demand forecasting", impact: "25-35% lower costs" },
      { area: "Real Estate", what: "Automated valuation + geo-analytics", impact: "15% faster deals" },
      { area: "Process", what: "RPA + lean automation", impact: "40% less process time" },
      { area: "Retail", what: "Dynamic pricing + recommendations", impact: "18% margin gains" },
      { area: "Business Intel.", what: "Real-time data platforms", impact: "Decisions, not guesses" },
    ],
    cta: "Get Your Free Diagnosis",
  },
  methodology: {
    heading: "From Diagnosis to ROI in 90 Days",
    sub: "A structured, transparent process designed for speed and impact.",
    steps: [
      { title: "Diagnosis", timeline: "Wk 1-2", desc: "Map your data infrastructure and pinpoint your 3 biggest operational cost leaks." },
      { title: "Prototype", timeline: "Wk 3-6", desc: "Deliver working, tailored AI models that you can test immediately with real data." },
      { title: "Implementation", timeline: "Wk 7-10", desc: "Live integration into your existing systems with zero business disruption." },
      { title: "Optimization", timeline: "Ongoing", desc: "Continuously monitor key performance indicators to consistently beat your targets." },
    ],
  },
  comparison: {
    heading: "Consulting Reimagined",
    badTitle: "Typical Agency",
    badItems: [
      "Monthly retainers",
      "Excel + PowerPoint deliverables",
      "6-month timelines to see value",
      "More reports and meetings",
    ],
    goodItems: [
      "Fixed-price projects",
      "Autonomous AI agents",
      "3-week prototypes",
      "Fewer meetings, real automation",
    ],
  },
  testimonials: {
    heading: "Results Our Clients See",
    items: [
      { quote: "Route planning dropped from 8 hours to 15 minutes weekly. Fuel costs down 28% first quarter.", name: "Carla M.", role: "Operations Director, Logistics Chile" },
      { quote: "Geo-analytics caught 3 properties we overvalued by 12% combined. Saved $240K instantly.", name: "Diego R.", role: "Portfolio Manager, Real Estate Fund" },
    ],
    stats: [
      { value: "10+", label: "Industries" },
      { value: "35%", label: "Avg Savings" },
      { value: "100%", label: "Prototype Delivery" },
    ],
  },
  whyus: {
    heading: "Built for Decision Makers Who Need Results",
    features: [
      { title: "No vague deliverables", desc: "Every project we undertake is tied to 3 specific, measurable Key Performance Indicators." },
      { title: "You own the code", desc: "No vendor lock-in. Custom agents are built to run securely within your own infrastructure." },
      { title: "Fixed timelines", desc: "We work on 90-day project cycles, ensuring swift delivery instead of open-ended, costly retainers." },
      { title: "Multi-language Support", desc: "Native multi-language support for dashboards and documentation, perfect for international teams." },
    ],
    cta: "Get a Quote",
  },
  faq: {
    heading: "Questions We Get Most",
    items: [
      { q: "How fast can we see results?", a: "Working prototypes in 3 weeks. Full implementation in 90 days. We prioritize getting testable models into your hands quickly to ensure alignment and rapid value realization." },
      { q: "Do you work with existing systems?", a: "Yes – ERP, CRM, custom APIs. We integrate, don't replace. Our goal is to augment your current infrastructure with intelligence, not force you into a massive software migration." },
      { q: "What industries do you know best?", a: "Logistics, real estate, retail, manufacturing. These four sectors account for 70% of our projects, giving us deep domain expertise in their specific operational challenges." },
      { q: "Fixed price or hourly?", a: "Fixed price per milestone. No surprises. We define the scope and the cost upfront, so your financial commitment is clear and tied to specific deliverables." },
    ],
  },
  cta: {
    heading: "Ready to Cut Costs 25-40%?",
    sub: "Start with our free operational diagnosis. We'll identify your 3 biggest opportunities in 48 hours.",
    btn1: "Get My Free Diagnosis",
    btn2: "Book 15-Min Call",
    badge: "No commitment. Actionable insights only.",
  },
  footer: {
    copyright: "© 2026 River Labs. Transformative AI consulting.",
    links: ["Services", "Case Studies", "Blog", "Contact"],
  },
};

const es: Dict = {
  nav: {
    services: "Servicios",
    casestudies: "Casos de Éxito",
    contact: "Contacto",
  },
  hero: {
    heading1: "Transforma tus Operaciones con",
    headingItalic: "IA",
    heading2: "que Genera Resultados Reales",
    sub: "Agentes autónomos y plataformas de datos que reducen costos logísticos un 25-40%, predicen valores inmobiliarios y automatizan precios en retail. Prototipos en 3 semanas, no en 6 meses.",
    cta1: "Diagnóstico Gratuito",
    cta2: "Ver Nuestro Trabajo",
  },
  proof: {
    stat1: "Más de 10 industrias transformadas",
    stat2: "30% de reducción de costos promedio",
    stat3: "Prototipos en 3 semanas",
  },
  problems: {
    heading: "Tus Operaciones Están Perdiendo Dinero que No Ves",
    sub: "El software genérico y las agencias prometen transformación. Obtienes informes y retenciones en cambio. Estás lidiando con:",
    items: [
      { title: "Logística", desc: "Equipos que gastan 8+ horas/semana en rutas que desperdician combustible y tiempo." },
      { title: "Bienes Raíces", desc: "Portafolios valorados por instinto, perdiendo cambios de mercado del 10-15%." },
      { title: "Retail", desc: "Gerentes adivinando necesidades de inventario, inmovilizando efectivo en stock muerto." },
      { title: "Procesos", desc: "Hojas de cálculo frágiles que se rompen constantemente al intentar escalar." },
    ],
  },
  solutions: {
    heading: "6 Soluciones Industriales Listas para Escalar",
    colArea: "Área",
    colWhat: "Qué Construimos",
    colImpact: "Impacto en el Negocio",
    rows: [
      { area: "Logística", what: "Rutas inteligentes + pronóstico de demanda", impact: "25-35% menos costos" },
      { area: "Bienes Raíces", what: "Valuación automatizada + geo-análisis", impact: "15% más velocidad en cierres" },
      { area: "Procesos", what: "RPA + automatización lean", impact: "40% menos tiempo de proceso" },
      { area: "Retail", what: "Precios dinámicos + recomendaciones", impact: "18% más margen" },
      { area: "Inteligencia de Negocios", what: "Plataformas de datos en tiempo real", impact: "Decisiones, no suposiciones" },
    ],
    cta: "Obtén Tu Diagnóstico Gratuito",
  },
  methodology: {
    heading: "Del Diagnóstico al ROI en 90 Días",
    sub: "Un proceso estructurado y transparente diseñado para velocidad e impacto.",
    steps: [
      { title: "Diagnóstico", timeline: "Sem 1-2", desc: "Mapeamos tu infraestructura de datos e identificamos tus 3 principales fugas de costos operativos." },
      { title: "Prototipo", timeline: "Sem 3-6", desc: "Entregamos modelos de IA funcionales y personalizados que puedes probar de inmediato con datos reales." },
      { title: "Implementación", timeline: "Sem 7-10", desc: "Integración en vivo en tus sistemas existentes sin interrumpir el negocio." },
      { title: "Optimización", timeline: "Continuo", desc: "Monitoreamos continuamente los indicadores clave para superar consistentemente tus objetivos." },
    ],
  },
  comparison: {
    heading: "Consultoría Reinventada",
    badTitle: "Agencia Típica",
    badItems: [
      "Retenciones mensuales",
      "Entregables en Excel y PowerPoint",
      "6 meses para ver valor",
      "Más informes y reuniones",
    ],
    goodItems: [
      "Proyectos de precio fijo",
      "Agentes de IA autónomos",
      "Prototipos en 3 semanas",
      "Menos reuniones, automatización real",
    ],
  },
  testimonials: {
    heading: "Resultados que Ven Nuestros Clientes",
    items: [
      { quote: "La planificación de rutas bajó de 8 horas a 15 minutos semanales. Costos de combustible reducidos un 28% en el primer trimestre.", name: "Carla M.", role: "Directora de Operaciones, Logística Chile" },
      { quote: "El geo-análisis detectó 3 propiedades que sobrevaluamos un 12% combinado. Ahorramos $240K al instante.", name: "Diego R.", role: "Gerente de Portafolio, Fondo Inmobiliario" },
    ],
    stats: [
      { value: "10+", label: "Industrias" },
      { value: "35%", label: "Ahorro Promedio" },
      { value: "100%", label: "Entrega de Prototipos" },
    ],
  },
  whyus: {
    heading: "Diseñado para Tomadores de Decisiones que Necesitan Resultados",
    features: [
      { title: "Sin entregables vagos", desc: "Cada proyecto está vinculado a 3 Indicadores Clave de Rendimiento específicos y medibles." },
      { title: "Tú eres dueño del código", desc: "Sin dependencia de proveedores. Los agentes personalizados se ejecutan en tu propia infraestructura." },
      { title: "Plazos fijos", desc: "Trabajamos en ciclos de 90 días, garantizando entrega rápida en lugar de retenciones costosas." },
      { title: "Soporte Multilingüe", desc: "Soporte nativo multilingüe para dashboards y documentación, ideal para equipos internacionales." },
    ],
    cta: "Solicitar Cotización",
  },
  faq: {
    heading: "Las Preguntas Más Frecuentes",
    items: [
      { q: "¿Qué tan rápido podemos ver resultados?", a: "Prototipos funcionales en 3 semanas. Implementación completa en 90 días. Priorizamos poner modelos testeables en tus manos rápidamente para asegurar alineación y una rápida generación de valor." },
      { q: "¿Trabajan con sistemas existentes?", a: "Sí – ERP, CRM, APIs personalizadas. Integramos, no reemplazamos. Nuestro objetivo es potenciar tu infraestructura actual con inteligencia, no forzarte a una migración masiva." },
      { q: "¿Cuáles industrias conocen mejor?", a: "Logística, bienes raíces, retail, manufactura. Estos cuatro sectores representan el 70% de nuestros proyectos, brindándonos profunda experiencia en sus desafíos operativos específicos." },
      { q: "¿Precio fijo o por hora?", a: "Precio fijo por hito. Sin sorpresas. Definimos el alcance y el costo por adelantado, con compromisos financieros claros y vinculados a entregables específicos." },
    ],
  },
  cta: {
    heading: "¿Listo para Reducir Costos un 25-40%?",
    sub: "Comienza con nuestro diagnóstico operativo gratuito. Identificaremos tus 3 mayores oportunidades en 48 horas.",
    btn1: "Obtener Mi Diagnóstico Gratuito",
    btn2: "Agendar Llamada de 15 Min",
    badge: "Sin compromiso. Solo ideas accionables.",
  },
  footer: {
    copyright: "© 2026 River Labs. Consultoría de IA transformadora.",
    links: ["Servicios", "Casos de Éxito", "Blog", "Contacto"],
  },
};

const pt: Dict = {
  nav: {
    services: "Serviços",
    casestudies: "Casos de Sucesso",
    contact: "Contato",
  },
  hero: {
    heading1: "Transforme suas Operações com",
    headingItalic: "IA",
    heading2: "que Entrega Resultados Reais",
    sub: "Agentes autônomos e plataformas de dados que reduzem custos logísticos em 25-40%, preveem valores imobiliários e automatizam preços no varejo. Protótipos em 3 semanas, não em 6 meses.",
    cta1: "Diagnóstico Gratuito",
    cta2: "Ver Nosso Trabalho",
  },
  proof: {
    stat1: "Mais de 10 indústrias transformadas",
    stat2: "30% de redução de custos em média",
    stat3: "Protótipos em 3 semanas",
  },
  problems: {
    heading: "Suas Operações Estão Perdendo Dinheiro que Você Não Vê",
    sub: "Software genérico e agências prometem transformação. Você recebe relatórios e contratos mensais. Você está lidando com:",
    items: [
      { title: "Logística", desc: "Equipes gastando 8+ horas/semana em rotas que desperdiçam combustível e tempo." },
      { title: "Imóveis", desc: "Portfólios avaliados por intuição, perdendo variações de mercado de 10-15%." },
      { title: "Varejo", desc: "Gerentes adivinhando necessidades de estoque, imobilizando caixa em estoque parado." },
      { title: "Processos", desc: "Planilhas frágeis que quebram constantemente ao tentar escalar." },
    ],
  },
  solutions: {
    heading: "6 Soluções Industriais Prontas para Escalar",
    colArea: "Área",
    colWhat: "O que Construímos",
    colImpact: "Impacto no Negócio",
    rows: [
      { area: "Logística", what: "Roteirização inteligente + previsão de demanda", impact: "25-35% menos custos" },
      { area: "Imóveis", what: "Avaliação automatizada + geo-análise", impact: "15% mais velocidade nos fechamentos" },
      { area: "Processos", what: "RPA + automação lean", impact: "40% menos tempo de processo" },
      { area: "Varejo", what: "Precificação dinâmica + recomendações", impact: "18% mais margem" },
      { area: "Inteligência de Negócios", what: "Plataformas de dados em tempo real", impact: "Decisões, não suposições" },
    ],
    cta: "Obtenha Seu Diagnóstico Gratuito",
  },
  methodology: {
    heading: "Do Diagnóstico ao ROI em 90 Dias",
    sub: "Um processo estruturado e transparente projetado para velocidade e impacto.",
    steps: [
      { title: "Diagnóstico", timeline: "Sem 1-2", desc: "Mapeamos sua infraestrutura de dados e identificamos suas 3 maiores fontes de perda de custo operacional." },
      { title: "Protótipo", timeline: "Sem 3-6", desc: "Entregamos modelos de IA funcionais e personalizados que você pode testar imediatamente com dados reais." },
      { title: "Implementação", timeline: "Sem 7-10", desc: "Integração em tempo real nos seus sistemas existentes sem interrupção nos negócios." },
      { title: "Otimização", timeline: "Contínuo", desc: "Monitoramos continuamente os indicadores-chave para superar consistentemente suas metas." },
    ],
  },
  comparison: {
    heading: "Consultoria Reinventada",
    badTitle: "Agência Típica",
    badItems: [
      "Contratos mensais",
      "Entregas em Excel e PowerPoint",
      "6 meses para ver valor",
      "Mais relatórios e reuniões",
    ],
    goodItems: [
      "Projetos de preço fixo",
      "Agentes de IA autônomos",
      "Protótipos em 3 semanas",
      "Menos reuniões, automação real",
    ],
  },
  testimonials: {
    heading: "Resultados que Nossos Clientes Veem",
    items: [
      { quote: "O planejamento de rotas caiu de 8 horas para 15 minutos por semana. Custos de combustível reduziram 28% no primeiro trimestre.", name: "Carla M.", role: "Diretora de Operações, Logística Chile" },
      { quote: "A geo-análise identificou 3 imóveis que superavaliamos em 12% combinados. Economizamos $240K instantaneamente.", name: "Diego R.", role: "Gestor de Portfólio, Fundo Imobiliário" },
    ],
    stats: [
      { value: "10+", label: "Indústrias" },
      { value: "35%", label: "Economia Média" },
      { value: "100%", label: "Entrega de Protótipos" },
    ],
  },
  whyus: {
    heading: "Construído para Tomadores de Decisão que Precisam de Resultados",
    features: [
      { title: "Sem entregas vagas", desc: "Cada projeto é vinculado a 3 Indicadores-Chave de Desempenho específicos e mensuráveis." },
      { title: "Você é dono do código", desc: "Sem dependência de fornecedor. Agentes personalizados são construídos para rodar na sua própria infraestrutura." },
      { title: "Prazos fixos", desc: "Trabalhamos em ciclos de 90 dias, garantindo entrega ágil ao invés de contratos mensais caros." },
      { title: "Suporte Multilíngue", desc: "Suporte nativo multilíngue para dashboards e documentação, ideal para equipes internacionais." },
    ],
    cta: "Solicitar Orçamento",
  },
  faq: {
    heading: "Perguntas Mais Frequentes",
    items: [
      { q: "Com que rapidez podemos ver resultados?", a: "Protótipos funcionais em 3 semanas. Implementação completa em 90 dias. Priorizamos colocar modelos testáveis em suas mãos rapidamente para garantir alinhamento e rápida geração de valor." },
      { q: "Vocês trabalham com sistemas existentes?", a: "Sim – ERP, CRM, APIs personalizadas. Integramos, não substituímos. Nosso objetivo é potencializar sua infraestrutura atual com inteligência, sem forçar uma migração massiva." },
      { q: "Quais indústrias vocês conhecem melhor?", a: "Logística, imóveis, varejo, manufatura. Esses quatro setores representam 70% dos nossos projetos, nos dando profunda expertise em seus desafios operacionais específicos." },
      { q: "Preço fixo ou por hora?", a: "Preço fixo por marco. Sem surpresas. Definimos o escopo e o custo antecipadamente, com compromisso financeiro claro vinculado a entregas específicas." },
    ],
  },
  cta: {
    heading: "Pronto para Reduzir Custos em 25-40%?",
    sub: "Comece com nosso diagnóstico operacional gratuito. Identificaremos suas 3 maiores oportunidades em 48 horas.",
    btn1: "Obter Meu Diagnóstico Gratuito",
    btn2: "Agendar Chamada de 15 Min",
    badge: "Sem compromisso. Apenas insights acionáveis.",
  },
  footer: {
    copyright: "© 2026 River Labs. Consultoria de IA transformadora.",
    links: ["Serviços", "Casos de Sucesso", "Blog", "Contato"],
  },
};

const dictionaries: Record<Lang, Dict> = { en, es, pt };

export function getDictionary(lang: string): Dict {
  return dictionaries[(lang as Lang)] ?? en;
}
