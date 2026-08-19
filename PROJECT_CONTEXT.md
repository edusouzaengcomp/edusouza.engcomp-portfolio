# PROJECT_CONTEXT — Portfólio Eduardo de Souza

## Objetivo
Construir um portfólio público profissional orientado a vagas de Data Engineering, Analytics Engineering e Data & Analytics, com ênfase em Microsoft Fabric, Databricks, SQL, Power BI e IA aplicada a dados.

## Perfil
Eduardo de Souza é Engenheiro de Computação, com pós-graduação em Ciência de Dados e trajetória profissional em TI desde 2012. Sua experiência evoluiu de infraestrutura e continuidade de serviços para Data & Analytics, BI, automação e engenharia de dados.

## Posicionamento desejado
- Data Engineer
- Analytics Engineer
- Data & Analytics Engineer
- Microsoft Fabric / Databricks
- Power BI / Semantic Modeling
- SQL / Python / PySpark
- AI aplicada a dados

## Stack relevante
Microsoft Fabric; Power BI; DAX; Power Query; SQL; Python; PySpark; Databricks; Lakehouse; Dataflows Gen2; Semantic Models; Azure; Power Platform; Oracle SQL; APIs; ETL/ELT; modelagem dimensional; qualidade e governança de dados.

## Experiência e projetos que podem inspirar os cases
- Analytics para campanhas e operações de saúde.
- Dashboards de automação de processos e acompanhamento operacional.
- Analytics para educação.
- DRE, gestão orçamentária e indicadores financeiros.
- Power Apps / Power Automate.
- Power BI Embedded, RLS, gateways e integrações.
- Arquiteturas com Oracle, SharePoint, APIs, Azure e Microsoft Fabric.

## Regra de confidencialidade
NÃO publicar bases corporativas reais, nomes de clientes quando não forem apropriados, dados pessoais, dados clínicos identificáveis, credenciais, IDs internos sensíveis ou informações confidenciais.
Cases originados de experiências corporativas devem ser reconstruídos com dados sintéticos ou anonimizados. O objetivo é preservar o problema técnico, a arquitetura, a modelagem e as boas práticas — nunca reproduzir informação confidencial.

## Projetos principais

### 01 — Auditoria Analytics
Case principal de Data Engineering + Data Quality + Analytics.
Objetivo: simular uma plataforma analítica de auditoria com unidades, auditorias, itens auditados, não conformidades, criticidade, responsáveis, planos de ação, prazos, status e reincidência.
Indicadores possíveis: conformidade, NCs, NCs críticas, NC por unidade/categoria, tempo médio de tratamento, planos no prazo e reincidência.
Arquitetura alvo: dados sintéticos → Fabric → Dataflow Gen2 / pipeline → Lakehouse → transformação e qualidade → modelo dimensional → Semantic Model → Power BI.

### 02 — Analytics Health — Série Hematologia
Projeto de Analytics aplicado à saúde, sempre com dados sintéticos.
Objetivo: demonstrar ingestão, modelagem e análise temporal de exames hematológicos, volume, unidades, categorias, resultados e tendências.
Stack alvo: Fabric, SQL, Power BI, DAX, modelagem dimensional.
Aviso obrigatório no README: projeto demonstrativo, sem dados pessoais, clínicos ou corporativos reais.

### 03 — DRE Analytics
Case de Financial Analytics e Analytics Engineering.
Objetivo: modelar Realizado, Previsto, Orçado, variações R$ e %, M-1, YTD, YoY, receitas, despesas, resultado e margem.
Arquitetura alvo: dados financeiros sintéticos → Fabric → Lakehouse → dimensões e fato DRE → Semantic Model → DAX → Power BI.

### 04 — Databricks Genie AI
Case de AI/BI e exploração de dados em linguagem natural.
Objetivo: demonstrar preparação de dados confiáveis, governança e uso do Databricks Genie para perguntas analíticas.
Pode evoluir para um case com API/Jira sintético → Lakeflow/ingestão → arquitetura Medallion/Delta → Unity Catalog → Genie.

### 05 — Fabric Data Engineering
Case dedicado à engenharia de dados moderna.
Objetivo: demonstrar ingestão, Dataflows Gen2, pipelines, Lakehouse, notebooks, SQL, transformação, qualidade, modelo dimensional e consumo analítico.

## Estrutura narrativa de cada case
1. Problema / contexto
2. Objetivo
3. Dados (sempre sintéticos quando público)
4. Arquitetura
5. Engenharia / ingestão
6. Transformações e qualidade
7. Modelagem
8. Analytics / métricas
9. Tecnologias
10. Screenshots / demonstração
11. Aprendizados
12. Próximas evoluções

## Site
Visual: dark, moderno, minimalista e técnico.
Mensagem principal: “Dados que geram decisão.”
Homepage deve destacar Data & Analytics Engineer e os cinco cases.
GitHub Pages: index.html na raiz.
Não inventar métricas profissionais ou resultados não comprovados.

## Diretriz para o Codex
Antes de alterar o projeto, leia este arquivo e README.md. Preserve a estrutura, confidencialidade e posicionamento. Faça alterações incrementais, mantenha o site responsivo e não faça push de informações sensíveis.
