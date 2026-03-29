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

/* ─── Ápia — Construção pesada & licitações ─────────────── */
export const STEPS_APIA: StepDef[] = [
  {
    id: "empresa",
    title: "Sobre a sua empresa",
    subtitle: "Contexto inicial para entender o negócio.",
    questions: [
      {
        id: "segmento",
        label: "Em qual segmento sua empresa atua principalmente?",
        type: "choice",
        options: [
          "Construção pesada — rodovias, ferrovias, barragens",
          "Construção civil — edifícios, galpões industriais",
          "Saneamento & infraestrutura urbana",
          "Projetos industriais & mineração",
          "Outro",
        ],
        required: true,
      },
      {
        id: "receita",
        label: "Qual é a faixa de receita bruta anual?",
        type: "choice",
        options: ["Até R$50M", "R$50M – R$200M", "R$200M – R$500M", "R$500M – R$1,5B", "Acima de R$1,5B"],
        required: true,
      },
    ],
  },
  {
    id: "licitacoes",
    title: "Licitações & novos contratos",
    subtitle: "Licitações são onde a maioria das construtoras deixa dinheiro na mesa.",
    questions: [
      {
        id: "volume_lic",
        label: "Quantas licitações a empresa disputa por ano?",
        type: "choice",
        options: ["Menos de 10", "10 – 30", "30 – 60", "Mais de 60"],
        required: true,
      },
      {
        id: "taxa_sucesso",
        label: "Qual é a taxa de sucesso (ganhas ÷ disputadas)?",
        type: "choice",
        options: ["Menos de 10%", "10% – 25%", "25% – 40%", "Acima de 40%"],
        required: true,
      },
      {
        id: "tempo_proposta",
        label: "Quanto tempo leva preparar uma proposta de licitação?",
        type: "choice",
        options: ["Menos de 1 semana", "1 – 2 semanas", "2 – 4 semanas", "Mais de 4 semanas"],
        required: true,
      },
    ],
  },
  {
    id: "execucao",
    title: "Execução de obras & custos extras",
    subtitle: "Atrasos e custos extras são os maiores destruidores de lucro.",
    questions: [
      {
        id: "freq_atrasos",
        label: "Com que frequência seus projetos terminam com atrasos?",
        type: "scale",
        hint: "0 = raramente  ·  10 = quase sempre",
        required: true,
      },
      {
        id: "overrun",
        label: "Qual é o custo extra médio por projeto?",
        type: "choice",
        options: ["Praticamente nenhum", "Até 5%", "5% – 15%", "15% – 30%", "Acima de 30%"],
        required: true,
      },
      {
        id: "gargalo",
        label: "Qual é o maior gargalo na execução hoje?",
        type: "choice",
        options: [
          "Planejamento deficiente desde o início",
          "Falta de informação de campo em tempo real",
          "Mudanças de escopo não controladas",
          "Problemas com fornecedores e subcontratados",
          "Time insuficiente para o volume de projetos",
        ],
        required: true,
      },
    ],
  },
  {
    id: "documentacao",
    title: "Relatórios, documentos e obrigações",
    subtitle: "Documentação consome horas valiosas de engenheiros.",
    questions: [
      {
        id: "horas_doc",
        label: "Quantas horas por semana seu time gasta em relatórios e documentação (por projeto)?",
        type: "choice",
        options: ["Menos de 10h", "10h – 30h", "30h – 80h", "Mais de 80h"],
        required: true,
      },
      {
        id: "processo_doc",
        label: "Qual processo documental é mais trabalhoso hoje?",
        type: "choice",
        options: [
          "Relatórios de progresso de obra",
          "Laudos e pareceres técnicos",
          "Documentação de compliance e licenciamento",
          "Comunicação formal com órgãos públicos",
          "Planilhas de medição e memórias de cálculo",
        ],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "Prioridades de negócio",
    subtitle: "O que mais importa para vocês nos próximos 12 meses.",
    questions: [
      {
        id: "urgencia",
        label: "O que é mais urgente agora? (escolha até 2)",
        type: "multiselect",
        maxSelect: 2,
        options: [
          "Ganhar mais licitações e contratos",
          "Reduzir custos operacionais",
          "Aumentar a margem por projeto",
          "Escalar sem precisar contratar muito mais",
          "Melhorar compliance e reduzir risco",
          "Entrar em novos mercados ou segmentos",
        ],
        required: true,
      },
      {
        id: "prazo",
        label: "Em que prazo vocês gostariam de ver os primeiros resultados?",
        type: "choice",
        options: ["1 – 3 meses", "3 – 6 meses", "6 – 12 meses", "Sem urgência definida"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contato & próximo passo",
    subtitle: "Com base nas suas respostas, vamos preparar um diagnóstico personalizado e gratuito.",
    questions: [
      { id: "nome", label: "Seu nome completo", type: "text", required: true },
      { id: "empresa_nome", label: "Nome da empresa", type: "text", required: true },
      {
        id: "cargo",
        label: "Seu cargo",
        type: "choice",
        options: ["CEO / Presidente", "Diretor de Engenharia", "Diretor de Operações", "Gerente de Projetos", "Outro"],
        required: true,
      },
      { id: "email", label: "E-mail corporativo", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (opcional)", type: "text", required: false },
    ],
  },
];

/* ─── Matrisoja — Soja, trading & logística ─────────────── */
export const STEPS_MATRISOJA: StepDef[] = [
  {
    id: "operacao",
    title: "Sobre a operação",
    subtitle: "Contexto inicial para entender o negócio.",
    questions: [
      {
        id: "atividade",
        label: "Quais atividades fazem parte da operação? (selecione todas)",
        type: "multiselect",
        options: [
          "Cultivo próprio de soja",
          "Trading — compra e venda de grãos",
          "Armazenagem e beneficiamento",
          "Logística e transporte de grãos",
          "Exportação direta",
        ],
        required: true,
      },
      {
        id: "volume",
        label: "Qual é o volume médio de soja negociado por safra?",
        type: "choice",
        options: ["Até 10 mil toneladas", "10k – 50k toneladas", "50k – 200k toneladas", "Acima de 200k toneladas"],
        required: true,
      },
    ],
  },
  {
    id: "safra",
    title: "Planejamento de safra",
    subtitle: "Erros no planejamento de yield são a maior fonte de perda no agro.",
    questions: [
      {
        id: "precisao_yield",
        label: "Qual a precisão do planejamento de yield atual?",
        type: "scale",
        hint: "0 = muito impreciso, frequentemente errado por 20%+  ·  10 = preciso a menos de 5%",
        required: true,
      },
      {
        id: "tempo_planejamento",
        label: "Quanto tempo leva o ciclo completo de planejamento de safra?",
        type: "choice",
        options: ["Menos de 1 semana", "1 – 2 semanas", "2 – 4 semanas", "Mais de 1 mês"],
        required: true,
      },
      {
        id: "ferramenta_safra",
        label: "Como o planejamento de safra é feito hoje?",
        type: "choice",
        options: [
          "Planilhas Excel / Google Sheets",
          "Sistema ERP especializado em agro",
          "Combinação de sistemas e planilhas",
          "Processo manual sem sistema estruturado",
        ],
        required: true,
      },
    ],
  },
  {
    id: "trading",
    title: "Trading & precificação",
    subtitle: "A velocidade de decisão no trading define a margem.",
    questions: [
      {
        id: "freq_contrato",
        label: "Quantos contratos de compra/venda são fechados por mês?",
        type: "choice",
        options: ["Menos de 10", "10 – 30", "30 – 100", "Mais de 100"],
        required: true,
      },
      {
        id: "tempo_proposta",
        label: "Quanto tempo leva elaborar e enviar uma proposta comercial?",
        type: "choice",
        options: ["Menos de 1 hora", "1 – 4 horas", "Meio dia", "Mais de 1 dia"],
        required: true,
      },
      {
        id: "perda_proposta",
        label: "Com que frequência você perde contratos por demora na resposta?",
        type: "scale",
        hint: "0 = raramente  ·  10 = acontece o tempo todo",
        required: true,
      },
    ],
  },
  {
    id: "logistica",
    title: "Logística & compliance",
    subtitle: "Frete, conformidade Conab e multas são custos controláveis.",
    questions: [
      {
        id: "custo_frete",
        label: "O custo de frete MT → porto representa quanto da receita?",
        type: "choice",
        options: ["Menos de 20%", "20% – 30%", "30% – 40%", "Acima de 40%"],
        required: true,
      },
      {
        id: "conformidade_conab",
        label: "O time passa quanto tempo por mês em obrigações Conab e compliance?",
        type: "choice",
        options: ["Menos de 10h", "10h – 40h", "40h – 100h", "Mais de 100h"],
        required: true,
      },
      {
        id: "perda_armazenagem",
        label: "Qual é a perda estimada por safra em armazenagem e pós-colheita?",
        type: "choice",
        options: ["Menos de 2%", "2% – 5%", "5% – 10%", "Acima de 10%"],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "Prioridades",
    subtitle: "O que mais importa para a operação nos próximos 12 meses.",
    questions: [
      {
        id: "urgencia",
        label: "Qual é a maior oportunidade que você quer capturar? (até 2)",
        type: "multiselect",
        maxSelect: 2,
        options: [
          "Aumentar margem no trading",
          "Reduzir perdas de armazenagem e logística",
          "Acelerar ciclo de proposta e fechamento",
          "Melhorar previsão de yield e planejamento",
          "Automatizar compliance Conab e fiscal",
          "Escalar volume sem aumentar o time",
        ],
        required: true,
      },
      {
        id: "prazo",
        label: "Em que prazo você quer ver os primeiros resultados?",
        type: "choice",
        options: ["Antes da próxima safra", "Em 3 – 6 meses", "Em 6 – 12 meses", "Sem urgência definida"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contato & próximo passo",
    subtitle: "Vamos preparar um diagnóstico personalizado para a Matrisoja.",
    questions: [
      { id: "nome", label: "Seu nome completo", type: "text", required: true },
      { id: "empresa_nome", label: "Nome da empresa", type: "text", required: true },
      {
        id: "cargo",
        label: "Seu cargo",
        type: "choice",
        options: ["Sócio / Diretor", "Gerente de Operações", "Gerente Comercial", "Analista Agro", "Outro"],
        required: true,
      },
      { id: "email", label: "E-mail corporativo", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (opcional)", type: "text", required: false },
    ],
  },
];

/* ─── Píer Mauá — Terminal de cruzeiros & eventos ────────── */
export const STEPS_PIER_MAUA: StepDef[] = [
  {
    id: "operacao",
    title: "Sobre a operação",
    subtitle: "Contexto inicial para entender o negócio.",
    questions: [
      {
        id: "atividade",
        label: "Quais operações fazem parte do seu negócio? (selecione todas)",
        type: "multiselect",
        options: [
          "Terminal de cruzeiros — atracação e passageiros",
          "Locação de espaços para eventos corporativos",
          "Eventos culturais e públicos",
          "Uso comercial e varejo no espaço",
          "Arrendamento portuário B2B",
        ],
        required: true,
      },
      {
        id: "volume_navios",
        label: "Quantas atracações de navios de cruzeiro são esperadas por temporada?",
        type: "choice",
        options: ["Menos de 50", "50 – 100", "100 – 200", "Mais de 200"],
        required: true,
      },
    ],
  },
  {
    id: "atracacao",
    title: "Operações de atracação",
    subtitle: "Planejamento e coordenação de berços são a base da receita de cruzeiros.",
    questions: [
      {
        id: "tempo_planejamento",
        label: "Quanto tempo leva o planejamento de uma atracação (coordenação com armadora + CDRJ)?",
        type: "choice",
        options: ["Menos de 10h", "10h – 30h", "30h – 60h", "Mais de 60h"],
        required: true,
      },
      {
        id: "ocupacao_bercos",
        label: "Qual é a taxa de ocupação média dos berços na temporada?",
        type: "scale",
        hint: "0 = berços frequentemente ociosos  ·  10 = 100% de ocupação na temporada",
        required: true,
      },
      {
        id: "perda_atracacao",
        label: "Com que frequência ocorrem falhas de planejamento que resultam em atracação perdida ou reagendada?",
        type: "scale",
        hint: "0 = nunca  ·  10 = frequentemente",
        required: true,
      },
    ],
  },
  {
    id: "eventos",
    title: "Locação de espaços & eventos",
    subtitle: "A receita de eventos off-season é o principal vetor de crescimento.",
    questions: [
      {
        id: "volume_propostas",
        label: "Quantas propostas de locação de espaço são recebidas por mês?",
        type: "choice",
        options: ["Menos de 10", "10 – 30", "30 – 60", "Mais de 60"],
        required: true,
      },
      {
        id: "tempo_proposta",
        label: "Quanto tempo leva responder com uma proposta comercial?",
        type: "choice",
        options: ["Menos de 4 horas", "4h – 24h", "1 – 3 dias", "Mais de 3 dias"],
        required: true,
      },
      {
        id: "taxa_conversao",
        label: "Qual é a taxa de conversão de propostas em contratos fechados?",
        type: "choice",
        options: ["Menos de 20%", "20% – 40%", "40% – 60%", "Acima de 60%"],
        required: true,
      },
    ],
  },
  {
    id: "compliance",
    title: "Compliance portuário",
    subtitle: "PF, Alfândega, Anvisa e ANTAQ consomem horas e geram risco de multa.",
    questions: [
      {
        id: "horas_compliance",
        label: "Quantas horas por navio o time gasta em documentação de compliance?",
        type: "choice",
        options: ["Menos de 10h", "10h – 25h", "25h – 50h", "Mais de 50h"],
        required: true,
      },
      {
        id: "risco_multa",
        label: "Já houve multas ou notificações de órgãos reguladores nos últimos 2 anos?",
        type: "choice",
        options: ["Não", "Sim — até 2 ocorrências", "Sim — 3 ou mais ocorrências", "Prefiro não responder"],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "Prioridades",
    subtitle: "O que mais importa nos próximos 12 meses.",
    questions: [
      {
        id: "urgencia",
        label: "Qual é a maior oportunidade que você quer capturar? (até 2)",
        type: "multiselect",
        maxSelect: 2,
        options: [
          "Aumentar receita de cruzeiros — mais atracações por temporada",
          "Aumentar receita de eventos e locações off-season",
          "Reduzir custo e risco de compliance portuário",
          "Melhorar ocupação nos períodos fora de temporada",
          "Acelerar ciclo de proposta para eventos",
          "Automatizar relatórios para ANTAQ e órgãos",
        ],
        required: true,
      },
      {
        id: "prazo",
        label: "Em que prazo você quer ver os primeiros resultados?",
        type: "choice",
        options: ["Antes da próxima temporada", "Em 3 – 6 meses", "Em 6 – 12 meses", "Sem urgência definida"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contato & próximo passo",
    subtitle: "Vamos preparar um diagnóstico personalizado para o Píer Mauá.",
    questions: [
      { id: "nome", label: "Seu nome completo", type: "text", required: true },
      { id: "empresa_nome", label: "Nome da empresa", type: "text", required: true },
      {
        id: "cargo",
        label: "Seu cargo",
        type: "choice",
        options: ["CEO / Presidente", "Diretor de Operações", "Gerente Portuário", "Gerente Comercial", "Outro"],
        required: true,
      },
      { id: "email", label: "E-mail corporativo", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (opcional)", type: "text", required: false },
    ],
  },
];

/* ─── Trem do Corcovado — Bilheteria, ferrovia & ICMBio ─── */
export const STEPS_TREM_CORCOVADO: StepDef[] = [
  {
    id: "operacao",
    title: "Sobre a operação",
    subtitle: "Contexto inicial para entender o negócio.",
    questions: [
      {
        id: "atividade",
        label: "Quais operações fazem parte do seu negócio? (selecione todas)",
        type: "multiselect",
        options: [
          "Bilheteria e reservas de visitantes",
          "Operação ferroviária — manutenção e agendamento",
          "Loja e gastronomia no percurso",
          "Eventos especiais no Cristo",
          "Compliance ICMBio e Parque Nacional",
        ],
        required: true,
      },
      {
        id: "volume_visitantes",
        label: "Quantos visitantes são transportados por ano?",
        type: "choice",
        options: ["Menos de 200k", "200k – 400k", "400k – 600k", "Mais de 600k"],
        required: true,
      },
    ],
  },
  {
    id: "bilheteria",
    title: "Bilheteria & demanda",
    subtitle: "A precificação dinâmica é o principal alavancador de receita em atrações turísticas.",
    questions: [
      {
        id: "modelo_preco",
        label: "Como os preços de ingresso são definidos hoje?",
        type: "choice",
        options: [
          "Preço fixo — não varia com a demanda",
          "Sazonalidade simples — alta e baixa temporada",
          "Precificação dinâmica parcial",
          "Precificação dinâmica por horário e canal",
        ],
        required: true,
      },
      {
        id: "ocupacao_media",
        label: "Qual é a ocupação média dos trens em horários de baixa demanda?",
        type: "scale",
        hint: "0 = trens quase vazios  ·  10 = sempre lotados mesmo fora do pico",
        required: true,
      },
      {
        id: "canais_venda",
        label: "Quais canais de venda são utilizados hoje? (selecione todos)",
        type: "multiselect",
        options: [
          "Site próprio",
          "OTAs — Booking, GetYourGuide, Viator",
          "Bilheteria física no local",
          "Parceiros B2B — agências e hotéis",
          "Aplicativo próprio",
        ],
        required: true,
      },
    ],
  },
  {
    id: "operacao_ferroviaria",
    title: "Operação ferroviária",
    subtitle: "Manutenção preditiva e agendamento de composições são críticos para confiabilidade.",
    questions: [
      {
        id: "freq_manutencao",
        label: "Com que frequência ocorrem paradas não planejadas por falha técnica?",
        type: "scale",
        hint: "0 = raramente  ·  10 = toda semana",
        required: true,
      },
      {
        id: "tempo_manutencao",
        label: "Quanto tempo leva identificar e resolver uma falha técnica crítica?",
        type: "choice",
        options: ["Menos de 2 horas", "2h – 8h", "1 – 3 dias", "Mais de 3 dias"],
        required: true,
      },
      {
        id: "sistema_manutencao",
        label: "Como a manutenção das composições é gerenciada hoje?",
        type: "choice",
        options: [
          "Planilhas e registros manuais",
          "Sistema CMMS ou ERP de manutenção",
          "Combinação de sistemas",
          "Não temos sistema — processo informal",
        ],
        required: true,
      },
    ],
  },
  {
    id: "compliance",
    title: "Compliance ICMBio & regulatório",
    subtitle: "Parque Nacional exige relatórios frequentes e limites de capacidade.",
    questions: [
      {
        id: "horas_relatorio",
        label: "Quantas horas por mês o time gasta em relatórios para ICMBio e órgãos reguladores?",
        type: "choice",
        options: ["Menos de 10h", "10h – 30h", "30h – 80h", "Mais de 80h"],
        required: true,
      },
      {
        id: "limite_capacidade",
        label: "O limite de visitantes imposto pelo ICMBio é monitorado em tempo real?",
        type: "choice",
        options: [
          "Sim — temos sistema automático",
          "Sim — mas é monitorado manualmente",
          "Não — controlamos após o fato",
          "Não monitoramos formalmente",
        ],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "Prioridades",
    subtitle: "O que mais importa nos próximos 12 meses.",
    questions: [
      {
        id: "urgencia",
        label: "Qual é a maior oportunidade que você quer capturar? (até 2)",
        type: "multiselect",
        maxSelect: 2,
        options: [
          "Aumentar receita com precificação dinâmica",
          "Reduzir paradas não planejadas com manutenção preditiva",
          "Aumentar ocupação nos horários de baixa demanda",
          "Automatizar relatórios ICMBio e compliance",
          "Melhorar distribuição e vendas em OTAs",
          "Expandir receita com eventos especiais",
        ],
        required: true,
      },
      {
        id: "prazo",
        label: "Em que prazo você quer ver os primeiros resultados?",
        type: "choice",
        options: ["Antes da próxima alta temporada", "Em 3 – 6 meses", "Em 6 – 12 meses", "Sem urgência definida"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contato & próximo passo",
    subtitle: "Vamos preparar um diagnóstico personalizado para o Trem do Corcovado.",
    questions: [
      { id: "nome", label: "Seu nome completo", type: "text", required: true },
      { id: "empresa_nome", label: "Nome da empresa", type: "text", required: true },
      {
        id: "cargo",
        label: "Seu cargo",
        type: "choice",
        options: ["CEO / Diretor", "Gerente de Operações", "Gerente Comercial", "Gerente de TI", "Outro"],
        required: true,
      },
      { id: "email", label: "E-mail corporativo", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (opcional)", type: "text", required: false },
    ],
  },
];

/* ─── Bondinho — Teleférico, eventos & gastronomia ─────────  */
export const STEPS_BONDINHO: StepDef[] = [
  {
    id: "operacao",
    title: "Sobre a operação",
    subtitle: "Contexto inicial para entender o negócio.",
    questions: [
      {
        id: "atividade",
        label: "Quais operações fazem parte do seu negócio? (selecione todas)",
        type: "multiselect",
        options: [
          "Bilheteria e operação do teleférico",
          "Gastronomia — restaurantes e lanchonetes",
          "Eventos corporativos e sociais",
          "Loja e varejo no complexo",
          "Parcerias B2B com agências e hotéis",
        ],
        required: true,
      },
      {
        id: "volume_visitantes",
        label: "Quantos visitantes são recebidos por ano?",
        type: "choice",
        options: ["Menos de 500k", "500k – 1M", "1M – 2M", "Mais de 2M"],
        required: true,
      },
    ],
  },
  {
    id: "bilheteria",
    title: "Bilheteria & precificação",
    subtitle: "O ticket médio de atrações turísticas pode crescer 15–20% com precificação dinâmica.",
    questions: [
      {
        id: "modelo_preco",
        label: "Como os preços de ingresso são definidos hoje?",
        type: "choice",
        options: [
          "Preço fixo — não varia com a demanda",
          "Sazonalidade simples — alta e baixa temporada",
          "Variação por canal de venda",
          "Precificação dinâmica por horário, canal e antecedência",
        ],
        required: true,
      },
      {
        id: "ticket_medio",
        label: "Qual é o ticket médio por visitante hoje (ingresso + consumo)?",
        type: "choice",
        options: ["Até R$80", "R$80 – R$130", "R$130 – R$180", "Acima de R$180"],
        required: true,
      },
      {
        id: "ocupacao_vale",
        label: "Qual é a ocupação nas cabines em horários fora do pico?",
        type: "scale",
        hint: "0 = cabines quase vazias  ·  10 = sempre cheias mesmo fora do pico",
        required: true,
      },
    ],
  },
  {
    id: "eventos",
    title: "Eventos & gastronomia",
    subtitle: "Eventos e gastronomia são os maiores vetores de receita incremental.",
    questions: [
      {
        id: "volume_eventos",
        label: "Quantos eventos são realizados por mês no complexo?",
        type: "choice",
        options: ["Menos de 5", "5 – 15", "15 – 30", "Mais de 30"],
        required: true,
      },
      {
        id: "tempo_proposta_evento",
        label: "Quanto tempo leva elaborar e enviar uma proposta de evento?",
        type: "choice",
        options: ["Menos de 4 horas", "4h – 24h", "1 – 3 dias", "Mais de 3 dias"],
        required: true,
      },
      {
        id: "receita_gastronomia",
        label: "A gastronomia representa quanto da receita total?",
        type: "choice",
        options: ["Menos de 10%", "10% – 20%", "20% – 35%", "Acima de 35%"],
        required: true,
      },
    ],
  },
  {
    id: "manutencao",
    title: "Operação & manutenção",
    subtitle: "Paradas não planejadas do teleférico são o maior risco operacional.",
    questions: [
      {
        id: "freq_paradas",
        label: "Com que frequência ocorrem paradas não planejadas do teleférico?",
        type: "scale",
        hint: "0 = raramente  ·  10 = toda semana",
        required: true,
      },
      {
        id: "custo_parada",
        label: "Qual é o impacto estimado de uma parada de 1 dia na receita?",
        type: "choice",
        options: ["Menos de R$50k", "R$50k – R$200k", "R$200k – R$500k", "Acima de R$500k"],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "Prioridades",
    subtitle: "O que mais importa nos próximos 12 meses.",
    questions: [
      {
        id: "urgencia",
        label: "Qual é a maior oportunidade que você quer capturar? (até 2)",
        type: "multiselect",
        maxSelect: 2,
        options: [
          "Aumentar ticket médio com precificação dinâmica",
          "Aumentar receita de eventos",
          "Aumentar receita de gastronomia",
          "Reduzir paradas com manutenção preditiva",
          "Melhorar distribuição e vendas em OTAs",
          "Aumentar ocupação nos horários de baixa demanda",
        ],
        required: true,
      },
      {
        id: "prazo",
        label: "Em que prazo você quer ver os primeiros resultados?",
        type: "choice",
        options: ["Antes da próxima alta temporada", "Em 3 – 6 meses", "Em 6 – 12 meses", "Sem urgência definida"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contato & próximo passo",
    subtitle: "Vamos preparar um diagnóstico personalizado para o Bondinho.",
    questions: [
      { id: "nome", label: "Seu nome completo", type: "text", required: true },
      { id: "empresa_nome", label: "Nome da empresa", type: "text", required: true },
      {
        id: "cargo",
        label: "Seu cargo",
        type: "choice",
        options: ["CEO / Diretor", "Gerente de Operações", "Gerente Comercial", "Gerente de TI", "Outro"],
        required: true,
      },
      { id: "email", label: "E-mail corporativo", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (opcional)", type: "text", required: false },
    ],
  },
];

/* ─── Grupo Cataratas — Ecoturismo & ICMBio ─────────────── */
export const STEPS_CATARATAS: StepDef[] = [
  {
    id: "operacao",
    title: "Sobre a operação",
    subtitle: "Contexto inicial para entender o grupo.",
    questions: [
      {
        id: "unidades",
        label: "Quais unidades fazem parte da operação? (selecione todas)",
        type: "multiselect",
        options: [
          "Cataratas do Iguaçu",
          "AquaRio",
          "BioParque do Rio",
          "Fernando de Noronha",
          "Outra unidade de ecoturismo",
        ],
        required: true,
      },
      {
        id: "volume_total",
        label: "Qual é o volume total de visitantes por ano (grupo)?",
        type: "choice",
        options: ["Menos de 1M", "1M – 3M", "3M – 6M", "Mais de 6M"],
        required: true,
      },
    ],
  },
  {
    id: "bilheteria",
    title: "Bilheteria & precificação",
    subtitle: "Com múltiplas unidades, a precificação dinâmica pode capturar receita significativa.",
    questions: [
      {
        id: "modelo_preco",
        label: "Como os preços de ingresso são definidos hoje nas unidades?",
        type: "choice",
        options: [
          "Preço fixo em todas as unidades",
          "Sazonalidade simples por unidade",
          "Variação por canal de venda",
          "Precificação dinâmica parcial",
        ],
        required: true,
      },
      {
        id: "coordenacao_preco",
        label: "Os preços entre as unidades são coordenados de forma centralizada?",
        type: "choice",
        options: [
          "Sim — sistema central",
          "Sim — mas manualmente",
          "Não — cada unidade decide independentemente",
          "Não temos processo formal",
        ],
        required: true,
      },
      {
        id: "ocupacao_baixa",
        label: "Qual é a ocupação média nas unidades em baixa temporada?",
        type: "scale",
        hint: "0 = muito baixa, abaixo de 30%  ·  10 = sempre acima de 80%",
        required: true,
      },
    ],
  },
  {
    id: "compliance_icmbio",
    title: "Compliance ICMBio & regulatório",
    subtitle: "Operações em Unidades de Conservação exigem monitoramento constante.",
    questions: [
      {
        id: "horas_relatorio",
        label: "Quantas horas por mês o time gasta em relatórios para ICMBio e órgãos?",
        type: "choice",
        options: ["Menos de 20h", "20h – 60h", "60h – 150h", "Mais de 150h"],
        required: true,
      },
      {
        id: "monitoramento_fluxo",
        label: "O fluxo de visitantes por unidade é monitorado em tempo real?",
        type: "choice",
        options: [
          "Sim — dashboard em tempo real",
          "Sim — mas com atraso de horas",
          "Não — relatório diário manual",
          "Não temos monitoramento estruturado",
        ],
        required: true,
      },
      {
        id: "risco_multa",
        label: "Já houve autuações ou notificações de órgãos ambientais nos últimos 2 anos?",
        type: "choice",
        options: ["Não", "Sim — até 2 ocorrências", "Sim — 3 ou mais ocorrências", "Prefiro não responder"],
        required: true,
      },
    ],
  },
  {
    id: "operacao_multi",
    title: "Gestão multi-unidade",
    subtitle: "Coordenar 7 unidades é um desafio de dados e processos.",
    questions: [
      {
        id: "consolidacao_dados",
        label: "Como os dados financeiros e operacionais são consolidados hoje?",
        type: "choice",
        options: [
          "ERP centralizado — dados em tempo real",
          "ERP por unidade + consolidação manual mensal",
          "Planilhas + consolidação manual",
          "Sem processo formal de consolidação",
        ],
        required: true,
      },
      {
        id: "tempo_relatorio_grupo",
        label: "Quanto tempo leva preparar o relatório financeiro consolidado do grupo?",
        type: "choice",
        options: ["1 – 2 dias", "3 – 5 dias", "1 – 2 semanas", "Mais de 2 semanas"],
        required: true,
      },
    ],
  },
  {
    id: "prioridades",
    title: "Prioridades",
    subtitle: "O que mais importa para o grupo nos próximos 12 meses.",
    questions: [
      {
        id: "urgencia",
        label: "Qual é a maior oportunidade que você quer capturar? (até 2)",
        type: "multiselect",
        maxSelect: 2,
        options: [
          "Aumentar receita com precificação dinâmica centralizada",
          "Reduzir carga de compliance ICMBio e ambiental",
          "Melhorar visibilidade financeira consolidada do grupo",
          "Aumentar ocupação nas unidades em baixa temporada",
          "Automatizar relatórios regulatórios",
          "Melhorar distribuição e vendas em OTAs",
        ],
        required: true,
      },
      {
        id: "prazo",
        label: "Em que prazo você quer ver os primeiros resultados?",
        type: "choice",
        options: ["Antes da próxima alta temporada", "Em 3 – 6 meses", "Em 6 – 12 meses", "Sem urgência definida"],
        required: true,
      },
    ],
  },
  {
    id: "contato",
    title: "Contato & próximo passo",
    subtitle: "Vamos preparar um diagnóstico personalizado para o Grupo Cataratas.",
    questions: [
      { id: "nome", label: "Seu nome completo", type: "text", required: true },
      { id: "empresa_nome", label: "Nome da empresa / unidade", type: "text", required: true },
      {
        id: "cargo",
        label: "Seu cargo",
        type: "choice",
        options: ["CEO / Presidente", "Diretor de Operações", "Diretor Financeiro", "Gerente de Unidade", "Outro"],
        required: true,
      },
      { id: "email", label: "E-mail corporativo", type: "email", required: true },
      { id: "whatsapp", label: "WhatsApp (opcional)", type: "text", required: false },
    ],
  },
];
