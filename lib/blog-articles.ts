export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
  content: string;
  published: boolean;
}

const articles: BlogArticle[] = [
  {
    id: "1",
    slug: "empresa-nova-vs-estabelecida-tecnologia",
    title: "Como uma empresa nova deve pensar tecnologia — e como uma empresa estabelecida deve pensar diferente",
    subtitle: "Mesma ferramenta, decisões opostas. Por que uma startup e uma empresa de 50 anos de mercado não podem usar a mesma estratégia de IA.",
    author: "Antonio Rapozo",
    date: "2025-01-15",
    readTime: 10,
    category: "Estratégia",
    published: false,
    content: `# Como uma empresa nova deve pensar tecnologia — e como uma empresa estabelecida deve pensar diferente

Mesma ferramenta, decisões opostas. Uma startup e uma empresa de 50 anos de mercado não podem usar a mesma estratégia de IA, e o motivo é estrutural, não técnico.

## A startup otimiza para crescimento; a empresa estabelecida otimiza para operação

Uma startup que compra um SaaS de automação está apostando: "Vamos ver se isso nos ajuda a escalar." O risco de fracasso é absorvível. Se a ferramenta não funcionar, ela descarta em semanas e experimenta a próxima. O tempo perdido é investimento em aprendizado.

Uma empresa com 30 anos de operação, 200 pessoas e uma estrutura de processos consolidados está apostando diferente: "Vamos aumentar a eficiência do que já funciona." Aqui, o risco de fracasso é estrutural. Uma ferramenta que não se integra à forma como o trabalho é feito não apenas falha — quebra a confiança em qualquer tentativa futura de automatizar.

Uma startup quer velocidade de experimentação. Uma empresa estabelecida quer certeza de que a mudança vai funcionar *no contexto dela*.

## Escala exigida vs. escala permitida

Uma startup com 10 pessoas pode mudar processos em uma reunião de 30 minutos. Uma empresa com 200 pessoas não pode.

Quando um SaaS de automação é vendido para uma startup, o pitch é: "Você não precisa configurar nada. Basta usar o que já vem pronto." Isso funciona em 10 pessoas. Qualquer coisa que 10 pessoas nunca fazem, a ferramenta não quebra.

A mesma ferramenta em 200 pessoas é um problema. Porque 200 pessoas fazem coisas de formas diferentes. Um departamento usa a ferramenta em 5 etapas. Outro a contorna em 3 passos. Um terceiro nem toca. Um mês depois, ninguém sabe mais qual é a verdade — e a ferramenta está sendo usada de 20 formas diferentes, e nenhuma delas é confiável.

Uma startup pode impor "essa é a forma como fazemos agora." Uma empresa estabelecida que tente isso gera resistência. Porque a forma antiga não era escolha — era resultado de 30 anos de decisões, relacionamentos e dependências que ninguém quer quebrar sem motivo forte.

## Validação de mercado vs. validação operacional

Uma startup que compra um sistema de CRM está validando: "Nosso modelo de venda funciona se temos CRM." É uma aposta sobre a tese do negócio.

Uma empresa estabelecida que reescreve seu CRM está validando: "Nossa operação de vendas pode mudar se o sistema for diferente." É uma aposta sobre mudança organizacional, não sobre tese.

A primeira é mais barata. A segunda é mais cara, porque envolve treinamento, documentação, paciência com resistência e tempo para que as pessoas aprendam a trabalhar de novo.

## A implicação prática

Uma startup deveria:
- Experimentar SaaS; custo baixo, velocidade alta, abandono rápido se não funcionar
- Usar vendor lock-in como vantagem (quanto mais integrado, melhor; abandono é fácil de todas as formas)
- Priorizar features sobre customização

Uma empresa estabelecida deveria:
- Exigir diagnóstico antes de qualquer ferramenta (ou plano) ser escolhido
- Priorizar transferência de capacidade sobre velocidade (deixa a ferramenta, não o conhecimento, quando tudo termina)
- Estar pronta para customização e integração (porque a operação dela é única)
- Medir sucesso por adoção real dentro de 90 dias, não por implementação

A diferença é que uma startup está descobrindo como trabalhar. Uma empresa estabelecida está mudando como trabalha — e mudança é lenta, por desenho.

Ignorar isso é por que 60% dos projetos de automação e IA falham. Não porque a tecnologia é ruim. Mas porque tentaram vender a estratégia de startup para uma empresa que precisava da estratégia de estabelecida.
`,
  },
  {
    id: "2",
    slug: "ia-nova-vs-ia-estabelecida",
    title: "IA em empresa nova vs. IA em empresa estabelecida: por que o mesmo modelo exige decisões opostas",
    subtitle: "Um modelo de IA que é sucesso em uma startup é fracasso em uma grande operação. E vice-versa. O motivo é confiança, supervisão e escala.",
    author: "Antonio Rapozo",
    date: "2025-03-10",
    readTime: 11,
    category: "Estratégia",
    published: false,
    content: `# IA em empresa nova vs. IA em empresa estabelecida

Um modelo de IA que é sucesso em uma startup é fracasso em uma grande operação. E vice-versa. O motivo é confiança, supervisão e escala.

## A startup pode deixar IA decidir; a empresa estabelecida não pode

Uma startup com um sistema de recomendação pode dizer: "Vamos deixar o modelo decidir 100% das recomendações." Se der errado, usuários saem para a concorrência. Se der certo, aprendem com o resultado em real-time e melhoram o modelo na próxima semana.

Uma empresa com clientes há 30 anos não pode fazer isso.

Se um sistema de decisão automatizada errar uma vez em mil, e sua operação processa 10 mil decisões por dia, terá 10 erros por dia. Em uma semana, 70 erros. A reputação sofre, clientes saem, documentação pede investigação. O custo de um erro não é técnico — é institucional.

Portanto:

Uma startup deveria usar IA com confiança alta, supervisão baixa, aprendizado rápido.

Uma empresa estabelecida deveria usar IA com confiança calibrada, supervisão clara, validação antes de qualquer ação em larga escala.

## Quem erra paga de formas diferentes

Em uma startup, erros de IA são datasets ruins. Corrige-se o dataset, retreina-se o modelo, segue-se a vida.

Em uma empresa estabelecida, um erro de IA pode ser uma decisão que afeta o cliente, a conformidade, a reputação. Quem paga não é o data scientist — é o CEO em uma reunião com o cliente ou um auditor externo.

Isso significa que uma empresa estabelecida **precisa** de auditoria integrada ao sistema. Não como aditivo, mas como parte do arquitetura. Quem usa IA nela precisa saber: "se a IA errar, vai deixar um rastro que alguém pode auditar depois."

Uma startup não precisa disso. Ela só precisa que o resultado final seja bom.

## A velocidade de mudança é diferente

Uma startup pode mudar como um modelo funciona toda semana.

Uma empresa estabelecida não consegue. Porque tem processos, políticas, treinamento, documentação. Se um sistema de IA mudar como funciona, precisa:
1. Revalidar que ainda está correto
2. Reescrever documentação
3. Retreinar equipe
4. Rodar auditoria
5. Documentar mudança para conformidade

Uma startup não precisa de nada disso.

Isso significa que uma empresa estabelecida deveria usar modelos **mais conservadores** — não aquele que te dá margem de 95% de acurácia em laboratório. Usa aquele que funciona com 85% em produção, porque o 10% restante é supervisão humana confiável.

## A escala da organização muda como IA é usada

Em uma startup, um modelo que funciona para 100 usuários é praticamente o mesmo modelo para 10 mil usuários (se o hardware aguenta).

Em uma empresa estabelecida com 200 pessoas em 5 departamentos, um modelo que funciona bem para operações pode não funcionar para compliance. O modelo precisa ser ajustado para *contexto local*. E contexto local não é coisa que você muda em uma semana.

Portanto, uma empresa estabelecida deveria:
- Começar em um departamento, validar, documentar, expandir
- Usar modelos ajustáveis por departamento (não "um modelo para todos")
- Priorizar transparência e auditoria sobre velocidade
- Incluir pessoas antigas em decisões sobre IA (porque elas conhecem as edge cases que ninguém documentou)

## O custo de erro é quem decide a arquitetura

Uma startup: custo de erro baixo → IA com supervisão baixa, confiança alta, mudança rápida.

Uma empresa estabelecida: custo de erro alto → IA com supervisão clara, confiança calibrada, mudança documentada.

Se você implementar uma estratégia de startup em uma empresa estabelecida, o projeto falha em 90 dias.

Se você implementar uma estratégia de empresa estabelecida em uma startup, morre no mercado.

O motivo não é tecnologia. É organização.
`,
  },
  {
    id: "3",
    slug: "tecnologia-certa-diagnostico-certo",
    title: "Por que a tecnologia certa é consequência do diagnóstico certo",
    subtitle: "Escolher a ferramenta antes de entender o problema é um erro que empresas estabelecidas cometem todo dia. E custa caro.",
    author: "Leonardo Werner",
    date: "2025-05-08",
    readTime: 9,
    category: "Diagnóstico",
    published: false,
    content: `# Por que a tecnologia certa é consequência do diagnóstico certo

Escolher a ferramenta antes de entender o problema é um erro que empresas estabelecidas cometem todo dia. E custa caro.

## O problema da prateleira

Uma consultoria grande chega em uma empresa com um PowerPoint sobre "transformação digital com IA". O cliente quer ouvir, porque a concorrência está falando sobre IA, e executivos não querem ser deixados para trás.

Seis meses depois, tem um sistema de IA implementado. Seis meses depois disso, ninguém o usa.

O motivo: o sistema foi desenhado em cima de uma tese que alguém trouxe — não em cima de um diagnóstico.

A consultoria trouxe uma solução que já conhecia. A empresa compraria a solução que resolvesse o verdadeiro problema — se soubesse qual era.

Ninguém descobriu junto.

## O diagnóstico é a pergunta

Diagnóstico não é "vamos ver o que vocês fazem." Diagnóstico é:

1. **Qual é o trabalho manual que mais custa tempo?** (não qual é o manual que mais dói, mas qual é o que realmente, em horas por semana, gasta mais recurso)
2. **Por que é manual?** (não porque ninguém automatizou — porque o motivo atual é manual é uma decisão racional, e você precisa saber qual é a razão)
3. **Se parasse de ser manual, o que mudaria?** (não em termos de tempo, em termos de decisão — qual é a decisão que fica mais clara se o trabalho não for manual?)
4. **Quem teria que mudar comportamento?** (porque é aqui que morrem 90% dos projetos)

Responder essas perguntas leva tempo. Leva entrevistas. Leva reconciliação de dados — porque o que as pessoas *dizem* que fazem não é exatamente o que *fazem*.

Leva descoberta honesta sobre por que a empresa ainda opera daquela forma — porque sempre há uma razão. Talvez a razão não seja boa. Mas tem uma razão.

## A diferença entre tecnologia que cola e tecnologia que não cola

Uma ferramenta que não cola é uma ferramenta que foi escolhida antes do diagnóstico estar claro.

Uma ferramenta que cola é uma ferramenta que foi escolhida *depois* de quatro coisas serem verdadeiras:
1. Sabemos qual é o trabalho manual e por que é manual
2. Sabemos qual seria o novo comportamento se não fosse manual
3. Sabemos quem teria que mudar, e eles assinaram embaixo
4. Escolhemos a ferramenta que melhor suporta *esse* novo comportamento, não o comportamento de outra empresa

## O diagnóstico certo inclui o "não fazer isso"

Uma parte importante do diagnóstico é descobrir qual é o trabalho que *parece* manual mas não vale a pena automatizar.

Em uma operação grande, tem sempre 20% do tempo gasto em tarefas que, se automatizadas, economizariam 5 horas por mês. Enquanto isso, tem 50% do tempo em 2 fluxos que, se automatizados, liberariam 40 horas por mês.

Uma consultoria sem diagnóstico vê "manual = automatize tudo".

Uma consultoria com diagnóstico vê "o ROI desse aqui é zero, o desse outro é enorme, então começamos por esse."

## Como a River Labs faz diagnóstico

Começamos com uma semana de imersão: entrevistas com operações, análise de dados, reconciliação de planilhas com o sistema.

Entregamos um relatório com:
- Mapa do fluxo de trabalho hoje
- Três oportunidades priorizadas por ROI
- Para cada uma, a razão pela qual é manual hoje
- O comportamento novo que seria possível
- A ferramenta que suportaria esse novo comportamento (que pode ser existente, customizada, ou nova)

Depois, cliente assina embaixo ou pede que reajustemos.

*Só depois* disso é que escolhemos tecnologia.

## Por que isso economiza dinheiro

Porque você não gasta seis meses em um projeto que não vai funcionar.

Você gasta uma semana em diagnóstico. Se o diagnóstico mostrar que o projeto vai funcionar, você escolhe a ferramenta com 90% de segurança.

Se o diagnóstico mostrar que vai funcionar mas vai exigir mudança organizacional pesada, você sabe disso *antes* de gastar seis meses.

Se o diagnóstico mostrar que o ROI não é tão alto, você redimensiona (em vez de descobrir isso quando já gastou 500k).

A tecnologia certa é consequência do diagnóstico certo. Sem diagnóstico, você está escolhendo no escuro.
`,
  },
  {
    id: "4",
    slug: "boutique-vs-grande-consultoria",
    title: "O que uma boutique faz que uma grande consultoria não consegue",
    subtitle: "Tamanho não é vantagem competitiva em estratégia e tecnologia. É uma limitação que precisa ser compensada — ou aceita.",
    author: "Leonardo Werner",
    date: "2025-07-03",
    readTime: 10,
    category: "Modelo de Negócio",
    published: false,
    content: `# O que uma boutique faz que uma grande consultoria não consegue

Tamanho não é vantagem competitiva em diagnóstico e construção de sistemas. É uma limitação que precisa ser compensada — ou aceita.

## A dinâmica da consultoria grande

Uma consultoria grande é organizada em pyramidal: 3-4 sêniors, 10-15 consultores, 30+ júniores.

O modelo de receita depende de volume. Quanto mais projetos rodam em paralelo, maior o faturamento.

Isso significa: o sênior que fez o diagnóstico provavelmente não é o mesmo que constrói o sistema. E nenhum deles sabe se o sistema funcionou, porque saem assim que entregar.

O incentivo não é "o cliente consegue executar", é "quantos FTEs posso faturar".

E o resultado: consultoria grande traz seu framework, aplica em todo cliente, cobra muito, e metade dos projetos falha.

## A dinâmica de uma boutique

Uma boutique tem 4 pessoas. Talvez 5 com parceiros.

Não consegue rodar 30 projetos em paralelo. Consegue 4-5 em profundidade.

O sócio que faz o diagnóstico é o mesmo que desenha a solução e lidera a construção.

E ao final, ele quer que funcione — não porque seja altruísmo, mas porque sua reputação e seus próximos clientes dependem disso.

O incentivo é diferente: "quantos clientes eu posso ajudar realmente", não "quanto faturamento posso gerar".

## Sob medida vs. prateleira

A consultoria grande traz um framework que já conhece. "Toda empresa de serviços tem X, Y, Z — então implementamos o nosso modelo em vocês."

A boutique começa do zero. "Vocês têm um contexto único. Vamos descobrir qual é, e construir para isso."

O framework grande leva 2 meses para ficar pronto, independente do cliente. Enquanto isso, customização custa extra.

O diagnóstico da boutique leva 1-2 semanas, e é customizado por desenho.

## Sênior vs. rotação de júnior

Na consultoria grande, a força de trabalho é júnior. Porque gasta menos.

O sênior desenha. O júnior executa. E esse modelo funciona para coisas padronizadas.

Mas diagnóstico e construção de sistemas em contextos únicos? Isso exige sênior do começo ao fim.

Na boutique, é sênior ou ninguém.

## Saída planejada vs. dependência

A consultoria grande quer que você precise dela para sempre. Se você conseguisse operar o sistema, deixaria de pagar.

Portanto, consultoria grande constrói dependência — através de customizações que só eles entendem, know-how que não transferem, documentação que é propositalmente ruim.

A boutique quer o oposto: terminar o projeto com você capaz de rodar.

Porque se você conseguir rodar, recomenda a gente para outro cliente.

A saída é planejada. Você não pagará por suporte eterno.

## Respeito pela sua independência

Uma consultoria grande vai vender mais contratos com você.

Uma boutique vai usar o que construiu juntos como referência.

Uma diferença que parece sutil é fundamental: na primeira, você é cliente permanente. Na segunda, você é case estudo.

Isso muda tudo. Porque um case estudo é honesto. Um cliente permanente pode ser uma relação que não funciona, mas como já investiu, você não sai.

## O tamanho é *por desenho*

A boutique é pequena porque qualidade requer profundidade.

E profundidade não escala linear com quantidade de gente.

Se contratarmos 20 pessoas, viramos uma mini-consultoria grande. E perdermos a razão de sermos uma boutique.

Então vivemos com o limite do tamanho.

E nossos clientes escolhem essa limitação porque sabem o que é: respeito pela operação deles, disposição a começar do zero, sênior o tempo inteiro, saída planejada.

Não é vantagem que compensar. É vantagem que é exatamente a que eles precisam.
`,
  },
  {
    id: "5",
    slug: "ja-fazemos-isso-diferenca-atividade-funcao",
    title: "\"Já fazemos isso\": a diferença entre atividade e função",
    subtitle: "Quando um executivo diz 'a gente já automatiza', pode significar três coisas completamente diferentes. E só uma delas é verdadeira.",
    author: "Leonardo Werner",
    date: "2025-09-12",
    readTime: 8,
    category: "Diagnóstico",
    published: false,
    content: `# "Já fazemos isso": a diferença entre atividade e função

Quando um executivo diz "a gente já automatiza", pode significar três coisas completamente diferentes. E só uma delas é verdadeira.

## Três significados de "já fazemos isso"

**Significado 1: Tem um script que alguém rodou uma vez.**

"A gente tem um sistema que envia emails automaticamente." O que realmente há: um script que um dev escreveu em 2019, que ninguém mais toca, que falha silenciosamente uma vez por mês, e ninguém sabe porque não há auditoria.

Atividade: sim, existe. Função: não, não funciona em produção.

**Significado 2: Tem um Excel com macros.**

"A gente usa uma planilha inteligente que atualiza sozinha." O que realmente há: uma planilha que uma pessoa específica mantém, que quebra quando ela sai de férias, e que tem 15 versões diferentes flutuando por email.

Atividade: sim, há processamento. Função: a função depende de uma pessoa.

**Significado 3: Tem um sistema que funciona, mas em escala muito pequena.**

"A gente tem automação de CRM." O que realmente há: 30% dos leads entram no CRM automático. 70% são inseridos manualmente porque não passam pelas mesmas regras.

Atividade: sim, executa. Função: só funciona para uma fração do problema.

## Por que a confusão importa

Porque quando você diz "a gente já faz", está pedindo licença para não mudar.

Se o diagnóstico encontra uma oportunidade de automação e você responde "já fazemos", o projeto morre ali.

Mas você não está dizendo "já funciona". Está dizendo "já tentamos" — que é completamente diferente.

## A pergunta certa

Em vez de "vocês já automatizam X?", a pergunta deveria ser:

**"Quando o sistema que automatiza X falha, quem percebe? Quanto tempo demora para descobrir? E quem conserta?"**

Se a resposta é "a gente só percebe quando o cliente reclama", não é função. É atividade que *parece* funcionar até quebrar.

## Função vs. atividade em um diagrama

| Aspecto | Atividade | Função |
|---------|-----------|--------|
| **Existe** | Sim | Sim |
| **Funciona** | Às vezes | Consistentemente |
| **Tem auditoria** | Não | Sim |
| **Alguém controla** | Pode desaparecer | Sobrevive a mudanças |
| **É escalável** | Não | Sim |
| **Tem documentação** | Raramente | Sim |
| **Tem contingência** | Não | Sim |

## O impacto no diagnóstico

Quando alguém diz "já fazemos", o diagnóstico precisa ir mais fundo:

1. Executa 100% do volume? Se não, quanto?
2. Alguém monitora? Como?
3. O que acontece quando falha?
4. Quando foi a última vez que precisou ser corrigida?
5. Uma pessoa diferente conseguiria manter isso?

Porque "já fazemos" pode significar "já desperdiçamos dinheiro nisso e agora sobrevivemos com o que restou funcionando".

E o diagnóstico correto nesse caso não é "então não precisa mudar". É "então o potencial de melhoria aqui é enorme, porque há uma base para construir".
`,
  },
  {
    id: "6",
    slug: "planos-acao-morrem-criterio-conclusao",
    title: "Por que planos de ação morrem: sem critério de conclusão, sem data de início, sem portão de saída",
    subtitle: "Um plano que não tem fim é um compromisso que nunca termina. E em empresa tradicional, isso é morte lenta.",
    author: "Leonardo Werner",
    date: "2025-11-07",
    readTime: 9,
    category: "Direcionamento",
    published: false,
    content: `# Por que planos de ação morrem

Um plano que não tem fim é um compromisso que nunca termina. E em empresa tradicional, isso é morte lenta.

## O plano que ninguém executa

Uma empresa recebe um plano: "Implementar automação de X, Y e Z em 6 meses."

Três meses depois: "Estamos ainda na fase de discovery."

Seis meses depois: "Descobrimos que precisaríamos reformular o processo inteiro. Vamos estender para 12 meses."

Doze meses depois: "A equipe que estava no projeto saiu. Estamos buscando novas pessoas para continuar."

Dezoito meses depois: o plano virou um fantasma que ninguém lembra mais.

O motivo não é falta de vontade. É falta de três coisas que fazem planos viverem.

## Três coisas que matam planos

**1. Sem critério de conclusão**

Um plano precisa de um portão. "Automação está completa quando X ocorre Y vezes sem erro manual."

Sem o portão, nunca ninguém sabe quando parar. Porque sempre há "mais um ajuste", "mais um teste", "mais uma validação".

**2. Sem data de início clara**

"Começamos em setembro" é vago. Começar é:
- Segunda-feira, 1º de setembro, 9 da manhã, pessoa X responsável, budget liberado

Sem clareza, "começar" significa "quando tudo estiver pronto", que é nunca.

**3. Sem portão de saída**

"Quando isso termina, o projeto acaba?" Se a resposta é "vamos ver", o projeto nunca termina.

Portão de saída é: "Quando isso estiver em produção e a equipe rodar sozinha, a gente sai. Data: X."

Sem portão, você fica atado a um projeto que deveria ter terminado há 6 meses.

## Por que isso mata planos em empresa tradicional

Porque empresa estabelecida não aceita "em progresso perpétuo".

Um executivo que aprovou o orçamento quer saber: quando isso termina? Quanto custa? Quando recuperamos o investimento?

Se a resposta é "ainda não sabemos", ele reorienta o orçamento. Porque se não sabe, é risco indefinido.

## Como um plano vivo se parece

**Critério de conclusão** — específico, verificável, autêntico.
- Errado: "Sistema está pronto"
- Certo: "Sistema processa 100% dos leads em menos de 2 horas, com menos de 1% de erro manual, por 30 dias consecutivos."

**Data de início** — precisa.
- Errado: "Começar em Q3"
- Certo: "Segunda-feira, 3 de setembro, 9 da manhã. Leonardo lidera kick-off. Budget liberado na conta de projeto."

**Portão de saída** — definido.
- Errado: "Vamos ver como vai"
- Certo: "Quando o sistema rodar 30 dias sem erro e a equipe souber operar sozinha, encerram-se 80% dos contratos de suporte. Data esperada: 30 de novembro."

## A diferença que isso faz

Com critério, data e portão, um plano vira executável.

Porque executivo pode dizer "sim, sei exatamente o que estou aprovando".

Porque responsável pode dizer "sei exatamente quando termina".

Porque equipe pode dizer "sei exatamente quando eu deixo de estar nesse projeto".

E isso faz toda a diferença entre um plano que morre silenciosamente e um que termina no prazo.
`,
  },
  {
    id: "7",
    slug: "mercado-outro-lado-mesa-negocia-dados",
    title: "O mercado do outro lado da mesa já decide com dados. E você?",
    subtitle: "Quando a negociação é assimétrica em informação, quem perde sempre é quem tem menos dados. A simetria é tática.",
    author: "Antonio Rapozo",
    date: "2026-01-16",
    readTime: 10,
    category: "Inteligência",
    published: false,
    content: `# O mercado do outro lado da mesa já decide com dados

Quando a negociação é assimétrica em informação, quem perde sempre é quem tem menos dados. A simetria é tática.

## A mesa de negociação moderna

Você está negociando preço com um fornecedor. Você conhece:
- Seu histórico de compra
- O preço que pagou no ano passado
- O orçamento que tem

O fornecedor conhece:
- Seu histórico de compra
- O preço que você pagou em outros lugares (porque tem acesso a dados agregados)
- Quanto o seu concorrente paga por algo parecido
- Tendências de demanda no seu setor
- Quando você vai precisar desesperad amente

A assimetria é massiva. E você está perdendo dinheiro porque não sabe disso.

## O que mudou nos últimos 10 anos

Antes: a informação era cara. Só grandes empresas tinham dados de mercado.

Agora: a informação é barata. Mas a maioria das empresas estabelecidas ainda decide como se fosse 1995 — com planilha e intuição.

Enquanto isso, seu concorrente que entendeu o modelo está operando 30% mais eficiente.

## Dados que importam em negociação

**Preço**
- Qual é a faixa de preço real no mercado para aquilo que você compra?
- Quanto seus concorrentes pagam?
- Qual é a tendência?

Se você não tem resposta, está negociando às cegas.

**Demanda**
- Quando seu mercado vai pedir mais? (semana que vem? daqui a 3 meses?)
- Como seus concorrentes anticipam isso?
- Como você ainda está reagindo quando deveria estar antecipando?

**Risco de fornecedor**
- Qual é o risco de esse fornecedor te deixar na mão?
- Qual é o backup?
- Qual é o custo de trocar?

Se você não tem alternativa, o fornecedor cobra por isso.

## Como a assimetria vira tática

A consultoria de preço começa com dados:
1. Você paga quanto hoje? (resposta: R$ 100k/ano)
2. Qual é a faixa real no mercado? (resposta: R$ 60k—R$ 150k)
3. Por que você está no topo? (resposta: porque nunca negociou)
4. Qual é o alcance possível? (resposta: R$ 65k—R$ 85k)

Agora você tem simetria. E negocia diferente.

De: "Pode fazer desconto?"
Para: "Dados mostram que o mercado está em R$ 70k. Vou aceitar R$ 75k porque sua qualidade justifica o premium. Acima disso, tenho três alternativas mapeadas."

A diferença de tom vem de dados, não de dureza.

## Por que empresas estabelecidas não fazem isso

Porque requer investimento em inteligência de mercado.

E muitas consideram: "Se a gente está pagando X há 10 anos e o negócio vai bem, para quê mudar?"

Resposta: porque alguém vai descobrir que está pagando 40% a mais e vai entrar no seu mercado com preço mais baixo.

## Como começar

1. Para cada categoria crítica de gasto, mapeie 5 concorrentes
2. Descubra quanto eles pagam (LinkedIn, sondagem, estimativa por footprint)
3. Cruze com o que você sabe de mercado público (relatórios, leilões)
4. Identifique as 3 maiores discrepâncias de preço
5. Negocie com base em dados, não em sentimento

O formato muda tudo.

De: "Precisamos economizar. Podem fazer desconto?"
Para: "Meu mercado comparável está em R$ 70k. Posso oferecer R$ 78k por 3 anos se você me garantir qualidade X."

Dados transformam pedir em negociar.
`,
  },
  {
    id: "8",
    slug: "relogio-externo-decisao-setor-18-meses",
    title: "O relógio externo: quando a decisão do seu setor é tomada 18 meses antes de você perceber",
    subtitle: "Ciclos de decisão em indústrias tradicionais são longos. E você está respondendo quando deveria estar antecipando.",
    author: "Leonardo Werner",
    date: "2026-03-21",
    readTime: 8,
    category: "Estratégia",
    published: false,
    content: `# O relógio externo: quando a decisão do seu setor é tomada 18 meses antes de você perceber

Ciclos de decisão em indústrias tradicionais são longos. E você está respondendo quando deveria estar antecipando.

## O padrão em três setores

**Turismo e Cruzeiros**
A decisão de que navios vão rodar em uma rota é tomada 18 meses antes. Porque os navios estão construindo agenda com meses de antecedência, os portos estão alocando slots, os clientes estão planejando pacotes.

Seu terminal está vendo aumento de demanda agora? A decisão já foi tomada no semestre passado. Você só está reagindo.

**Infraestrutura e Concessões**
A decisão de qual toll-road vai crescer é tomada em edital de licitação. E edital é publicado com 18 meses de antecipação.

Sua empresa está vendo crescimento? Alguém já venceu um edital há um ano.

**Hospitalidade e Eventos**
A decisão de quantos eventos vão rodar em um hotel é tomada 12-18 meses antes. Porque associações, agências e clientes corporativos planejam com essa antecedência.

Seu hotel está cheio? Os eventos já foram confirmados há mais de um ano.

## Por que o timing importa

Porque se você souber a decisão com 18 meses de antecedência, você tem tempo para:
- Aumentar capacidade
- Ajustar operação
- Investir em sistemas
- Treinar equipe
- Negociar com fornecedores

Se você descobrir quando o crescimento já chegou, você vai:
- Correr atrás de capacidade
- Pagar premium por outsourcing
- Improvisar processos
- Treinar sob pressão
- Renegociar contratos com fornecedores em posição ruim

A diferença no custo é 20-40%.

## Como você descobriria com antecedência

**Fonte 1: Editais públicos**
- Se sua indústria tem licitações, elas são publicadas meses antes
- Concorrente que vence um edital está sinalizando crescimento vindouro

**Fonte 2: Calendários setoriais**
- Associações publicam agendas de eventos com 18 meses de antecedência
- Você pode contar: quantos eventos foram confirmados para o próximo ano?

**Fonte 3: Sinais de pré-investimento do concorrente**
- Concorrente começou a contratar? Está ampliando capacidade?
- Isso sinaliza que ele viu crescimento vindo

**Fonte 4: Dados de terceiros**
- Agentes de viagem sabem agendas de navios 18 meses antes
- Armadores publicam rotas com antecedência
- Você pode pagar por dados desses terceiros

## A vantagem de quem descobre cedo

Você descobre que crescimento está vindo, você:
1. Avisa conselho com 18 meses de antecedência
2. Levanta investimento com calma
3. Contrata sem pressão
4. Testa processos
5. Chega ao crescimento pronto

Vs. empresa que descobre no meio:
1. Descobre que crescimento já começou
2. Corre para levantar investimento
3. Contrata no desespero
4. Implementa sob pressão
5. Sofre na rampagem

## Por que poucas fazem isso

Porque requer disciplina de monitoramento que a maioria não tem.

"Vamos acompanhar editais públicos todo mês" é fácil de falar. Depois vira "ninguém fez isso mês passado".

Solução: automatize. Monte um sistema que te avisa quando editais saem, quando agendas são confirmadas, quando concorrente publica novidade.

Porque o relógio externo não para. E ele passa a conhecer seu futuro 18 meses antes de você, se você deixar.
`,
  },
  {
    id: "9",
    slug: "investigar-negocio-dez-entrevistas-quatro-fontes",
    title: "Como investigar um negócio: dez entrevistas, quatro fontes primárias, uma planilha reconciliada",
    subtitle: "O método por trás do diagnóstico. Sem jargão, sem framework. Só método.",
    author: "Antonio Rapozo",
    date: "2026-05-18",
    readTime: 11,
    category: "Diagnóstico",
    published: false,
    content: `# Como investigar um negócio

O método por trás do diagnóstico. Sem jargão, sem framework. Só método.

## O que não funciona

**Workshops** — Reunir 20 pessoas, fazer brainstorm, voltar com ideias. O que você tem: opinião de quem fala mais alto, não verdade.

**Surveys online** — 200 respostas anônimas. O que você tem: média de opinião, não contexto.

**Auditoria de consultoria grande** — Enviando 3 pessoas por uma semana. O que você tem: 80% de framework, 20% do seu negócio.

Nenhuma delas funciona porque não tocam na razão pela qual as coisas são como são.

## O que funciona

**Dez entrevistas** — uma com cada stakeholder crítico.

Não 100. Não 200. Dez. Porque depois de dez você já ouviu tudo que importa.

O que muda entre entrevista 1 e entrevista 5? Tudo. Você aprende contexto, linguagem, motivação.

O que muda entre entrevista 5 e entrevista 10? Pouco. Você está validando padrão.

**Roteiro de entrevista** — estruturado, aberto.

Não um questionário. Um roteiro:
- "Como você está aqui?"
- "Qual é a maior dor que você tem nessa função?"
- "Como você toma decisão em X?"
- "Se pudesse mudar uma coisa, seria qual?"

Perguntas abertas que deixam a pessoa contar a história. E você ouve onde ela muda o tom (ali é verdade).

**Quatro fontes primárias** — dados que vêm diretamente da origem.

Não relatório de consultoria. Não planilha da contabilidade. Dados brutos.

Exemplos:
- Sistema de CRM com histórico de 2 anos de leads brutos
- Logs de equipamento com downtime real
- Registros de suporte com histórico de reclamações
- Dados de fornecedor com histórico de preço

Porque se você vai entender, precisa ver com seus olhos.

**Uma planilha reconciliada** — o lugar onde história encontra dados.

Depois de 10 entrevistas e 4 fontes, você cria uma planilha que responde: "O que essas pessoas me disseram combina com o que os dados mostram?"

Exemplo:
- Pessoa A: "Perdemos 30% do volume"
- Dado de receita: "Receita caiu 28%"
- Conclusão: A história é confiável, falta investigar onde exatamente saiu

Vs.

- Pessoa B: "Sistema está funcionando bem"
- Dado de equipamento: "Downtime aumentou 40% em 12 meses"
- Conclusão: Ou ele não sabe, ou está escondendo algo

## O sequência do método

**Semana 1**
- Segunda: entrevistas 1-3 (liderança operacional, comercial, financeira)
- Terça: entrevistas 4-6 (time de operações, clientes, fornecedores)
- Quarta: entrevistas 7-10 (casos extremos, pessoas que contestam, gente antiga)
- Quinta: coleta de dados primários

**Semana 2**
- Segunda-terça: análise cruzada
- Quarta-quinta: montagem da planilha de reconciliação
- Sexta: conclusões

## O output

Não é "relatório bonito". É:

1. **Mapa de fluxo como é realmente** (não como deveria ser)
2. **Três maiores gargalos priorizados por impacto** (não por "isso parece problema")
3. **Para cada gargalo: por que existe** (não apenas "existe")
4. **Evidência de cada conclusão** (entrevista X disse Y; dado Z confirma)

## Por que esse método funciona

Porque você ouve a verdade, vê a evidência, e cruza as duas.

Uma entrevista é opinião. Dados são fatos. Juntos, são conhecimento.

E conhecimento é o que permite construir a solução certa, não a solução que parecia boa na reunião.
`,
  },
  {
    id: "10",
    slug: "sistema-funciona-sem-voce-projetar-transferencia",
    title: "O sistema que funciona sem você: como projetar tecnologia para ser transferida",
    subtitle: "A maioria dos projetos de tecnologia em empresa estabelecida falha porque ninguém pensou em quem vai manter quando o consultor sair.",
    author: "Antonio Rapozo",
    date: "2026-07-15",
    readTime: 10,
    category: "Arquitetura",
    published: false,
    content: `# O sistema que funciona sem você

A maioria dos projetos de tecnologia em empresa estabelecida falha porque ninguém pensou em quem vai manter quando o consultor sair.

## O padrão de fracasso

Consultoria entrega sistema. Funciona. Consultor sai.

Dois meses depois: "Sistema começou a ficar lento." Ninguém sabe why.

Seis meses depois: "Sistema parou de funcionar." Tentam chamar o consultor de volta, mas ele está em outro projeto.

Um ano depois: "Voltamos pro manual porque o sistema virou mais trabalho que ajuda."

O motivo: o sistema foi desenhado para funcionar enquanto o consultor está lá. Não para funcionar sem ele.

## Três coisas que precisam existir

**1. Documentação que uma pessoa normal consegue ler**

Não technical spec. Não código comentado.

Algo assim:

"Quando o sistema recebe um pedido, ele:
1. Valida se o cliente existe (conecta em base de dados do CRM)
2. Verifica limite de crédito (chama API de cobrança)
3. Se passou, insere em fila de processamento
4. Se falhou, envia email para o cliente

Se não conseguir conectar em nenhuma das APIs, [email vai para João da TI com log do erro]."

Uma pessoa normal (gerente da operação, não dev) consegue ler isso e entender o que esperar.

**2. Alertas claros quando algo não está certo**

O sistema não pode falhar silenciosamente.

Se não conseguir conectar no CRM às 8 da manhã, precisa:
1. Tentar 3 vezes com delay de 5 minutos
2. Se falhar 3 vezes, manda email para responsável com assunto "[ALERTA] Sistema de pedidos está fora. Ação necessária."
3. Log técnico vai para arquivo para que técnico de TI later entenda

**3. Um runbook — passo a passo de o que fazer quando dá erro**

"Se receber email de alerta:
1. Vá para https://[monitoramento]
2. Procure por 'connection timeout'
3. Se vê timeout, ligue para João da TI. Ele sabe o que é.
4. Se não vê, reinicia o servidor: [como fazer]
5. Se mesmo assim não funcionar, segue os passos X, Y, Z."

Nem toda pessoa consegue fazer, mas pessoa treinada consegue.

## Por que a maioria não faz isso

Porque é trabalho adicional no projeto.

"A gente já desenhou o sistema, já codificou, agora preciso documentar e criar alertas? Vou colocar mais 40 horas?"

Sim. E essas 40 horas são o que separa "projeto de sucesso" de "projeto que funciona 6 meses e depois some".

## Como estruturar para transferência

**Design**
- Evite customizações muito profundas (quanto menos customizado, mais fácil manter)
- Use componentes padrão da indústria (CRM padrão > CRM customizado)
- Pense em quem vai manter. É dev? É operação? É gerente?

**Operação**
- Implemente monitoramento que se automanutenha (alertas que disparam automático, não manual)
- Teste sem você (deixe 1-2 semanas o sistema rodando sozinho enquanto você tira férias; o que quebra é o que seu runbook precisa cobrir)

**Treinamento**
- Não é "vamos fazer uma palestra sobre o sistema"
- É "amanhã você vai rodar o sistema sozinho enquanto eu estou aqui pra problemas"
- 2-3 dias de "você comanda, eu de backup"

**Transição**
- Últimas 2 semanas antes de você sair, você só responde dúvidas. Não executa.
- Assim identifica o que está faltando na documentação.

## O padrão de sucesso

Sistema sai bem, você sai melhor.

6 meses depois, operação está fazendo 95% das coisas sozinha.

Um ano depois, único problema é "crescimento exigiu upgrade no servidor, mas a gente já sabia que ia precisar".

Porque foi projetado para ser transferido.

Não porque a operação é supertreinada. Mas porque o sistema foi desenhado pensando em quem ia manter.
`,
  },
  {
    id: "11",
    slug: "setores-tradicionais-ia-erro-comeco-ferramenta",
    title: "Setores tradicionais e IA: o erro de começar pela ferramenta",
    subtitle: "Turismo, hospitalidade, transporte: setores que estão comprando IA como se fosse upgrade de software. E morrendo devagar.",
    author: "Leonardo Werner",
    date: "2026-08-01",
    readTime: 9,
    category: "Estratégia",
    published: false,
    content: `# Setores tradicionais e IA: o erro de começar pela ferramenta

Turismo, hospitalidade, transporte: setores que estão comprando IA como se fosse upgrade de software. E morrendo devagar.

## O padrão de erro

**Dia 1:** "Vimos que a concorrência está usando IA. Vamos comprar IA também."

**Dia 30:** "Compramos licença de chatbot com IA."

**Dia 60:** "Botão de 'fale com IA' está no site. Está funcionando."

**Dia 90:** "Chatbot está respondendo errado. Os clientes estão confusos. Vamos desativar."

**Dia 120:** "Não estamos vendo resultado. Vamos para a próxima tecnologia."

O ciclo completo: 4 meses de investimento, zero de ROI, um chatbot desativado que virou piada interna.

O motivo é sempre o mesmo: começaram pela ferramenta, não pelo problema.

## Como deveria ser

**Dia 1:** "Qual é o trabalho manual que mais custa e mais incomoda?"

Resposta: "Responder a mesma pergunta 100 vezes por dia sobre política de cancelamento."

**Dia 15:** "A gente deveria automatizar isso? Quanto seria economizado?"

Resposta: "Uma pessoa inteira de tempo por semana. R$ 20k/ano."

**Dia 30:** "Se automatizássemos, qual seria o novo comportamento? Tipo, o cliente ligaria menos? Iria sozinho no FAQ?"

Resposta: "Cliente resolveria sozinho. Valia, sim."

**Dia 45:** "Agora: qual é a ferramenta para isso?"

Resposta: "Um FAQ automatizado bate. Ou um chatbot que consegue lê FAQ."

E agora você tem critério para escolher ferramenta, não está comprando por hype.

## Por que setor tradicional faz diferente

Porque não tem costume de investir em tecnologia.

E quando descobre que pode, trata como "temos que ter". Não como "temos que resolver isso".

A diferença de mindset é profunda. Startup diz "qual é o problema?" Empresa tradicional diz "qual é a ferramenta?"

## O custo da inversão

Quando começa pela ferramenta, não consegue medir sucesso. "O chatbot está lá, está respondendo." Sucesso? Ninguém sabe.

Quando começa pelo problema, consegue medir. "Economizamos 20h/semana de atendimento? Sucesso. Economizamos 2h/semana? Fracasso, vamos tentar outra coisa."

## Como consertar

Se você já comprou ferramenta e está se perguntando se valeu:

1. **Defina o problema que a ferramenta deveria resolver** (não a ferramenta, o problema)
2. **Meça impacto real** (horas economizadas? Erros evitados? Clientes mais felizes?)
3. **Compare com investimento** (quanto custou? Vale economizar 2h/semana?)
4. **Decida:** otimize ou abandone

Porque se começar de novo, comece pelo problema. Sempre.

Ferramentas são consequência. Não o começo.
`,
  },
  {
    id: "12",
    slug: "precedentes-nunca-foi-testado-quase-nunca-verdade",
    title: "Precedentes: por que \"nunca foi testado\" quase nunca é verdade",
    subtitle: "Quando alguém diz 'ninguém do nosso setor fez isso', o que ele quer dizer é 'eu não sei de ninguém'. Muito diferente.",
    author: "Leonardo Werner",
    date: "2026-08-16",
    readTime: 8,
    category: "Estratégia",
    published: false,
    content: `# Precedentes: por que "nunca foi testado" quase nunca é verdade

Quando alguém diz "ninguém do nosso setor fez isso", o que ele quer dizer é "eu não conheço ninguém que fez." Muito diferente.

## A escada de precedentes

**Nível 1: Interno**
Alguém na sua empresa já tentou algo parecido? Se sim, como foi? Se não, por quê?

Exemplo: "A gente tentou automação de CRM em 2015. Não deu certo porque o sistema antigo não aceitava integração."

Conclusão: Problema não é automação. É integração. Se você consegue integrar, pode funcionar.

**Nível 2: Doméstico**
Alguma empresa no seu país, no seu setor, já fez? Como?

Exemplo: "Ouvi que a Gol tentou usar dados de voo para ajustar preço dinamicamente. Funcionou."

Conclusão: Sua companhia aérea pode também. É precedente.

**Nível 3: Setorial**
Alguma empresa em qualquer país, no seu setor, já fez?

Exemplo: "Soube que hotéis em Miami usam inteligência artificial para determinar ocupação real vs. demanda. Economizam 30% nos custos de staffing."

Conclusão: Ramos de hospitalidade no Brasil podem importar o modelo.

**Nível 4: Adjacente**
Alguém em setor parecido já fez algo parecido?

Exemplo: "Não achei hotel que faz isso. Mas soube que bodegas na Argentina usam IA para prever demanda de vinho por safra. Modelo similar ao de ocupação."

Conclusão: O problema é similar. A solução é adaptável.

## Por que "nunca foi testado" é fraco

Porque "nunca testado por mim" é verdade.

Mas "nunca testado por ninguém" é quase sempre falso.

Você só não está vendo porque:
- Não procura com energia
- Procura só no Brasil (resposta está em Portugal ou Espanha)
- Procura em artigos (resposta está em reunião privada)
- Procura em seu cargo (resposta está em outro cargo do concorrente)

## Como encontrar precedentes

**1. Procure o problema, não a solução**
- Errado: "Alguém já usou IA para otimizar preço no meu setor?"
- Certo: "Como outros setores resolvem 'determinar preço ideal com informação parcial'?"

**2. Entreviste adjacências**
- Setor de aviação tem problema parecido ao seu?
- Varejo eletrônico resolveu algo similar?
- Como?

**3. Leia case studies de ferramenta**
- Se uma ferramenta de IA tem 100 cases, 99 deles são de outros setores
- Mas o problema que eles resolveram pode ser seu

**4. Procure em outras geografias**
- Mercado português/espanhol usa o mesmo português
- Precedentes lá são relevantes

**5. Pergunte ao seu concorrente indireto**
- Seu concorrente direto não vai contar
- Mas empresa X que não compete com você, mas tem problema parecido, vai

## O que um precedente te dá

**Validação** — "Alguém já tentou, então é possível"

**Aprendizado** — "Alguém já errou, então eu evito"

**Timeline** — "Levou 6 meses em contexto similar, vou planejar 8"

**Confiança** — Para vender internamente — "Eu achei três empresas que fizeram, vamos fazer também"

## O bom precedente

Não é "exatamente igual". É estruturalmente similar.

Bom precedente:
- Mesmo tipo de dado (histórico)
- Mesmo tipo de decisão (preço, alocação, priorização)
- Contexto operacional parecido (empresa de 200 pessoas, setor regulado)

Ruim precedente:
- "Google fez isso" — contexto muito diferente
- "Startup X fez" — modelo de negócio radicalmente diferente

Precedente bom é o que você pode adaptar. Não o que você copia.

Quando alguém diz "nunca foi testado", a resposta correta é: "Deixa eu procurar."
`,
  },
];

export function getArticles(published: boolean = false): BlogArticle[] {
  return articles.filter((a) => a.published === published || !published);
}

export function getArticle(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return articles.filter((a) => a.category === category);
}
