export type Lang = "en" | "es" | "pt"

export type Dict = {
  nav: {
    services: string
    casestudies: string
    contact: string
    howwework: string
    team: string
    faq: string
    cta?: string
  }
  hero: {
    heading1: string
    headingItalic: string
    heading2: string
    sub: string
    cta1: string
    cta2: string
    badges: string[]
  }
  proof: {
    label: string
    sectors: string[]
  }
  authority: {
    heading: string
    paragraphs: string[]
  }
  cases: {
    heading: string
    sub: string
    problemLabel: string
    resultLabel: string
    items: { tag: string; client: string; context: string; result: string }[]
  }
  problems: {
    heading: string
    sub: string
    items: { title: string; desc: string }[]
  }
  differentiation: {
    heading: string
    intro: string
    pivot: string
    items: string[]
    closing: string
  }
  services: {
    heading: string
    sub: string
    items: { title: string; desc: string }[]
  }
  sectorIdeas: {
    heading: string
    sub: string
    sectors: { name: string; items: string[] }[]
  }
  team: {
    heading: string
    sub: string
    members: {
      name: string
      role: string
      bio: string
      fullBio?: string
      image: string
      objectPosition?: string
    }[]
  }
  methodology: {
    heading: string
    sub: string
    triadHeading: string
    principles: string[]
    steps: { title: string; timeline: string }[]
  }
  comparison: {
    heading: string
    goodItems: string[]
  }
  whyus: {
    heading: string
    features: { title: string; desc: string }[]
    cta: string
  }
  clientCards: {
    sectionLabel: string
    heading: string
    subtitle: string
    restricted: string
    clients: { desc: string }[]
  }
  faq: {
    heading: string
    items: { q: string; a: string }[]
  }
  cta: {
    heading: string
    sub: string
    btn1: string
    btn2: string
    badge: string
  }
  footer: {
    copyright: string
    links: string[]
    cta: string
  }
  solutions: {
    heading: string
    colArea: string
    colWhat: string
    colImpact: string
    rows: { area: string; what: string; impact: string }[]
    cta: string
  }
}

