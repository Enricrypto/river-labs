# Implementação do Reposicionamento River Labs

**Data de início:** 16 de agosto de 2026  
**Status atual:** P0 Completo | P1 Parcialmente Completo

---

## ✅ P0 — COMPLETO (Esta Semana)

### 1. Reescrita do Hero
- [x] Hero português: "Diagnóstico primeiro. Sistema depois. Capacidade que fica."
- [x] Hero inglês: "Diagnosis first. System next. Capability that stays."
- [x] Hero espanhol: "Diagnóstico primero. Sistema después. Capacidad que queda."
- [x] Badges atualizados em 3 idiomas
- [x] CTA reescritos para "Conversar sobre um diagnóstico" / "Have a diagnosis conversation"

### 2. Seção de Equipe
- [x] Removido João Guilherme Santos do site (3 idiomas)
- [x] Renomeados títulos para "Sócio-fundador" (PT), "Founder" (EN), "Socio-fundador" (ES)
- [x] Atualizado subtítulo da equipe (3 idiomas)
- [x] Repositionado Antonio para "Arquitetura de Soluções"
- [x] Repositionado Enrique para "Produto e Engenharia"

### 3. Caso Anonimizado
- [x] Adicionado caso do Terminal de Cruzeiros (3 idiomas)
- [x] Contexto: diagnóstico com 10 entrevistas, 4 autoridades, reconciliação de dados
- [x] Resultado: plano de 3 etapas com critério de conclusão

