# Relatório de Itens Pendentes — Reposicionamento River Labs

**Data:** 16 de agosto de 2026  
**Última atualização:** 16 de agosto de 2026, 15:30  
**Status:** P0 Completo | P1 Em Andamento | P2 Agendado  
**Quando completar:** Encaminhar cada um dos sócios para coleta de informações

---

## P0 — Esta Semana (URGENTE — antes do Píer Mauá abrir o site)

### 1. **Bios dos Sócios (credencial de uma frase cada)**  
**Onde será usado:** Seção da equipe + página Quem Somos  
**Formato:** Um parágrafo com UM FATO VERIFICÁVEL por sócio (não adjetivos; experiência concreta)  
**Exemplo (Antonio):** *"Liderou por quatro anos sistemas de inspeção de infraestrutura pública para mais de 15 estados americanos, cobrindo ativos acima de US$ 500 milhões. Antes, fundou e vendeu uma empresa de software. Engenheiro mecânico (CEFET/RJ), com formação em Machine Learning (Stanford) e certificação AWS Solutions Architect Professional."*  
**Precisa de:**
- [ ] Leonardo Werner — credencial de uma frase
- [ ] Antonio Rapozo — credencial de uma frase (versão refinada da que existe)
- [ ] Enrique Ibarra — credencial de uma frase
- [ ] João Guilherme Santos — **DECISÃO:** remover do site ou reposicionar? (Vendo como "Sócio-fundador · Produto e Engenharia" ainda faz sentido? Aguardando clarificação)

### 2. **Números da Parede — Honestidade Total**
**Onde será usado:** §4.7 (home, rodapé da seção de números)  
**Regra:** cada número precisa de uma frase explicativa tipo Capriole ("As at 2 January 2026 … audited annually")  
**Precisa de:**
- [ ] **Anos de experiência combinada** dos sócios (soma exata)
- [ ] **Países** onde sócios já entregaram (quais exatamente?)
- [ ] **Setores atendidos** (contar os reais — qual a lista?)
- [ ] **US$ 500M+** — verificar: é só Antonio ou há mais?
- [ ] **Número de entrevistas/fontes primárias** no trabalho do Píer (12 e 4 fontes, ou números diferentes?)
- [ ] **1 exit** — nome da empresa vendida, quando, contexto (para rodapé)

### 3. **Caso do Píer Mauá — Autorização e Detalhes**
**Onde será usado:** Página de casos públicos  
**Status:** Versão anonimizada já escrita; aguardando permissão para:  
- [ ] **Nomear o cliente** — Píer Mauá está pronto para ser nomeado publicamente?
- [ ] **Depoimento curto** — Há interesse em colher uma frase da Diretoria? (Ex: "…descrição do impacto…")
- [ ] **Logo do Píer** — Usar logo oficial nos casos? (alta prioridade se sim)

### 4. **Domínio Canônico — Decisão**
**Onde impacta:** og:url, canonical, domain registrations, email  
**Opções:**
- [ ] `riverlabs.ai` — qual é o status? Qual será o canônico?
- [ ] `riverlabs-ai.com` — qual é o status? Qual será o canônico?
- [ ] `river-labs.vercel.app` — temporário ou permanente?

**Impacto no código:** uma única fonte da verdade em `lib/config.ts` para todos os meta tags

### 5. **Autorização — João Guilherme Santos**
**Decisão necessária:**
- [ ] **Manter no site com novo título?** (Ex: "Sócio-fundador · [qual função?]") → qual é a função dele agora?
- [ ] **Remover completamente?** (foto, card, menções em todas as páginas)
- [ ] **Mover para "Rede de especialistas"?** (discretamente, sem foto grande)

---

## P1 — Primeiros 30 Dias

### 6. **Tecnologias Reais — Listagem Honesta (§4.6)**
**Onde será usado:** Seção "Construímos sobre" na home  
**Formato:** Logos em cinza + lista textual; "parceiro" só se houver programa oficial  
**Precisa de:**
- [ ] Lista exata de tecnologias que realmente usam: Anthropic, OpenAI, AWS, Google Cloud, NVIDIA, Vercel… (quais mais?)
- [ ] Há programa OFICIAL de parceria com alguma? (Anthropic Partner Program, AWS Partner Network, etc.)
- [ ] Se há programa: qual é o nome da partnership e quando começou?

### 7. **Parede de Números — Rodapés Explicativos (§4.7)**
**Precisa de (para cada número):**
- [ ] Frase explicativa tipo Capriole (~20 palavras): como o número é auditado, quando foi medido, por quem
- [ ] Confirmar: "X entrevistas, Y fontes primárias no trabalho do Píer" — qual é o Y exato? (documento diz 4, correto?)
- [ ] Confirmar: data do trabalho do Píer (documento diz "2026", certo?)