const en: Dict = {
  nav: {
    services: "Services",
    casestudies: "Client Area",
    contact: "Contact",
    howwework: "How We Work",
    team: "Team",
    faq: "FAQ",
    cta: "Free Diagnosis"
  },
  hero: {
    heading1: "The AI system that",
    headingItalic: "replaces the spreadsheets",
    heading2: "running your operation.",
    sub: "We build custom operational AI inside your infrastructure - forecasting demand, automating reporting, and eliminating manual workflows. Diagnosis to deploy in 90 days.",
    cta1: "Get a Free AI Opportunity Diagnosis",
    cta2: "Learn How We Work",
    badges: ["We Co-create", "We Train", "You Own the System"]
  },
  proof: {
    label: "Industries we focus on",
    sectors: [
      "Tourism",
      "Transport",
      "Hospitality",
      "Events",
      "Compliance & Legal"
    ]
  },
  authority: {
    heading:
      "We know what breaks in service operations - and why AI usually doesn't fix it.",
    paragraphs: [
      "Most service operations run on data they never fully use. Demand signals sit in ticketing exports. Maintenance risk lives in equipment logs. Research and reporting workflows eat days of expert time that could be spent on higher-value work. The data and processes are there - the system to act on them isn't.",
      "We design for that gap.",
      "A document research and report generation system we deployed at Lumina, a fire engineering consultancy in Dubai, reduced their expert reporting workflow from 4-5 days per case to under 3 hours. This is the kind of operational impact we design for: specific to your operation, running in your infrastructure, fully owned by your team. Not a generic tool. Not a SaaS subscription. The system itself."
    ]
  },
  cases: {
    heading: "Real systems. Measured results.",
    sub: "Three projects across three sectors - each one in production, each one with a number attached.",
    problemLabel: "Problem",
    resultLabel: "Result",
    items: [
      {
        tag: "Marketing · SEO",
        client: "Washdog",
        context:
          "New pet car wash entering a saturated market with zero digital presence, no SEO, and no social proof.",
        result:
          "First page on Google in under 1 month. 4,000+ organic impressions in month one."
      },
      {
        tag: "Process Automation · E-commerce",
        client: "VTEX",
        context:
          "Teams spent 10 hours per RFP manually answering ~117 technical and compliance questions - no standardization, across EMEA, US, Brazil, LATAM, and APAC.",
        result:
          "1,094 hours saved in 6 months. $36.4k saved vs. external platform. 91% reduction in annual tooling cost."
      },
      {
        tag: "Document Automation · Engineering",
        client: "Lumina",
        context:
          "Fire engineering consultancy in Dubai. Expert reporting required gathering documents, precise referencing, and structured writing - 4 to 5 days per case.",
        result:
          "Under 3 hours per report. System runs in their infrastructure. Team owns it completely."
      }
    ]
  },
  problems: {
    heading: "Why most AI projects in operations don't last",
    sub: "The problem isn't the technology. It's what happens after the pilot - and who ends up owning the result.",
    items: [
      {
        title: "The signals exist. The system to act on them doesn't.",
        desc: "Demand spikes, pricing windows, maintenance alerts, staffing gaps - your operation produces these signals every day. But without a system that surfaces them automatically, your team decides by instinct or last year's spreadsheet. The data was always there. The tool to act on it wasn't."
      },
      {
        title: "Expert time lost to work that shouldn't be manual",
        desc: "In most service operations, the highest-cost bottleneck isn't strategy - it's assembly. Documents gathered from multiple sources. Reports written by hand from research that took days to organize. Approvals that require someone to manually pull together information that already exists in the system."
      },
      {
        title: "When the vendor leaves, the system stops.",
        desc: "Most AI projects fail after the proof of concept - not because the technology didn't work, but because no one on the team was trained to run it. The vendor moves on. The system goes dark. You're back to spreadsheets, with nothing to show for the investment."
      }
    ]
  },
  differentiation: {
    heading: "We build systems your team owns and runs.",
    intro: "",
    pivot: "",
    items: [
      "Runs inside your infrastructure - not ours",
      "No SaaS pricing tied to your operational logic",
      "Fully documented and transferable code",
    ],
    closing:
      "When the project ends, you own the system completely. Not a license. Not a dashboard. The system itself - documented, transferable, and built to evolve with your team."
  },
  services: {
    heading: "What we build",
    sub: "",
    items: [
      {
        title: "Operational AI Opportunity Diagnosis",
        desc: "We map your operation with the team running it - not with generic frameworks. You get a prioritized list of the highest-value automation opportunities in your specific workflows: revenue, staffing, marketing, maintenance, compliance, reporting."
      },
      {
        title: "Custom AI Systems",
        desc: "We design and build the system for your exact context - demand forecasting, document research automation, revenue analytics, predictive maintenance, compliance reporting, marketing triggers, or anything else your operation needs."
      },
      {
        title: "Team Training and Full Handoff",
        desc: "Every project ends with your team trained to operate, modify, and evolve what was built. We transfer the knowledge to run the system - not just the software itself - so the investment lasts."
      }
    ]
  },
  sectorIdeas: {
    heading: "What these systems look like in practice",
    sub: "Concrete AI systems designed for the operational problems that repeat most often in service businesses.",
    sectors: [
      {
        name: "Revenue & Demand",
        items: [
          "Dynamic pricing tied to demand, seasonality, and external events",
          "Demand forecasting with automatic staffing and supply triggers",
          "Revenue anomaly detection with real-time alerts",
          "Booking and conversion recovery based on behavioral signals"
        ]
      },
      {
        name: "Operations & Knowledge Work",
        items: [
          "Document research and report generation - multi-day workflows to hours",
          "Predictive maintenance alerts from equipment logs and service history",
          "Per-asset cost monitoring with anomaly flagging",
          "Compliance and audit report automation"
        ]
      },
      {
        name: "Marketing & Growth",
        items: [
          "Automated marketing triggers based on demand forecasting",
          "Channel attribution analysis for marketing spend",
          "Review and feedback analysis to detect recurring service problems",
          "Customer segmentation and reactivation based on behavior patterns"
        ]
      },
      {
        name: "Compliance & Legal",
        items: [
          "Regulatory obligation monitoring and automated alerts",
          "AI-powered legal document classification and analysis",
          "Anomaly detection in contracts and audits",
          "AI-assisted due diligence for M&A and partnerships"
        ]
      }
    ]
  },
  team: {
    heading: "Built by operators who implement the systems themselves.",
    sub: "River Labs was founded by engineers and operators who have built automation systems across e-commerce, operations, and regulated services. We focus on one thing: turning operational data into systems teams can actually run - not prototypes that disappear after the pilot.",
    members: [
      {
        name: "Leonardo Werner",
        role: "Culture, People & Governance",
        bio: "Bio coming soon.",
        fullBio:
          "Leonardo Werner works at the intersection of ethics, organizational culture, and corporate governance. He is a senior consultant at Principia Advisory and visiting professor at PUC-Rio and EAE Business School in Barcelona, where he teaches business ethics in undergraduate and graduate programs.\n\nHis projects have global reach and focus on helping organizations build initiatives that align culture, strategy, and emerging technologies from an ethical perspective. He is also a fellow at FreedomLab, a Dutch think tank, where he writes about the impact of digital technologies on individuals and society.\n\nBefore dedicating himself to ethics and governance consulting, he worked in corporate intelligence, compliance (KYC/AML), and reputational due diligence, with a focus on clients operating in Latin America.",
        image: "/Leonardo_PP.png"
      },
      {
        name: "João Guilherme Santos",
        role: "Solutions Architect",
        bio: "Bio coming soon.",
        image: "/Joao_PP.png",
        objectPosition: "center top"
      },
      {
        name: "Antonio Rapozo",
        role: "Developer & Tech Solutions",
        bio: "Bio coming soon.",
        fullBio:
          "Antonio Rapozo is a senior full-stack engineer with over 8 years of experience building mission-critical systems for the government, transportation, and energy sectors. Over the past 4 years, he has developed bridge inspection and infrastructure asset management platforms used by more than 15 state Departments of Transportation in the US, processing data related to over $500 million in annual investments.\n\nHe currently works on a browser security platform for managed service providers (MSPs), focused on protection against emerging AI threats, phishing, malware, and DNS filtering. His work transforms the browser — today the most vulnerable access point in organizations — into a secure, manageable workspace with advanced security controls, credential analysis, and productivity monitoring.\n\nHis technical expertise spans Vue.js, React, C#, .NET, TypeScript, and AWS, with dual AWS Solutions Architect certification. He integrates AI into production systems using OpenAI, LangChain, and Semantic Kernel, and is the creator of MemoryKit — an open-source .NET library implementing a neuroscience-inspired memory architecture for AI applications.\n\nWith a background in mechanical engineering from CEFET/RJ, a double-degree program in Germany (Deggendorf/IIK Düsseldorf), and a Machine Learning certification from Stanford, Antonio brings a rare combination of technical depth, architectural vision, and experience in complex regulatory environments. He is Brazilian, multilingual (Portuguese, English, German, Spanish), and has worked remotely with distributed teams since 2020.\n\nHis focus is on building scalable solutions that connect high-level software engineering with real business needs — from American government infrastructure to the next generation of intelligent agents.",
        image: "/Antonio_PP.png"
      },
      {
        name: "Enrique Ibarra",
        role: "Full Stack Engineer",
        bio: "Bio coming soon.",
        fullBio:
          "Enrique Ibarra works at the intersection of artificial intelligence, blockchain, and digital development, with a focus on turning technology into practical solutions for businesses. He builds and implements systems that improve processes, reduce costs, and increase efficiency through automation and the intelligent use of data.\n\nHis projects have international reach, including initiatives in Europe, Latin America, and the Middle East, and focus on applying AI strategically — helping organizations adopt new technologies without unnecessary complexity. His approach combines structured thinking with a practical mindset, always looking for the right questions and solutions that actually work day-to-day across different industries.\n\nThroughout his career, he has also developed expertise in Web3 and application development, working with digital products and new forms of technological infrastructure. His focus is on building useful, well-designed solutions aligned with real business needs.",
        image: "/Enrique_PP.png"
      }
    ]
  },
  methodology: {
    heading: "How we work",
    sub: "Three principles that don't change, regardless of what we build.",
    triadHeading: "Our Approach",
    principles: [
      "We co-create - with the team running the operation, from the first conversation. Not behind a slide deck. Not handed over at the end.",
      "We train - your team learns to operate, modify, and evolve what was built. No permanent dependency on River Labs to keep the system running.",
      "We deliver - documented code inside your own infrastructure. You own the system. Not a license to use it. The system itself."
    ],
    steps: [
      {
        title: "Discovery",
        timeline:
          "Map your processes, data sources, and operational constraints"
      },
      {
        title: "Diagnosis",
        timeline: "Identify where AI creates the highest measurable value"
      },
      {
        title: "Solution Design",
        timeline:
          "Define architecture and agree on success metrics before building"
      },
      {
        title: "Pilot",
        timeline:
          "Build a working system and validate it with your team in production"
      },
      {
        title: "Deploy and Handoff",
        timeline: "Ship to production and transfer full ownership to your team"
      }
    ]
  },
  comparison: {
    heading: "A long-term partner. Not a one-off vendor.",
    goodItems: [
      "We co-create with your team - we don't outsource the work",
      "We train for full autonomy - no vendor lock-in",
      "We deliver documented code running in your infrastructure",
      "Fixed price per milestone - you own the system"
    ]
  },
  whyus: {
    heading: "Built for operators, not committees",
    features: [
      {
        title: "Grounded in your real documents",
        desc: "We start from your balance sheets, DFs, ticketing exports, and logistics logs - not industry benchmarks."
      },
      {
        title: "You own the system",
        desc: "No vendor lock-in, no SaaS subscriptions. Custom agents built to run inside your own infrastructure, fully documented and transferable."
      }
    ],
    cta: "Talk to us"
  },
  clientCards: {
    sectionLabel: "Restricted access · Exclusive studies",
    heading: "Systems in production",
    subtitle:
      "Each study is built from public data, sector research, and financial disclosures.",
    restricted: "Restricted access",
    clients: [
      {
        desc: "Heavy construction, public tenders, and contract management - market study and custom diagnosis."
      },
      {
        desc: "Soy trading, crop planning, and logistics compliance - AI-powered financial impact analysis."
      },
      {
        desc: "Cruise terminal, events, and port compliance - study based on public financial disclosures and sector research."
      },
      {
        desc: "Ticketing, railway operations, and ICMBio compliance - revenue analysis and predictive maintenance."
      },
      {
        desc: "Cable car, events, and gastronomy - dynamic ticketing analysis and predictive maintenance."
      },
      {
        desc: "7 ecotourism units (AquaRio, BioParque, Cataratas, Noronha) - flow analysis and ICMBio compliance."
      }
    ]
  },
  faq: {
    heading: "Common questions",
    items: [
      {
        q: "What does the free AI Opportunity Diagnosis actually deliver?",
        a: "After completing the questionnaire, the diagnosis is delivered to your inbox as a written report. It identifies three opportunities and action points that can improve operational flow within your area or organization."
      },
      {
        q: "Do we need to replace our current systems?",
        a: "No. We integrate with what you already have - ticketing platforms, ERPs, document management systems, custom APIs, legacy databases. The goal is to add automated decision-making to your current infrastructure, not force a migration."
      },
      {
        q: "What happens after delivery? Do we need River Labs to maintain it?",
        a: "No - and that's a core design principle of every project we take on. Every system includes full documentation and team training so your operation can maintain and evolve it independently. We don't design for dependency."
      },
      {
        q: "How is this different from buying an AI tool or SaaS platform?",
        a: "Off-the-shelf AI tools are built for the average operation. Your operation isn't average - it has specific data, specific workflows, and specific constraints that generic tools don't account for. We build a system for your exact context, running in your infrastructure, with no monthly fee and no vendor to call when something breaks. Your team runs it."
      }
    ]
  },
  cta: {
    heading:
      "Find out exactly where your operation is leaving value on the table.",
    sub: "One 45-minute conversation. We map your operation and send you a short written report with the three highest-value automation opportunities in your context - specific to your workflows, your data, and your team. We run a limited number of diagnoses each month to go deep on each one.",
    btn1: "Book a Free AI Opportunity Diagnosis",
    btn2: "Talk to Our Team",
    badge: "No commitment. No SaaS. Your team owns what we build."
  },
  footer: {
    copyright: "© 2026 River Labs.",
    links: ["Services", "Client Area", "Contact"],
    cta: "Start Free Diagnosis"
  },
  solutions: {
    heading: "What we build",
    colArea: "Area",
    colWhat: "What We Build",
    colImpact: "Business Impact",
    rows: [
      {
        area: "Revenue",
        what: "Dynamic pricing + demand forecasting",
        impact: "8-20% revenue uplift"
      },
      {
        area: "Operations",
        what: "Process automation + RPA",
        impact: "40% less process time"
      },
      {
        area: "Logistics",
        what: "Smart routing + cost optimization",
        impact: "25-35% lower costs"
      },
      {
        area: "Intelligence",
        what: "Real-time data platforms + dashboards",
        impact: "Decisions, not guesses"
      },
      {
        area: "Compliance",
        what: "Automated reporting + audit trails",
        impact: "Zero manual overhead"
      }
    ],
    cta: "Get Your Free Diagnosis"
  }
}

