# River Labs — Market Research Prompt Template

Use this prompt with Perplexity (or any research AI) to generate a structured market research for a prospect company. Replace all `[BRACKETS]` with the company's real information before running.

---

## PROMPT TO PASTE INTO PERPLEXITY

---

Você é um analista de negócios e estratégia sênior. Preciso que você faça uma pesquisa de mercado estruturada sobre a empresa **[NOME DA EMPRESA]** para que eu possa preparar uma proposta comercial personalizada. Siga exatamente a estrutura abaixo e cite as fontes de cada dado.

---

### BLOCO 01 — VISÃO GERAL DA EMPRESA

Pesquise e retorne:
- Nome completo da empresa e ano de fundação
- Sede (cidade, estado)
- Setor de atuação principal e subsetores
- Receita bruta estimada (último ano disponível)
- Posição em rankings nacionais do setor (ex: CBIC, Exame Melhores & Maiores, Forbes, etc.)
- Número aproximado de funcionários
- Principais clientes ou projetos de referência
- Estrutura societária (familiar, capital aberto, grupo internacional, etc.)

---

### BLOCO 02 — CONTEXTO DE MERCADO E MARGENS

Pesquise e retorne:
- Qual é a margem líquida média do setor onde a empresa opera? (%)
- Quais são os principais custos do setor? (% sobre receita, se possível)
- Quais são os maiores desperdícios ou ineficiências documentados no setor? (com fontes: IBGE, TCU, associações setoriais, relatórios de consultorias)
- Quais são as 3 principais métricas de benchmark do setor que mais impactam a lucratividade?
- Existe alguma regulação, lei ou norma que gera custo operacional relevante? Qual?

Formato esperado: para cada item, traga o dado + fonte.

---

### BLOCO 03 — ONDE O TEMPO VIRA DINHEIRO (processos caros)

Pesquise e retorne os **3 processos internos mais custosos** típicos de empresas deste setor:

Para cada processo, estruture assim:
- **Nome do processo**
- Horas típicas gastas por ocorrência (estimativa de mercado)
- Custo por hora do profissional envolvido (com fonte salarial — ex: IBGE, CATHO, Glassdoor)
- Custo total estimado por ocorrência (horas × R$/h)
- Frequência (mensal, por contrato, por projeto)
- Custo anual estimado (se possível)
- Consequência se o processo falha (multa, perda de contrato, retrabalho, etc.)

---

### BLOCO 04 — OPORTUNIDADES DE IA E AUTOMAÇÃO

Com base nos processos do Bloco 03, sugira **aplicações concretas de IA e automação** para cada processo:

Para cada aplicação, estruture assim:
- **O que faz**: descrição em 1 linha do que a IA/automação resolve
- **Como funciona**: input → transformação → output (ex: "PDF do contrato → extração com IA → planilha preenchida")
- **Ferramentas sugeridas**: liste ferramentas reais (Claude, GPT-4, Make.com, Zapier, Notion, Google Sheets, etc.)
- **Impacto projetado**: redução de horas, custo evitado, ou receita adicional (estimativa conservadora)

Agrupe por processo (mínimo 2–3 aplicações por processo).

---

### BLOCO 05 — IMPACTO FINANCEIRO ESTIMADO

Com base nos dados levantados, calcule:

**Base de cálculo:**
- Volume anual de operações principais (ex: nº de contratos, propostas, projetos)
- Taxa de conversão/vitória atual (se disponível)
- Valor médio de contrato ou projeto
- Receita total estimada com esses dados

**4 alavancas financeiras:**
Para cada alavanca, apresente:
- Descrição da alavanca (ex: "aumentar volume de propostas de X para Y")
- Fórmula de cálculo (transparente, linha por linha)
- Resultado estimado em R$ (conservador)

**Totais:**
- Impacto anual total mensurável (soma das 4 alavancas)
- Ponto de retorno estimado (quanto tempo para recuperar o investimento)

---

### BLOCO 06 — GANCHO COMERCIAL ESPECÍFICO

Com base em tudo acima, sugira:
- Qual seria o **melhor teste de baixo risco** que a River Labs poderia propor a essa empresa para provar valor em 1 semana? (algo que usa 1 processo real da empresa e entrega um resultado tangível)
- Qual é o **argumento de urgência** mais forte para essa empresa agir agora e não em 6 meses?
- Quais são os **2–3 objeções mais prováveis** que essa empresa levantaria, e como responder cada uma?

---

### INSTRUÇÕES ADICIONAIS

- Cite **todas as fontes** (IBGE, TCU, CBIC, ABNT, relatórios de consultorias, portais de notícias setoriais, associações do setor)
- Quando não houver dado exato disponível, indique claramente "estimativa" e explique a base do cálculo
- Use **R$ (reais)** para todos os valores financeiros
- Seja direto, use dados e números — evite frases genéricas sem embasamento
- Se a empresa for de capital aberto, priorize dados do último relatório anual

---

**EMPRESA-ALVO:** [NOME DA EMPRESA]
**SETOR:** [SETOR PRINCIPAL]
**CONTEXTO ADICIONAL (opcional):** [ex: "empresa familiar, forte presença no Sul do Brasil, foco em varejo físico"]