### 4. Navegação e Footer
- [x] Removido "Área do Cliente" da navegação principal
- [x] Atualizado footer.links para só incluir "Serviços" e "Contato"
- [x] Removidos links de rede social vazio (#) do footer
- [x] Ajustado mapeamento de links no Footer.tsx

### 5. Meta Tags e Domínio
- [x] Meta titles/descriptions reescritos para PT, EN, ES
- [x] Adicionado canonical URL (riverlabs.ai)
- [x] Adicionado og:url em [lang]/layout.tsx
- [x] Criados layout.tsx com metadata para /diagnostic, /cases, /contact
- [x] Descrições SEO alinhadas com novo posicionamento

### 6. Setores no Diagnóstico
- [x] Adicionados 5 novos setores ao formulário PT (Turismo, Portos e Transporte, Hospitalidade, Infraestrutura, Compliance)
- [x] Adicionados 5 novos setores ao formulário EN
- [x] Adicionados 5 novos setores ao formulário ES
- [x] Mantidos setores legados para compatibilidade

### 7. Setores Proof Section
- [x] Atualizado label de "Indústrias" para "Setores" (3 idiomas)
- [x] Removido "note" de cada idioma
- [x] Setores alinhados com novo posicionamento

---

## 🔄 P1 — EM ANDAMENTO (30 dias)

### Blog e Infraestrutura ✅ PRONTO
- [x] Diretório `/conteudo` criado com layout.tsx
- [x] Página `/conteudo/artigos` criada
- [x] Lib `blog-articles.ts` com 4 primeiros artigos escritos:
  1. "Como uma empresa nova deve pensar tecnologia — e como uma empresa estabelecida deve pensar diferente"
  2. "IA em empresa nova vs. IA em empresa estabelecida"
  3. "Por que a tecnologia certa é consequência do diagnóstico certo"
  4. "O que uma boutique faz que uma grande consultoria não consegue"
- [x] Página individual `/conteudo/artigos/[slug]` criada
- [ ] CSS/styling customizado para artigos
- [ ] 8 artigos adicionais do plano (títulos listados, conteúdo pending)

### Newsletter/Radar ⏳ NÃO INICIADO
- [ ] Estrutura de infraestrutura
- [ ] Radar #1 escrito
- [ ] Página de arquivo
- [ ] Integração com Substack/Beehiiv

### Página "Quem Somos" ⏳ NÃO INICIADO
- [ ] Layout e design
- [ ] Conteúdo: tese, história, sócios
- [ ] Meta tags

### Seção "Como Atuamos" ⏳ NÃO INICIADO
- [ ] Reescrever para modelo Diagnóstico → Direcionamento → Sistema
- [ ] Copiar de §4.2 do plano
- [ ] Adicionar à home

### Seção "Por Que Uma Boutique" ⏳ NÃO INICIADO
- [ ] 4 cartões de diferenciação
- [ ] Copy de §2.3 / §4.4 do plano
- [ ] Fecho sobre pequenez vs. senioridade

### Seção "Tecnologias Que Usamos" ⏳ NÃO INICIADO
- [ ] Logos em cinza
- [ ] Copy: "Construímos sobre…"
- [ ] Sem usar palavra "parceiros" sem programa oficial

### Página "Quem Somos" ⏳ NÃO INICIADO
- Precisará de bios dos sócios (ver REPORT_DOC_PENDING.md)

---

## 📋 P2 — AGENDADO (90 dias)

- [ ] 8 artigos adicionais do blog (semanal)
- [ ] Radar quinzenal
- [ ] Parede de números com rodapés
- [ ] Versão EN dos 4 primeiros artigos
- [ ] Caso Píer Mauá nomeado (com autorização)
- [ ] Relatório público anual
- [ ] Seção de tecnologias
- [ ] Versão ES opcional

---

## 📝 ITENS BLOQUEADOS (Aguardando Informação)

Ver `REPORT_DOC_PENDING.md` para:

1. **Bios dos Sócios** (credencial de uma frase cada)
   - Leonardo Werner
   - Antonio Rapozo
   - Enrique Ibarra
   - Decisão sobre João Guilherme

2. **Números da Parede**
   - Anos de experiência combinada
   - Países
   - Setores
   - Detalhes do Píer (entrevistas, fontes, data)
   - Exit (nome da empresa, quando, contexto)

3. **Tecnologias Reais**
   - Lista exata do que usam
   - Programas de parceria oficiais?

4. **Caso Píer Mauá**
   - Autorização para nomear?
   - Depoimento disponível?
   - Logo para usar?

5. **Domínio Canônico**
   - riverlabs.ai ou riverlabs-ai.com?

---

## 🔧 Arquivos Modificados

### Traduções
- `lib/translations.ts` — hero, team, proof, cases, footer (PT, EN, ES)

### Navegação e Layout
- `components/Nav.tsx` — removido "Client Area"
- `components/Footer.tsx` — atualizado links
- `app/[lang]/layout.tsx` — meta tags, canonical URL
- `app/[lang]/diagnostic/layout.tsx` — meta tags (novo)
- `app/[lang]/cases/layout.tsx` — meta tags (novo)
- `app/[lang]/contact/layout.tsx` — meta tags (novo)

### Diagnóstico
- `lib/diagnostic-steps.ts` — setores atualizados (PT, EN, ES)

### Conteúdo/Blog
- `app/[lang]/conteudo/layout.tsx` — novo
- `app/[lang]/conteudo/artigos/page.tsx` — novo
- `app/[lang]/conteudo/artigos/[slug]/page.tsx` — novo
- `lib/blog-articles.ts` — novo (4 artigos)

### Pendente
- `REPORT_DOC_PENDING.md` — items bloqueados
- `IMPLEMENTACAO.md` — este arquivo

---

## 🚀 Próximos Passos (Por Ordem de Prioridade)

1. **Coletar informações dos sócios** (enviar REPORT_DOC_PENDING.md)
2. **Completar seções faltantes de P1:**
   - Seção "Como Atuamos" (reescrever)
   - Seção "Por Que Uma Boutique" (adicionar)
   - Página "Quem Somos" (criar)
   - Newsletter/Radar (infrastructure)
3. **Publicar blog** (ativar 4 artigos, adicionar styling)
4. **Validação e testes** (QA em 3 idiomas, preview em WhatsApp/LinkedIn)
5. **Deploy** (quando P1 estiver 80%+ pronto)

---

## 📊 Métrica de Conclusão

- **P0:** 7/7 tarefas ✅
- **P1:** 4/12 tarefas (33%)
- **P2:** 0/8 tarefas (0%)
- **Overall:** 11/27 tarefas (41%)

---

**Última atualização:** 16 de agosto de 2026, 15:45  
**Responsável:** Claude Code  
**Próxima revisão:** Após coleta de informações dos sócios