const es: Dict = {
  nav: {
    services: "Servicios",
    casestudies: "Área de Cliente",
    contact: "Contacto",
    howwework: "Cómo Trabajamos",
    team: "Equipo",
    faq: "FAQ",
    cta: "Diagnóstico Gratuito"
  },
  hero: {
    heading1: "El sistema de IA que",
    headingItalic: "reemplaza las planillas",
    heading2: "que operan tu negocio.",
    sub: "Construimos IA operacional personalizada dentro de tu infraestructura - forecasting de demanda, automatización de reportes y eliminación de flujos manuales. Del diagnóstico al deploy en 90 días.",
    cta1: "Diagnóstico Gratuito de IA",
    cta2: "Conoce cómo trabajamos",
    badges: ["Co-creamos", "Capacitamos", "Tú eres dueño del sistema"]
  },
  proof: {
    label: "Industrias en las que nos enfocamos",
    sectors: [
      "Turismo",
      "Transporte",
      "Hospitalidad",
      "Eventos",
      "Compliance & Legal"
    ]
  },
  authority: {
    heading:
      "Sabemos qué falla en las operaciones de servicio - y por qué la IA normalmente no lo resuelve.",
    paragraphs: [
      "La mayoría de las operaciones de servicio trabajan con datos que nunca aprovechan del todo. Las señales de demanda quedan en exportaciones de boletería. El riesgo de mantenimiento vive en los registros de equipos. Los flujos de investigación y reportes consumen días de tiempo de expertos que podrían dedicarse a trabajo de mayor valor. Los datos y los procesos están ahí - el sistema para actuar sobre ellos, no.",
      "Diseñamos para esa brecha.",
      "Un sistema de investigación documental y generación de informes que implementamos en Lumina, una consultora de ingeniería contra incendios en Dubai, redujo su flujo de trabajo de informes especializados de 4-5 días por caso a menos de 3 horas. Este es el tipo de impacto operativo que diseñamos: específico a tu operación, corriendo en tu infraestructura, completamente en propiedad de tu equipo. No una herramienta genérica. No una suscripción SaaS. El sistema mismo."
    ]
  },
  cases: {
    heading: "Sistemas reales. Resultados medidos.",
    sub: "Tres proyectos en tres sectores - cada uno en producción, cada uno con un número concreto.",
    problemLabel: "Problema",
    resultLabel: "Resultado",
    items: [
      {
        tag: "Marketing · SEO",
        client: "Washdog",
        context:
          "Nueva empresa de lavado de mascotas entrando en un mercado saturado, sin presencia digital, sin SEO y sin prueba social.",
        result:
          "Primera página en Google en menos de 1 mes. Más de 4.000 impresiones orgánicas en el primer mes."
      },
      {
        tag: "Automatización · E-commerce",
        client: "VTEX",
        context:
          "Los equipos dedicaban 10 horas por RFP respondiendo manualmente ~117 preguntas técnicas y de compliance - sin estandarización, en EMEA, EE.UU., Brasil, LATAM y APAC.",
        result:
          "1.094 horas ahorradas en 6 meses. $36,4k ahorrado vs. plataforma externa. 91% de reducción en el costo anual de herramientas."
      },
      {
        tag: "Automatización · Ingeniería",
        client: "Lumina",
        context:
          "Consultora de ingeniería contra incendios en Dubai. La elaboración de informes requería recopilar documentos, referencias precisas y redacción estructurada - 4 a 5 días por caso.",
        result:
          "Menos de 3 horas por informe. El sistema corre en su infraestructura. El equipo lo posee completamente."
      }
    ]
  },
  problems: {
    heading:
      "Por qué la mayoría de los proyectos de IA en operaciones no duran",
    sub: "El problema no es la tecnología. Es lo que pasa después del piloto - y quién termina siendo dueño del resultado.",
    items: [
      {
        title: "Las señales existen. El sistema para actuar sobre ellas, no.",
        desc: "Picos de demanda, ventanas de precios, alertas de mantenimiento, brechas de personal - tu operación produce estas señales todos los días. Pero sin un sistema que las visibilice automáticamente, tu equipo decide por instinto o por la planilla del año pasado. Los datos siempre estuvieron. La herramienta para actuar sobre ellos, no."
      },
      {
        title:
          "Tiempo de expertos perdido en trabajo que no debería ser manual",
        desc: "En la mayoría de las operaciones de servicio, el cuello de botella más costoso no es la estrategia - es el ensamblaje. Documentos reunidos de múltiples fuentes. Reportes escritos a mano a partir de investigaciones que tardaron días en organizarse. Aprobaciones que requieren que alguien junte manualmente información que ya existe en el sistema."
      },
      {
        title: "Cuando el proveedor se va, el sistema se apaga.",
        desc: "La mayoría de los proyectos de IA fallan después de la prueba de concepto - no porque la tecnología no funcionó, sino porque nadie del equipo fue capacitado para operarla. El proveedor se va. El sistema se apaga. Vuelves a las planillas sin nada que mostrar por la inversión."
      }
    ]
  },
  differentiation: {
    heading: "Construimos sistemas que tu equipo posee y opera.",
    intro:
      "",
    pivot: "",
    items: [
      "Corre dentro de tu infraestructura - no la nuestra",
      "Sin precios SaaS atados a tu lógica operativa",
      "Código completamente documentado y transferible",
    ],
    closing:
      "Cuando el proyecto termina, eres dueño del sistema por completo. No una licencia. No un dashboard. El sistema mismo - documentado, transferible, y construido para evolucionar con tu equipo."
  },
  services: {
    heading: "Lo que construimos",
    sub: "",
    items: [
      {
        title: "Diagnóstico de Oportunidades de IA",
        desc: "Mapeamos tu operación con el equipo que la opera - no con marcos genéricos. Obtienes una lista priorizada de las oportunidades de automatización de mayor valor en tus flujos: ingresos, staffing, marketing, mantenimiento, compliance, reportes."
      },
      {
        title: "Sistemas de IA Personalizados",
        desc: "Diseñamos y construimos el sistema para tu contexto exacto - forecasting de demanda, automatización de investigación documental, analítica de ingresos, mantenimiento predictivo, reportes de compliance, disparadores de marketing, o lo que tu operación necesite."
      },
      {
        title: "Capacitación del Equipo y Entrega Total",
        desc: "Todo proyecto termina con tu equipo capacitado para operar, modificar y evolucionar lo que fue construido. Transferimos el conocimiento para operar el sistema - no solo el software - para que la inversión perdure."
      }
    ]
  },
  sectorIdeas: {
    heading: "Cómo lucen estos sistemas en la práctica",
    sub: "Sistemas de IA concretos diseñados para los problemas operativos que se repiten con más frecuencia en los negocios de servicio.",
    sectors: [
      {
        name: "Ingresos y Demanda",
        items: [
          "Precios dinámicos ligados a demanda, estacionalidad y eventos externos",
          "Forecasting de demanda con disparadores automáticos de staffing e insumos",
          "Detección de anomalías de ingresos con alertas en tiempo real",
          "Recuperación de reservas y conversiones basada en señales de comportamiento"
        ]
      },
      {
        name: "Operaciones y Trabajo de Conocimiento",
        items: [
          "Investigación documental y generación de informes - flujos de días a horas",
          "Alertas predictivas de mantenimiento desde registros de equipos e historial",
          "Monitoreo de costos por activo con detección de anomalías",
          "Automatización de informes de compliance y auditoría"
        ]
      },
      {
        name: "Marketing y Crecimiento",
        items: [
          "Disparadores automáticos de marketing basados en forecasting de demanda",
          "Análisis de atribución de canales para inversión en marketing",
          "Análisis de reseñas y feedback para detectar problemas recurrentes",
          "Segmentación de clientes y reactivación basada en patrones de comportamiento"
        ]
      },
      {
        name: "Compliance & Legal",
        items: [
          "Monitoreo de obligaciones regulatorias y alertas automáticas",
          "Clasificación y análisis de documentos jurídicos con IA",
          "Detección de anomalías en contratos y auditorías",
          "Due diligence asistida por IA para M&A y alianzas"
        ]
      }
    ]
  },
  team: {
    heading:
      "Construido por operadores que implementan los sistemas ellos mismos.",
    sub: "River Labs fue fundado por ingenieros y operadores que han construido sistemas de automatización en e-commerce, operaciones y servicios regulados. Nos enfocamos en una cosa: convertir datos operativos en sistemas que los equipos puedan realmente operar - no prototipos que desaparecen después del piloto.",
    members: [
      {
        name: "Leonardo Werner",
        role: "Cultura, Personas & Gobernanza",
        bio: "Bio próximamente.",
        fullBio:
          "Leonardo Werner trabaja en la intersección entre ética, cultura organizacional y gobernanza corporativa. Es consultor sénior en Principia Advisory y profesor invitado de la PUC-Rio y de la EAE Business School, en Barcelona, donde imparte ética empresarial en cursos de grado y posgrado.\n\nSus proyectos tienen alcance global y se centran en ayudar a las organizaciones a construir iniciativas que alineen cultura, estrategia y tecnologías emergentes desde una perspectiva ética. También es fellow del FreedomLab, think tank holandés, donde escribe sobre el impacto de las tecnologías digitales para individuos y sociedad.\n\nAntes de dedicarse a la consultoría en ética y gobernanza, trabajó en inteligencia corporativa, compliance (KYC/AML) y due diligence reputacional, con foco en clientes con operaciones en América Latina.",
        image: "/Leonardo_PP.png"
      },
      {
        name: "João Guilherme Santos",
        role: "Arquitecto de Soluciones",
        bio: "Bio próximamente.",
        image: "/Joao_PP.png",
        objectPosition: "center top"
      },
      {
        name: "Antonio Rapozo",
        role: "Desarrollador & Soluciones Tech",
        bio: "Bio próximamente.",
        fullBio:
          "Antonio Rapozo es ingeniero full-stack sénior con más de 8 años de experiencia construyendo sistemas de misión crítica para los sectores de gobierno, transporte y energía. En los últimos 4 años, desarrolló plataformas de inspección de puentes y gestión de activos de infraestructura utilizadas por más de 15 Departamentos de Transporte estatales en EE. UU., procesando datos relacionados con más de 500 millones de dólares en inversiones anuales.\n\nActualmente trabaja en una plataforma de seguridad de navegadores para proveedores de servicios gestionados (MSPs), con foco en la protección contra amenazas emergentes de IA, phishing, malware y filtrado DNS. Su trabajo transforma el navegador — hoy el punto de acceso más vulnerable en las organizaciones — en un workspace seguro y gestionable, con controles avanzados de seguridad, análisis de credenciales y monitoreo de productividad.\n\nSu expertise técnico abarca Vue.js, React, C#, .NET, TypeScript y AWS, con doble certificación AWS Solutions Architect. Integra IA en sistemas de producción con OpenAI, LangChain y Semantic Kernel, y es creador de MemoryKit — biblioteca open-source en .NET que implementa una arquitectura de memoria inspirada en neurociencia para aplicaciones de IA.\n\nCon formación en ingeniería mecánica por el CEFET/RJ, programa de doble titulación en Alemania (Deggendorf/IIK Düsseldorf) y certificación en Machine Learning por Stanford, Antonio aporta una combinación poco común de profundidad técnica, visión arquitectónica y experiencia en entornos regulatorios complejos. Es brasileño, multilingüe (portugués, inglés, alemán, español) y trabaja de forma remota con equipos distribuidos desde 2020.\n\nSu foco está en construir soluciones escalables que conecten la ingeniería de software de alto nivel con las necesidades reales del negocio — desde la infraestructura gubernamental estadounidense hasta la próxima generación de agentes inteligentes.",
        image: "/Antonio_PP.png"
      },
      {
        name: "Enrique Ibarra",
        role: "Full Stack Engineer",
        bio: "Bio próximamente.",
        fullBio:
          "Enrique Ibarra trabaja en la intersección entre inteligencia artificial, blockchain y desarrollo digital, con foco en transformar la tecnología en soluciones prácticas para las empresas. Se dedica a la creación e implementación de sistemas que mejoran procesos, reducen costos y aumentan la eficiencia mediante la automatización y el uso inteligente de los datos.\n\nSus proyectos tienen alcance internacional, con iniciativas en Europa, América Latina y Oriente Medio, y se centran en aplicar IA de forma estratégica, ayudando a las organizaciones a adoptar nuevas tecnologías sin complejidad innecesaria. Su enfoque combina el pensamiento estructurado con una mentalidad práctica, buscando siempre las preguntas correctas y soluciones que realmente funcionen en el día a día de distintas industrias.\n\nA lo largo de su trayectoria, también desarrolló experiencia en Web3 y desarrollo de aplicaciones, trabajando con productos digitales y nuevas formas de infraestructura tecnológica. Su foco está en construir soluciones útiles, bien diseñadas y alineadas con las necesidades reales del negocio.",
        image: "/Enrique_PP.png"
      }
    ]
  },
  methodology: {
    heading: "Cómo trabajamos",
    sub: "Tres principios que no cambian, independientemente de lo que construyamos.",
    triadHeading: "Nuestra Metodología",
    principles: [
      "Cocreamos - con el equipo que opera el negocio, desde la primera conversación. No detrás de un slide. No entregado al final.",
      "Capacitamos - tu equipo aprende a operar, modificar y evolucionar lo construido. Sin dependencia permanente de River Labs para mantener el sistema.",
      "Entregamos - código documentado dentro de tu propia infraestructura. Tú eres dueño del sistema. No una licencia para usarlo. El sistema mismo."
    ],
    steps: [
      {
        title: "Descubrimiento",
        timeline:
          "Mapea tus procesos, fuentes de datos y restricciones operativas"
      },
      {
        title: "Diagnóstico",
        timeline: "Identifica dónde la IA crea el mayor valor medible"
      },
      {
        title: "Diseño de Solución",
        timeline:
          "Define arquitectura y acuerda métricas de éxito antes de construir"
      },
      {
        title: "Piloto",
        timeline:
          "Construye un sistema funcional y valídalo con tu equipo en producción"
      },
      {
        title: "Deploy y Entrega",
        timeline:
          "Lanza a producción y transfiere la propiedad total a tu equipo"
      }
    ]
  },
  comparison: {
    heading: "Socio de largo plazo. No proveedor puntual.",
    goodItems: [
      "Cocreamos con tu equipo - sin tercerizar el trabajo",
      "Capacitamos para autonomía total - sin dependencia de proveedor",
      "Entregamos código documentado funcionando en tu infraestructura",
      "Precio fijo por hito - tú eres dueño del sistema"
    ]
  },
  whyus: {
    heading: "Construido para operadores, no para comités",
    features: [
      {
        title: "Basado en tus documentos reales",
        desc: "Empezamos desde tus balances, DFs, exportaciones de ticketing y logs de logística - no benchmarks de industria."
      },
      {
        title: "Tú eres dueño del sistema",
        desc: "Sin dependencia de proveedores, sin suscripciones SaaS. Agentes personalizados construidos para correr en tu propia infraestructura."
      }
    ],
    cta: "Habla con nosotros"
  },
  clientCards: {
    sectionLabel: "Acceso restringido · Estudios exclusivos",
    heading: "Sistemas en producción",
    subtitle:
      "Cada estudio está construido a partir de datos públicos, investigación sectorial y divulgaciones financieras.",
    restricted: "Acceso restringido",
    clients: [
      {
        desc: "Construcción pesada, licitaciones y gestión de contratos - estudio de mercado y diagnóstico personalizado."
      },
      {
        desc: "Trading de soja, planificación de cosecha y compliance logístico - análisis de impacto financiero con IA."
      },
      {
        desc: "Terminal de cruceros, eventos y compliance portuario - estudio basado en divulgaciones financieras públicas."
      },
      {
        desc: "Boletería, operación ferroviaria y compliance ICMBio - análisis de ingresos y mantenimiento predictivo."
      },
      {
        desc: "Teleférico, eventos y gastronomía - análisis de boletería dinámica y mantenimiento predictivo."
      },
      {
        desc: "7 unidades de ecoturismo (AquaRio, BioParque, Cataratas, Noronha) - análisis de flujo y compliance ICMBio."
      }
    ]
  },
  faq: {
    heading: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué entrega concretamente el Diagnóstico Gratuito de IA?",
        a: "Después de responder el cuestionario, el diagnóstico se envía a tu bandeja de entrada en formato de informe. Identifica tres oportunidades y puntos de acción que pueden mejorar el flujo operativo dentro de tu área u organización."
      },
      {
        q: "¿Necesitamos reemplazar nuestros sistemas actuales?",
        a: "No. Nos integramos con lo que ya tienes - plataformas de boletería, ERPs, sistemas de gestión documental, APIs personalizadas, bases de datos legacy. El objetivo es agregar toma de decisiones automatizada a tu infraestructura actual, no forzar una migración."
      },
      {
        q: "¿Qué pasa después de la entrega? ¿Necesitamos a River Labs para mantenerlo?",
        a: "No - y ese es un principio de diseño central en cada proyecto que tomamos. Cada sistema incluye documentación completa y capacitación del equipo para que tu operación pueda mantenerlo y evolucionarlo de forma independiente. No diseñamos para la dependencia."
      },
      {
        q: "¿En qué se diferencia esto de comprar una herramienta de IA o plataforma SaaS?",
        a: "Las herramientas de IA genéricas están construidas para la operación promedio. Tu operación no es promedio - tiene datos específicos, flujos específicos y restricciones específicas que las herramientas genéricas no contemplan. Construimos un sistema para tu contexto exacto, corriendo en tu infraestructura, sin tarifa mensual y sin proveedor al que llamar cuando algo falla. Tu equipo lo opera."
      }
    ]
  },
  cta: {
    heading:
      "Descubre exactamente dónde tu operación está dejando valor sobre la mesa.",
    sub: "Una conversación de 45 minutos. Mapeamos tu operación y te enviamos un informe escrito con las tres oportunidades de automatización de mayor valor en tu contexto - específicas a tus flujos, tus datos y tu equipo. Realizamos un número limitado de diagnósticos cada mes para profundizar en cada uno.",
    btn1: "Reserva tu Diagnóstico Gratuito de IA",
    btn2: "Habla con Nuestro Equipo",
    badge: "Sin compromiso. Sin SaaS. Tu equipo es dueño de lo que construimos."
  },
  footer: {
    copyright: "© 2026 River Labs.",
    links: ["Servicios", "Área de Cliente", "Contacto"],
    cta: "Diagnóstico Gratuito"
  },
  solutions: {
    heading: "Lo que construimos",
    colArea: "Área",
    colWhat: "Qué Construimos",
    colImpact: "Impacto en el Negocio",
    rows: [
      {
        area: "Ingresos",
        what: "Precios dinámicos + pronóstico de demanda",
        impact: "8-20% más ingresos"
      },
      {
        area: "Operaciones",
        what: "Automatización de procesos + RPA",
        impact: "40% menos tiempo de proceso"
      },
      {
        area: "Logística",
        what: "Rutas inteligentes + optimización de costos",
        impact: "25-35% menos costos"
      },
      {
        area: "Inteligencia",
        what: "Plataformas de datos + dashboards en tiempo real",
        impact: "Decisiones, no suposiciones"
      },
      {
        area: "Compliance",
        what: "Reportes automáticos + trazabilidad de auditoría",
        impact: "Cero carga manual"
      }
    ],
    cta: "Obtén Tu Diagnóstico Gratuito"
  }
}

