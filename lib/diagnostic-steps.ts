export type QuestionType = "choice" | "multiselect" | "scale" | "text" | "email";

export interface Question {
  id: string;
  label: string;
  type: QuestionType;
  options?: string[];
  hint?: string;
  maxSelect?: number;
  required?: boolean;
}

export interface StepDef {
  id: string;
  title: string;
  subtitle: string;
  questions: Question[];
}

export function getDiagnosticSteps(lang: "en" | "es" | "pt"): StepDef[] {
  if (lang === "en") return stepsEN;
  if (lang === "es") return stepsES;
  return stepsPT;
}

/* ─── PT ──────────────────────────────────────────────── */
const stepsPT: StepDef[] = [
  {
    id: "empresa",
    title: "Sobre o seu negócio",
    subtitle: "Contexto inicial para entendermos o tamanho e o setor da sua operação.",
    questions: [
      {
        id: "setor",
        label: "Em qual setor sua empresa atua?",
        type: "choice",
        options: ["Logística & transporte", "Imobiliário & construção", "Varejo & e-commerce", "Manufatura & indústria", "Saúde & clínicas", "Educação", "Financeiro & contabilidade", "Tecnologia & SaaS", "Agronegócio", "Outro"],
        required: true,
      },
      {
        id: "receita",
        label: "Qual é a faixa de receita bruta anual?",
        type: "choice",
        options: ["Até R$1M", "R$1M – R$10M", "R$10M – R$50M", "R$50M – R$200M", "Acima de R$200M"],
        required: true,
      },
    ],
  },
  {
    id: "operacao",
    title: "Onde o tempo vai embora",
    subtitle: "Identificar as áreas com mais trabalho manual é o primeiro passo para calcular o ROI.",
    questions: [
      {
        id: "areas_manuais",
        label: "Em quais áreas sua equipe passa mais tempo em tarefas manuais ou repetitivas?",
        type: "multiselect",
        options: ["Operações & logística", "Vendas & CRM", "Financeiro & controladoria", "RH & folha de pagamento", "Atendimento ao cliente", "Relatórios & análise de dados", "Jurídico & compliance", "Compras & supply chain"],
        required: true,
      },
    ],
  },
  {
    id: "gargalos",
    title: "Principais gargalos",
    subtitle: "Escolha os problemas que mais impactam o resultado hoje.",
    questions: [
      {
        id: "problemas",
        label: "Quais são os maiores desafios operacionais da empresa? (escolha até 3)",
        type: "multiselect",
        maxSelect: 3,
        options: ["Processos manuais e repetitivos que consomem tempo", "Falta de visibilidade e dados em tempo real", "Retrabalho causado por erros humanos", "Dificuldade de comunicação entre áreas", "Decisões lentas por falta de informação consolidada", "Dificuldade de crescer sem contratar muito mais", "Atrasos e descumprimento de prazos", "Custo operacional elevado"],
        required: true,
      },
    ],
  },
  {
    id: "escala",
    title: "Escala do problema",
    subtitle: "Entender o volume nos ajuda a estimar o impacto financeiro real antes de qualquer proposta.",
    questions: [
      {
        id: "pessoas_afetadas",
        label: "Quantas pessoas estão envolvidas nos processos que você quer melhorar?",
        type: "choice",
        options: ["1 – 5 pessoas", "5 – 20 pessoas", "20 – 100 pessoas", "Mais de 100 pessoas"],
        required: true,
      },
      {
        id: "impacto_frequencia",
        label: "Com que frequência esses problemas causam impacto real no resultado?",
        type: "scale",
        hint: "0 = raramente  ·  10 = todo dia, o tempo todo",
        required: true,
      },
    ],
  },
  {
    id: "ferramentas",
    title: "Ferramentas que vocês usam",
    subtitle: "Saber o que já existe nos ajuda a integrar em vez de substituir.",
    questions: [
      {
        id: "sistemas",
        label: "Quais sistemas ou ferramentas a empresa usa hoje? (selecione todas que se aplicam)",
        type: "multiselect",
        options: ["ERP — SAP, TOTVS, Omie ou similar", "CRM — Salesforce, HubSpot, RD Station ou similar", "Excel & Google Sheets", "BI — Power BI, Tableau, Looker", "Sistema desenvolvido internamente", "Plataformas de e-commerce", "Ferramentas de comunicação — Slack, Teams", "Poucos sistemas estruturados"],
        required: true,
      },
    ],
  },
  {
    id: "automacao",
    title: "Experiência com automação",
    subtitle: "Sem julgamento — o contexto nos ajuda a propor o que realmente faz sentido para a sua realidade.",
    questions: [
      {
        id: "tentou_antes",
        label: "Sua empresa já tentou alguma solução de automação ou IA antes?",
        type: "choice",
        options: ["Não, ainda não exploramos esse caminho", "Tentamos, mas sem resultados concretos", "Sim, com resultados parciais — queremos evoluir", "Sim, com bons resultados — queremos expandir"],
        required: true,
      },
      {
        id: "obstaculo",
        label: "Qual foi ou seria o maior obstáculo para implementar uma solução?",
        type: "choice",
        options: ["Custo e incerteza sobre o retorno", "Falta de tempo para conduzir a mudança", "Resistência da equipe", "Integração com sistemas existentes", "Não saber por onde começar"],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "O que mais importa agora",
    subtitle: "Isso define onde focamos primeiro.",
    questions: [
      {
        id: "objetivo_principal",
        label: "Qual é o principal objetivo para os próximos 12 meses? (escolha até 2)",
        type: "multiselect",
        maxSelect: 2,
        options: ["Reduzir custos operacionais", "Aumentar receita ou volume de vendas", "Escalar sem precisar contratar muito mais", "Melhorar qualidade e reduzir erros", "Tomar decisões mais rápidas e embasadas", "Melhorar experiência do cliente", "Atender exigências regulatórias ou de compliance"],
        required: true,
      },
    ],
  },
  {
    id: "expectativas",
    title: "Expectativas e próximo passo",
    subtitle: "Alinhamento rápido para que nossa proposta faça sentido desde a primeira conversa.",
    questions: [
      {
        id: "prazo_resultado",
        label: "Em que prazo você espera ver os primeiros resultados?",
        type: "choice",
        options: ["1 – 3 meses", "3 – 6 meses", "6 – 12 meses", "Ainda estou explorando"],
        required: true,
      },
      {
        id: "metrica_sucesso",
        label: "O que seria um resultado claro de sucesso para você?",
        type: "choice",
        options: ["Redução mensurável de custo", "Horas economizadas por semana", "Aumento de receita ou margem", "Menos erros e retrabalho", "Relatórios e decisões mais rápidas"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contato",
    subtitle: "Com base nas suas respostas, preparamos um diagnóstico personalizado e gratuito em até 48h.",
    questions: [
      { id: "nome", label: "Seu nome completo", type: "text", required: true },
      { id: "empresa_nome", label: "Nome da empresa", type: "text", required: true },
      { id: "cargo", label: "Seu cargo", type: "choice", options: ["CEO / Fundador", "Diretor / VP", "Gerente", "Analista / Coordenador", "Outro"], required: true },
      { id: "email", label: "E-mail corporativo", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (opcional)", type: "text", required: false },
    ],
  },
];

/* ─── EN ──────────────────────────────────────────────── */
const stepsEN: StepDef[] = [
  {
    id: "empresa",
    title: "About your business",
    subtitle: "Initial context to understand your operation's size and sector.",
    questions: [
      {
        id: "setor",
        label: "What sector does your company operate in?",
        type: "choice",
        options: ["Logistics & transportation", "Real estate & construction", "Retail & e-commerce", "Manufacturing & industry", "Healthcare & clinics", "Education", "Finance & accounting", "Technology & SaaS", "Agribusiness", "Other"],
        required: true,
      },
      {
        id: "receita",
        label: "What is your annual gross revenue range?",
        type: "choice",
        options: ["Up to $500K", "$500K – $5M", "$5M – $25M", "$25M – $100M", "Above $100M"],
        required: true,
      },
    ],
  },
  {
    id: "operacao",
    title: "Where does time go?",
    subtitle: "Identifying areas with the most manual work is the first step to calculating ROI.",
    questions: [
      {
        id: "areas_manuais",
        label: "In which areas does your team spend the most time on manual or repetitive tasks?",
        type: "multiselect",
        options: ["Operations & logistics", "Sales & CRM", "Finance & accounting", "HR & payroll", "Customer service", "Reports & data analysis", "Legal & compliance", "Procurement & supply chain"],
        required: true,
      },
    ],
  },
  {
    id: "gargalos",
    title: "Main bottlenecks",
    subtitle: "Choose the problems that impact results the most today.",
    questions: [
      {
        id: "problemas",
        label: "What are the biggest operational challenges your company faces? (choose up to 3)",
        type: "multiselect",
        maxSelect: 3,
        options: ["Manual and repetitive processes that consume time", "Lack of real-time visibility and data", "Rework caused by human errors", "Difficulty communicating across teams", "Slow decisions due to lack of consolidated information", "Difficulty scaling without hiring much more", "Delays and missed deadlines", "High operating costs"],
        required: true,
      },
    ],
  },
  {
    id: "escala",
    title: "Scale of the problem",
    subtitle: "Understanding the volume helps us estimate the real financial impact before any proposal.",
    questions: [
      {
        id: "pessoas_afetadas",
        label: "How many people are involved in the processes you want to improve?",
        type: "choice",
        options: ["1 – 5 people", "5 – 20 people", "20 – 100 people", "More than 100 people"],
        required: true,
      },
      {
        id: "impacto_frequencia",
        label: "How often do these problems cause a real impact on results?",
        type: "scale",
        hint: "0 = rarely  ·  10 = every day, all the time",
        required: true,
      },
    ],
  },
  {
    id: "ferramentas",
    title: "Tools you use",
    subtitle: "Knowing what already exists helps us integrate instead of replace.",
    questions: [
      {
        id: "sistemas",
        label: "What systems or tools does the company use today? (select all that apply)",
        type: "multiselect",
        options: ["ERP — SAP, Oracle, NetSuite or similar", "CRM — Salesforce, HubSpot, Pipedrive or similar", "Excel & Google Sheets", "BI — Power BI, Tableau, Looker", "Internally developed system", "E-commerce platforms", "Communication tools — Slack, Teams", "Few structured systems"],
        required: true,
      },
    ],
  },
  {
    id: "automacao",
    title: "Automation experience",
    subtitle: "No judgment — context helps us propose what truly makes sense for your situation.",
    questions: [
      {
        id: "tentou_antes",
        label: "Has your company tried any automation or AI solution before?",
        type: "choice",
        options: ["No, we haven't explored that path yet", "We tried, but without concrete results", "Yes, with partial results — we want to evolve", "Yes, with good results — we want to expand"],
        required: true,
      },
      {
        id: "obstaculo",
        label: "What was or would be the biggest obstacle to implementing a solution?",
        type: "choice",
        options: ["Cost and uncertainty about ROI", "Lack of time to manage the change", "Team resistance", "Integration with existing systems", "Not knowing where to start"],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "What matters most now",
    subtitle: "This defines where we focus first.",
    questions: [
      {
        id: "objetivo_principal",
        label: "What is the main objective for the next 12 months? (choose up to 2)",
        type: "multiselect",
        maxSelect: 2,
        options: ["Reduce operating costs", "Increase revenue or sales volume", "Scale without hiring much more", "Improve quality and reduce errors", "Make faster and more data-driven decisions", "Improve customer experience", "Meet regulatory or compliance requirements"],
        required: true,
      },
    ],
  },
  {
    id: "expectativas",
    title: "Expectations and next step",
    subtitle: "Quick alignment so our proposal makes sense from the very first conversation.",
    questions: [
      {
        id: "prazo_resultado",
        label: "In what timeframe do you expect to see the first results?",
        type: "choice",
        options: ["1 – 3 months", "3 – 6 months", "6 – 12 months", "Still exploring"],
        required: true,
      },
      {
        id: "metrica_sucesso",
        label: "What would be a clear indicator of success for you?",
        type: "choice",
        options: ["Measurable cost reduction", "Hours saved per week", "Revenue or margin increase", "Fewer errors and rework", "Faster reports and decisions"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contact",
    subtitle: "Based on your answers, we prepare a personalized free diagnosis within 48 hours.",
    questions: [
      { id: "nome", label: "Your full name", type: "text", required: true },
      { id: "empresa_nome", label: "Company name", type: "text", required: true },
      { id: "cargo", label: "Your role", type: "choice", options: ["CEO / Founder", "Director / VP", "Manager", "Analyst / Coordinator", "Other"], required: true },
      { id: "email", label: "Work email", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (optional)", type: "text", required: false },
    ],
  },
];

/* ─── ES ──────────────────────────────────────────────── */
const stepsES: StepDef[] = [
  {
    id: "empresa",
    title: "Sobre tu negocio",
    subtitle: "Contexto inicial para entender el tamaño y el sector de tu operación.",
    questions: [
      {
        id: "setor",
        label: "¿En qué sector opera tu empresa?",
        type: "choice",
        options: ["Logística & transporte", "Inmobiliario & construcción", "Retail & e-commerce", "Manufactura & industria", "Salud & clínicas", "Educación", "Finanzas & contabilidad", "Tecnología & SaaS", "Agronegocios", "Otro"],
        required: true,
      },
      {
        id: "receita",
        label: "¿Cuál es tu rango de ingresos brutos anuales?",
        type: "choice",
        options: ["Hasta $500K", "$500K – $5M", "$5M – $25M", "$25M – $100M", "Más de $100M"],
        required: true,
      },
    ],
  },
  {
    id: "operacao",
    title: "¿A dónde va el tiempo?",
    subtitle: "Identificar las áreas con más trabajo manual es el primer paso para calcular el ROI.",
    questions: [
      {
        id: "areas_manuais",
        label: "¿En qué áreas tu equipo pasa más tiempo en tareas manuales o repetitivas?",
        type: "multiselect",
        options: ["Operaciones & logística", "Ventas & CRM", "Finanzas & contraloría", "RRHH & nómina", "Atención al cliente", "Reportes & análisis de datos", "Legal & compliance", "Compras & supply chain"],
        required: true,
      },
    ],
  },
  {
    id: "gargalos",
    title: "Principales cuellos de botella",
    subtitle: "Elige los problemas que más impactan los resultados hoy.",
    questions: [
      {
        id: "problemas",
        label: "¿Cuáles son los mayores desafíos operacionales de la empresa? (elige hasta 3)",
        type: "multiselect",
        maxSelect: 3,
        options: ["Procesos manuales y repetitivos que consumen tiempo", "Falta de visibilidad y datos en tiempo real", "Retrabajo causado por errores humanos", "Dificultad de comunicación entre áreas", "Decisiones lentas por falta de información consolidada", "Dificultad de crecer sin contratar mucho más", "Retrasos e incumplimiento de plazos", "Alto costo operacional"],
        required: true,
      },
    ],
  },
  {
    id: "escala",
    title: "Escala del problema",
    subtitle: "Entender el volumen nos ayuda a estimar el impacto financiero real antes de cualquier propuesta.",
    questions: [
      {
        id: "pessoas_afetadas",
        label: "¿Cuántas personas están involucradas en los procesos que quieres mejorar?",
        type: "choice",
        options: ["1 – 5 personas", "5 – 20 personas", "20 – 100 personas", "Más de 100 personas"],
        required: true,
      },
      {
        id: "impacto_frequencia",
        label: "¿Con qué frecuencia estos problemas causan un impacto real en los resultados?",
        type: "scale",
        hint: "0 = raramente  ·  10 = todos los días, todo el tiempo",
        required: true,
      },
    ],
  },
  {
    id: "ferramentas",
    title: "Herramientas que usan",
    subtitle: "Saber qué ya existe nos ayuda a integrar en lugar de reemplazar.",
    questions: [
      {
        id: "sistemas",
        label: "¿Qué sistemas o herramientas usa la empresa hoy? (selecciona todas las que apliquen)",
        type: "multiselect",
        options: ["ERP — SAP, Oracle, NetSuite o similar", "CRM — Salesforce, HubSpot, Pipedrive o similar", "Excel & Google Sheets", "BI — Power BI, Tableau, Looker", "Sistema desarrollado internamente", "Plataformas de e-commerce", "Herramientas de comunicación — Slack, Teams", "Pocos sistemas estructurados"],
        required: true,
      },
    ],
  },
  {
    id: "automacao",
    title: "Experiencia con automatización",
    subtitle: "Sin juicio — el contexto nos ayuda a proponer lo que realmente tiene sentido para tu realidad.",
    questions: [
      {
        id: "tentou_antes",
        label: "¿Tu empresa ya intentó alguna solución de automatización o IA antes?",
        type: "choice",
        options: ["No, aún no hemos explorado ese camino", "Lo intentamos, pero sin resultados concretos", "Sí, con resultados parciales — queremos evolucionar", "Sí, con buenos resultados — queremos expandir"],
        required: true,
      },
      {
        id: "obstaculo",
        label: "¿Cuál fue o sería el mayor obstáculo para implementar una solución?",
        type: "choice",
        options: ["Costo e incertidumbre sobre el retorno", "Falta de tiempo para gestionar el cambio", "Resistencia del equipo", "Integración con sistemas existentes", "No saber por dónde empezar"],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "Lo que más importa ahora",
    subtitle: "Esto define dónde enfocamos primero.",
    questions: [
      {
        id: "objetivo_principal",
        label: "¿Cuál es el objetivo principal para los próximos 12 meses? (elige hasta 2)",
        type: "multiselect",
        maxSelect: 2,
        options: ["Reducir costos operacionales", "Aumentar ingresos o volumen de ventas", "Escalar sin contratar mucho más", "Mejorar calidad y reducir errores", "Tomar decisiones más rápidas y fundamentadas", "Mejorar la experiencia del cliente", "Cumplir requisitos regulatorios o de compliance"],
        required: true,
      },
    ],
  },
  {
    id: "expectativas",
    title: "Expectativas y próximo paso",
    subtitle: "Alineamiento rápido para que nuestra propuesta tenga sentido desde la primera conversación.",
    questions: [
      {
        id: "prazo_resultado",
        label: "¿En qué plazo esperas ver los primeros resultados?",
        type: "choice",
        options: ["1 – 3 meses", "3 – 6 meses", "6 – 12 meses", "Aún estoy explorando"],
        required: true,
      },
      {
        id: "metrica_sucesso",
        label: "¿Qué sería un indicador claro de éxito para ti?",
        type: "choice",
        options: ["Reducción mensurable de costos", "Horas ahorradas por semana", "Aumento de ingresos o margen", "Menos errores y retrabajo", "Reportes y decisiones más rápidas"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contacto",
    subtitle: "Con base en tus respuestas, preparamos un diagnóstico personalizado y gratuito en 48 horas.",
    questions: [
      { id: "nome", label: "Tu nombre completo", type: "text", required: true },
      { id: "empresa_nome", label: "Nombre de la empresa", type: "text", required: true },
      { id: "cargo", label: "Tu cargo", type: "choice", options: ["CEO / Fundador", "Director / VP", "Gerente", "Analista / Coordinador", "Otro"], required: true },
      { id: "email", label: "Email corporativo", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (opcional)", type: "text", required: false },
    ],
  },
];