### 8. **Rede de Especialistas — Nomes Reais?**
**Onde será usado:** Seção da equipe + página Quem Somos  
**Versão honesta (sem inflacionar):**  
> "Por projeto, acionamos profissionais parceiros em análise de mercado, engenharia de dados, design e conhecimento setorial."

**Pergunta:** Há nomes/funções REAIS para colocar aqui? (Se não, deixa genérico; não inventar)

### 9. **Depoimentos de Clientes — Autorização**
**Onde será usado:** Home, página de casos  
**Precisa de:**
- [ ] Há clientes (além do Píer) dispostos a dar um depoimento curto com nome + cargo?
- [ ] Autorização para usar nomes reais? (Washdog, VTEX, Lumina, Law firm estão OK para ficarem públicos?)

### 10. **Artigos do Blog — Credenciais dos Autores**
**Onde será usado:** Fim de cada artigo (link para bio do autor)  
**Precisa de:**
- [ ] Qual sócio assina qual artigo? (sugestão: rodízio; mas autoridade de quem fala é importante)
- [ ] Há especialistas convidados para alguns artigos? (ou só sócios escrevem?)

---

## P2 — 90 Dias (Médio Prazo)

### 11. **Relatório Público Anual (Distrito-style)**
**Onde será usado:** Página /conteudo/reports  
**Pergunta:** Há interesse em publicar um relatório sobre tendências de turismo/portos/setores-alvo baseado em dados públicos + proprietary insights?
- [ ] Prioridade alta ou deixar para depois?

### 12. **Versão EN dos Artigos Iniciais**
**Onde será usado:** /en/conteudo/artigos/[slug]  
**Precisa de:**
- [ ] Há prioridade em EN? Ou PT é o foco por enquanto?
- [ ] Quando fazer: antes ou depois de consolidar PT?

### 13. **Versão ES** (Terceira Língua)
**Pergunta:** Manter trilíngue (PT/EN/ES) ou focar em PT+EN?
- [ ] Prioridade: ES? Quando?

---

## Itens Já Implementáveis (Sem Bloqueios)

Estes itens foram implementados ou estão prontos para ir ao ar assim que informações acima forem colhidas:

- ✅ Hero reescrito (copy pronto em §4.1)
- ✅ Seção "Como atuamos" em três atos (copy pronto em §4.2)
- ✅ Seção "Por que uma boutique" (copy pronto em §2.3 + §4.4)
- ✅ Caso anônimo do terminal de cruzeiros (copy pronto em §4.5)
- ✅ 12 artigos do blog escritos (títulos prontos em §5.3)
- ✅ Radar #1 estruturado (esboço em §6.3)
- ✅ Arquitetura de informação proposta (§3)
- ✅ Nova navegação (§3)
- ✅ Meta tags por rota (infrastructure)
- ✅ Blog infrastructure (Markdown → pages)
- ✅ Newsletter infrastructure (Substack mirror + arquivo)

---

## Checklist de Coleta — Encaminhar aos Sócios

**Email para enviar:**

```
Assunto: Informações para o site — 5 min cada sócio

Precisamos de informações pontuais para completar o reposicionamento do site:

1. **Leonardo Werner**
   - Uma frase de credencial concreta (experiência, projeto relevante, número)
   - Exemplo: "Consultor sênior em governança corporativa na Principia Advisory, com projetos em ética e compliance em 5 países"

2. **Antonio Rapozo**
   - Confirmar/refinar a credencial (usaremos a versão melhorada do bio atual)
   - Confirmar: nomes das empresas onde trabalhou, tecnologias que realmente usa

3. **Enrique Ibarra**
   - Uma frase de credencial concreta

4. **João Guilherme Santos**
   - DECISÃO: mantém no site, remove, ou move para "especialistas"? Se mantém, qual é a função agora?

5. **Parede de Números**
   - Anos combinados: ___
   - Países: ___
   - Setores: ___
   - Detalhes do Píer: entrevistas (___), fontes primárias (___), data (2026?)
   - Exit: nome da empresa, quando, contexto

6. **Caso Píer Mauá**
   - Posso nomear publicamente? Há interesse em citar e colocar logo?
   - Há depoimento disponível?

7. **Domínio**
   - Qual é o canônico? riverlabs.ai ou riverlabs-ai.com?

Responda por este email ou aloque 5 min para uma call rápida.
```

---

**Última atualização:** 16 ago 2026, 00:00  
**Responsável por coleta:** Sócios  
**Estimativa de impacto:** Todas estas informações são bloqueadores para P1/P2; P0 sai mesmo assim com placeholders.