const pt: Dict = {
  nav: {
    services: "Serviços",
    casestudies: "Área do Cliente",
    contact: "Contato",
    howwework: "Como Trabalhamos",
    team: "Equipe",
    faq: "FAQ",
    cta: "Diagnóstico Gratuito"
  },
  hero: {
    heading1: "A IA não vai substituir tudo,",
    headingItalic: "mas tem a capacidade de melhorar",
    heading2: "fluxos de trabalho.",
    sub: "Trabalhamos nessa interseção: reduzindo custos, retrabalho e propensão a erros manuais",
    cta1: "Diagnóstico Gratuito de IA",
    cta2: "Veja como trabalhamos",
    badges: ["Co-criamos", "Capacitamos", "Você é dono do sistema"]
  },
  proof: {
    label: "Indústrias em que nos focamos",
    sectors: [
      "Turismo",
      "Transporte",
      "Hospitalidade",
      "Eventos",
      "Compliance & Legal"
    ]
  },
  authority: {
    heading:
      "Sabemos o que quebra em operações de serviço - e por que a IA normalmente não resolve.",
    paragraphs: [
      "A maioria das operações de serviço trabalha com dados que nunca aproveita totalmente. Sinais de demanda ficam presos em exportações de bilheteria. O risco de manutenção vive nos registros de equipamentos. Fluxos de pesquisa e elaboração de relatórios consomem dias de tempo de especialistas que poderiam ser usados em trabalho de maior valor. Os dados e os processos estão lá - o sistema para agir sobre eles, não.",
      "Desenhamos para essa lacuna.",
      "Um sistema de pesquisa documental e geração de relatórios que implementamos na Lumina, uma consultoria de engenharia de incêndio em Dubai, reduziu o fluxo de trabalho de relatórios especializados de 4-5 dias por caso para menos de 3 horas. É esse o tipo de impacto operacional que projetamos: específico à sua operação, rodando na sua infraestrutura, completamente de propriedade da sua equipe. Não uma ferramenta genérica. Não uma assinatura SaaS. O sistema em si."
    ]
  },
  cases: {
    heading: "Sistemas reais. Resultados medidos.",
    sub: "Três soluções para três setores distintos",
    problemLabel: "Problema",
    resultLabel: "Resultado",
    items: [
      {
        tag: "Marketing · SEO",
        client: "Washdog",
        context:
          "Novo negócio de lavagem de pets entrando em um mercado saturado, sem presença digital, sem SEO e sem prova social.",
        result:
          "Primeira página no Google em menos de 1 mês e mais de 4.000 impressões orgânicas. Terceiro em buscas com AI (ChatGPT e Claude Code)."
      },
      {
        tag: "Automação · E-commerce",
        client: "VTEX",
        context:
          "As equipes gastavam 10 horas por RFP respondendo manualmente ~117 questões técnicas e de compliance - sem padronização, em EMEA, EUA, Brasil, LATAM e APAC.",
        result:
          "1.094 horas economizadas em 6 meses. $36,4k economizado vs. plataforma externa. 91% de redução no custo anual de ferramentas."
      },
      {
        tag: "Automação · Engenharia",
        client: "Lumina",
        context:
          "Consultoria de engenharia de incêndio em Dubai. O processo de elaboração de relatórios especializados - coleta de documentos, referenciamento preciso e escrita estruturada - levava de 4 a 5 dias por caso.",
        result:
          "Menos de 3 horas por relatório. O sistema roda na infraestrutura deles. A equipe é dona do sistema."
      }
    ]
  },
  problems: {
    heading: "Por que a maioria dos projetos de IA em operações não dura?",
    sub: "O problema não é a tecnologia. É o que acontece depois do piloto - e quem acaba sendo dono do resultado.",
    items: [
      {
        title: "Os dados existem, mas estão fragmentados.",
        desc: "Picos de demanda, janelas de precificação, alertas de manutenção, lacunas de equipe - a sua operação produz esses sinais todo dia. Mas sem um sistema que os evidencie automaticamente, seu time decide por instinto ou pela planilha do ano passado. Os dados sempre estiveram lá. A ferramenta para agir sobre eles, não."
      },
      {
        title:
          "Trabalho e retrabalho em tarefas que poderiam ser automatizadas.",
        desc: "Na maioria das operações de serviço, o gargalo mais caro não é a estratégia - é a montagem. Documentos reunidos de múltiplas fontes. Relatórios escritos à mão a partir de pesquisas que levaram dias para organizar. Aprovações que exigem que alguém junte manualmente informações que já existem no sistema."
      },
      {
        title: "Sistemas e ferramentas complexas demais para usar.",
        desc: "A maioria dos projetos de IA falha depois da prova de conceito - não porque a tecnologia não funcionou, mas porque ninguém da equipe foi treinado para operá-la. O fornecedor vai embora. O sistema para. Você volta para as planilhas sem nada para mostrar pelo investimento."
      }
    ]
  },
  differentiation: {
    heading:
      "Você apresenta o desafio, nós desenvolvemos a solução de maneira ágil e pensando sempre na experiência de uso para sua equipe.",
    intro:
      "",
    pivot: "",
    items: [
      "Roda dentro da sua infraestrutura - não da nossa",
      "Sem preços SaaS atrelados à sua lógica operacional",
      "Código completamente documentado e transferível",
    ],
    closing:
      "Quando o projeto termina, você é dono do sistema por completo. Não uma licença. Não um dashboard. O sistema em si - documentado, transferível, e construído para evoluir com a sua equipe."
  },
  services: {
    heading: "Construímos soluções específicas para o seu contexto.",
    sub: "",
    items: [
      {
        title: "Diagnóstico de Oportunidades de IA",
        desc: "Mapeamos sua operação com o time que a opera, e geramos uma lista com as principais oportunidades em desenvolver soluções que otimizem o dia-a-dia do marketing, manutenção, financeiro e compliance."
      },
      {
        title: "Sistemas de IA Personalizados",
        desc: "Projetamos e construímos o sistema para o seu contexto exato - previsão de demanda, automação de pesquisa documental, analytics de receita, manutenção preditiva, relatórios de compliance, gatilhos de marketing, ou o que sua operação precisar."
      },
      {
        title: "Treinamento da Equipe e Entrega Total",
        desc: "Todo projeto termina com sua equipe treinada para operar, modificar e evoluir o que foi construído. Transferimos o conhecimento para operar o sistema - não apenas o software - para que o investimento dure."
      }
    ]
  },
  sectorIdeas: {
    heading: "Como essas soluções se parecem na prática?",
    sub: "Sistemas de IA concretos projetados para os problemas operacionais que se repetem com mais frequência em negócios de serviço.",
    sectors: [
      {
        name: "Receita e Demanda",
        items: [
          "Precificação dinâmica ligada a demanda, sazonalidade e eventos externos",
          "Previsão de demanda com gatilhos automáticos de equipe e suprimentos",
          "Detecção de anomalias de receita com alertas em tempo real"
        ]
      },
      {
        name: "Marketing",
        items: [
          "Gatilhos automáticos de marketing baseados em previsão de demanda",
          "Análise de atribuição de canais para investimento em marketing",
          "Análise de avaliações e feedbacks para detectar problemas recorrentes"
        ]
      },
      {
        name: "Compliance & Legal",
        items: [
          "Monitoramento de obrigações regulatórias e alertas automáticos",
          "Classificação e análise de documentos jurídicos com IA",
          "Detecção de anomalias em contratos e auditorias",
          "Due diligence assistida por IA para M&A e parcerias"
        ]
      }
    ]
  },
  team: {
    heading:
      "Construído por operadores que implementam os sistemas eles mesmos.",
    sub: "A River Labs foi fundada por quatro profissionais que desenvolveram para empresas globais de diferentes setores e indústrias. O foco é único: melhorar o fluxo de trabalho das pessoas por meio de soluções tecnológicas.",
    members: [
      {
        name: "Leonardo Werner",
        role: "Cultura, Pessoas & Governança",
        bio: "Bio em breve.",
        fullBio:
          "Leonardo Werner trabalha na interseção entre ética, cultura organizacional e governança corporativa. É consultor sênior na Principia Advisory e professor convidado da PUC-Rio e da EAE Business School, em Barcelona, onde leciona ética empresarial em cursos de graduação e pós-graduação.\n\nSeus projetos têm alcance global e se concentram em ajudar organizações a construir iniciativas que alinhem cultura, estratégia e tecnologias emergentes a partir de uma perspectiva ética. É também fellow do FreedomLab, think tank holandês, onde escreve sobre os impactos das tecnologias digitais para indivíduos e sociedade.\n\nAntes de se dedicar à consultoria em ética e governança, atuou em inteligência corporativa, compliance (KYC/AML) e due diligence reputacional, com foco em clientes com operações na América Latina.",
        image: "/Leonardo_PP.png"
      },
      {
        name: "João Guilherme Santos",
        role: "Arquiteto de Soluções",
        bio: "Bio em breve.",
        image: "/Joao_PP.png",
        objectPosition: "center top"
      },
      {
        name: "Antonio Rapozo",
        role: "Desenvolvedor & Soluções Tech",
        bio: "Bio em breve.",
        fullBio:
          "Antonio Rapozo é engenheiro full-stack sênior com mais de 8 anos de experiência construindo sistemas de missão crítica para os setores de governo, transportes e energia. Nos últimos 4 anos, desenvolveu plataformas de inspeção de pontes e gestão de ativos de infraestrutura utilizadas por mais de 15 Departamentos de Transporte estaduais nos EUA, processando dados referentes a mais de US$ 500 milhões em investimentos anuais.\n\nAtualmente, atua no desenvolvimento de uma plataforma de segurança de navegadores voltada para provedores de serviços gerenciados (MSPs), trabalhando na proteção contra ameaças emergentes de IA, phishing, malware e filtragem DNS. Seu trabalho transforma o navegador — hoje o ponto de acesso mais vulnerável nas organizações — em um workspace seguro e gerenciável, com controles avançados de segurança, análise de credenciais e monitoramento de produtividade.\n\nSua expertise técnica abrange Vue.js, React, C#, .NET, TypeScript e AWS, com dupla certificação AWS Solutions Architect. Integra inteligência artificial em sistemas de produção utilizando OpenAI, LangChain e Semantic Kernel, e é criador do MemoryKit — biblioteca open-source em .NET que implementa uma arquitetura de memória inspirada em neurociência para aplicações de IA.\n\nCom formação em engenharia mecânica pelo CEFET/RJ, programa de duplo diploma na Alemanha (Deggendorf/IIK Düsseldorf) e certificação em Machine Learning por Stanford, Antonio traz uma combinação rara de profundidade técnica, visão arquitetural e experiência em ambientes regulatórios complexos. É brasileiro, multilíngue (português, inglês, alemão, espanhol) e atua remotamente com equipes distribuídas desde 2020.\n\nSeu foco está em construir soluções escaláveis que conectam engenharia de software de alto nível com as necessidades reais de negócio — da infraestrutura governamental americana à próxima geração de agentes inteligentes.",
        image: "/Antonio_PP.png"
      },
      {
        name: "Enrique Ibarra",
        role: "Engenheiro Full Stack",
        bio: "Bio em breve.",
        fullBio:
          "Enrique Ibarra trabalha na interseção entre inteligência artificial, blockchain e desenvolvimento digital, com foco em transformar tecnologia em soluções práticas para empresas. Atua na criação e implementação de sistemas que melhoram processos, reduzem custos e aumentam eficiência por meio de automação e uso inteligente de dados.\n\nSeus projetos têm alcance internacional, incluindo iniciativas na Europa, América Latina e Oriente Médio, e se concentram em aplicar IA de forma estratégica, ajudando organizações a adotar novas tecnologias sem complexidade desnecessária. Sua abordagem combina pensamento estruturado com uma mentalidade prática, buscando sempre as perguntas certas e soluções que realmente funcionem no dia a dia de diferentes indústrias.\n\nAo longo de sua trajetória, também desenvolveu experiência em Web3 e desenvolvimento de aplicações, trabalhando com produtos digitais e novas formas de infraestrutura tecnológica. Seu foco está em construir soluções úteis, bem desenhadas e alinhadas às necessidades reais de negócio.",
        image: "/Enrique_PP.png"
      }
    ]
  },
  methodology: {
    heading: "Como trabalhamos",
    sub: "Três princípios que não mudam, independentemente do que construímos.",
    triadHeading: "Nossa Abordagem",
    principles: [
      "Co-criamos - com o time que opera o negócio, desde a primeira conversa. Não atrás de um slide. Não entregue no final.",
      "Capacitamos - sua equipe aprende a operar, modificar e evoluir o que foi construído. Sem dependência permanente da River Labs para manter o sistema.",
      "Entregamos - código documentado dentro da sua própria infraestrutura. Você é dono do sistema. Não uma licença para usá-lo. O sistema em si."
    ],
    steps: [
      {
        title: "Descoberta",
        timeline:
          "Mapeamos seus processos, fontes de dados e restrições operacionais"
      },
      {
        title: "Diagnóstico",
        timeline: "Identificamos onde a IA cria o maior valor mensurável"
      },
      {
        title: "Design da Solução",
        timeline:
          "Definimos a arquitetura e métricas de sucesso antes de construir"
      },
      {
        title: "Piloto",
        timeline:
          "Construímos uma solução funcional para validação com sua equipe"
      },
      {
        title: "Deploy e Entrega",
        timeline:
          "Lançamos em produção e transferimos a propriedade total da solução para sua empresa."
      }
    ]
  },
  comparison: {
    heading: "Parceiro de jornada. Não fornecedor avulso.",
    goodItems: [
      "Co-criamos com o time da operação - sem terceirizar",
      "Capacitamos o time para operar e evoluir a solução - sem dependência de fornecedor",
      "Entregamos código documentado rodando na sua infraestrutura",
      "Preço fixo por marco - você é dono do sistema"
    ]
  },
  whyus: {
    heading: "Feito para operadores, não para comitês",
    features: [
      {
        title: "Baseado nos seus documentos reais",
        desc: "Começamos pelos seus balanços, DFs, exportações de bilheteria e logs de logística - não benchmarks de setor."
      },
      {
        title: "Você é dono do sistema",
        desc: "Sem dependência de fornecedor, sem assinaturas SaaS. Agentes sob medida construídos para rodar na sua própria infraestrutura."
      }
    ],
    cta: "Fale com a gente"
  },
  clientCards: {
    sectionLabel: "Acesso restrito · Estudos exclusivos",
    heading: "Sistemas em produção",
    subtitle:
      "Cada estudo é construído a partir de dados públicos, pesquisa setorial e divulgações financeiras.",
    restricted: "Acesso restrito",
    clients: [
      {
        desc: "Construção pesada, licitações e gestão de contratos - estudo de mercado e diagnóstico personalizado."
      },
      {
        desc: "Trading de soja, planejamento de safra e compliance logístico - análise de impacto financeiro com IA."
      },
      {
        desc: "Terminal de cruzeiros, eventos e compliance portuário - estudo baseado em divulgações financeiras públicas."
      },
      {
        desc: "Bilheteria, operação ferroviária e compliance ICMBio - análise de receita e manutenção preditiva."
      },
      {
        desc: "Teleférico, eventos e gastronomia - análise de bilheteria dinâmica e manutenção preditiva."
      },
      {
        desc: "7 unidades de ecoturismo (AquaRio, BioParque, Cataratas, Noronha) - análise de fluxo e compliance ICMBio."
      }
    ]
  },
  faq: {
    heading: "Perguntas frequentes",
    items: [
      {
        q: "O que o Diagnóstico Gratuito de IA entrega concretamente?",
        a: "Após responder ao questionário, o diagnóstico é enviado para a sua caixa de e-mail em formato de relatório. Ele identifica três oportunidades e pontos de ação que podem melhorar o fluxo operacional dentro da sua área ou organização."
      },
      {
        q: "Precisamos substituir nossos sistemas atuais?",
        a: "Não. Integramos com o que você já tem - plataformas de bilheteria, ERPs, sistemas de gestão documental, APIs personalizadas, bancos de dados legados. O objetivo é adicionar tomada de decisão automatizada à sua infraestrutura atual, sem forçar uma migração."
      },
      {
        q: "O que acontece após a entrega de uma ferramenta desenvolvida por vocês? Precisamos da River Labs para manter?",
        a: "Não - e esse é um princípio de design central em cada projeto que assumimos. Todo sistema inclui documentação completa e treinamento da equipe para que sua operação possa mantê-lo e evoluí-lo de forma independente. Não projetamos para dependência."
      }
    ]
  },
  cta: {
    heading:
      "Descubra exatamente onde sua operação está deixando valor na mesa.",
    sub: "Uma conversa de 45 minutos. Mapeamos sua operação que identifica as principais áreas onde a tecnologia pode agregar valor no seu contexto.",
    btn1: "Agende seu Diagnóstico Gratuito",
    btn2: "Fale com Nossa Equipe",
    badge: "Sem compromisso. Sem SaaS. Sua equipe é dona do que construímos."
  },
  footer: {
    copyright: "© 2026 River Labs.",
    links: ["Serviços", "Área do Cliente", "Contato"],
    cta: "Diagnóstico Gratuito"
  },
  solutions: {
    heading: "O que construímos",
    colArea: "Área",
    colWhat: "O que Construímos",
    colImpact: "Impacto no Negócio",
    rows: [
      {
        area: "Receita",
        what: "Precificação dinâmica + previsão de demanda",
        impact: "8-20% de aumento de receita"
      },
      {
        area: "Operações",
        what: "Automação de processos + RPA",
        impact: "40% menos tempo de processo"
      },
      {
        area: "Logística",
        what: "Roteirização inteligente + otimização de custos",
        impact: "25-35% menos custos"
      },
      {
        area: "Inteligência",
        what: "Plataformas de dados + dashboards em tempo real",
        impact: "Decisões, não suposições"
      },
      {
        area: "Compliance",
        what: "Relatórios automáticos + trilha de auditoria",
        impact: "Zero overhead manual"
      }
    ],
    cta: "Obtenha Seu Diagnóstico Gratuito"
  }
}

const dictionaries: Record<Lang, Dict> = { en, es, pt }

export function getDictionary(lang: string): Dict {
  return dictionaries[lang as Lang] ?? en
}
