# Fabric Data Engineering - TechRisk Intelligence POC

## Dados para priorizar riscos de Segurança da Informação

Equipes de Segurança da Informação precisam decidir diariamente quais vulnerabilidades corrigir primeiro, quais controles revisar e quais riscos levar à gestão. Quando inventário, achados, evidências e planos de ação ficam espalhados, torna-se difícil relacionar uma exposição ao serviço afetado, acompanhar atrasos e justificar prioridades.

O TechRisk Intelligence reúne esses dados em uma visão integrada. A solução relaciona vulnerabilidades à criticidade dos ativos e à exposição à internet, acompanha prazos de correção, identifica testes de controles com falha e evidencia desvios nos testes de continuidade. Cada classificação pode ser rastreada até o episódio e sua evidência, apoiando a investigação e a supervisão pela segunda linha de defesa.

Na base simulada de 05/11/2026, foram identificadas **972 exposições abertas, sendo 58 críticas e 597 vencidas**. Entre os controles, **35 testes apresentaram falha e 150 registros tinham evidências com validade vencida**. Nos testes de continuidade, **6 ultrapassaram a meta de recuperação**. Esses resultados mostram como o produto ajuda a transformar dados dispersos em uma agenda de análise: o que exige atenção, onde está concentrado e o que precisa ser acompanhado.

Construída no Microsoft Fabric, com arquitetura Medallion, PySpark, Delta Lake e Power BI, a POC demonstra como a engenharia de dados pode apoiar decisões de Segurança da Informação com critérios explícitos, histórico e rastreabilidade. A solução orienta a priorização e o acompanhamento; a avaliação e o aceite dos riscos permanecem sob responsabilidade humana.

**Demonstração com instituição fictícia e dados corporativos, scores e flags de ameaça simulados.**

## Estudo de caso

[Abrir o projeto no portfólio](https://edusouzaengcomp.github.io/edusouza.engcomp-portfolio/projects/06-fabric-techrisk-intelligence/)

A página apresenta a dor, a solução, indicadores da simulação, arquitetura e uma prévia estática identificada como tal. Os botões de acesso ao relatório Power BI foram removidos.

## Arquitetura

Fixture sintética → Bronze em arquivos JSON com manifesto/hash → Silver Delta/PySpark → Gold dimensional e snapshots → modelo semântico Direct Lake → Power BI/DAX.

O produto reúne visões executiva, vulnerabilidades, controles, resiliência, anomalias e governança. A Gold verificada contém 47.398 exposições-dia; estoques devem ser consumidos por snapshot, sem somar os dias.

## Escopo e limites

NVD, CISA KEV e FIRST EPSS são fontes públicas previstas na evolução; os IDs SIM-VULN e scores da carga demonstrada não são fatos dessas fontes. Cobertura de scanner desconhecida impede atribuir causa às anomalias. RLS, execução encadeada do pipeline e atualização agendada ponta a ponta não são declarados aprovados. Não há dados reais de instituição financeira, certificação regulatória ou aprovação automática de risco.
