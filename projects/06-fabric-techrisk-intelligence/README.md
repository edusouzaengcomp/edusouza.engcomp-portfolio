# Fabric Data Engineering - TechRisk Intelligence POC

Produto demonstrativo de supervisão de riscos tecnológicos da Cooperativa Financeira Horizonte, instituição fictícia.

## Demonstração

- [Estudo de caso](https://edusouzaengcomp.github.io/edusouza.engcomp-portfolio/projects/06-fabric-techrisk-intelligence/)
- [Relatório Power BI](https://app.powerbi.com/groups/579273dc-a5d7-4c30-bf3a-78636a21dd5e/reports/db28acdd-998f-4050-a904-81de59500c15/02_vulnerabilidades?experience=power-bi) — exige conta e permissões; não é um link de acesso anônimo.
- A imagem da página é uma prévia estática, identificada como tal.

## Arquitetura

Fixture sintética → Bronze em arquivos JSON com manifesto/hash → Silver Delta/PySpark → Gold dimensional e snapshots → modelo semântico Direct Lake → Power BI/DAX.

## Evidências da simulação

Snapshot 05/11/2026: 972 exposições abertas, 58 críticas, 597 vencidas, 854 com SLA conhecido (69,9% fora do SLA) e 30 KEV externos vencidos. A Gold verificada contém 47.398 exposições-dia. Indicadores corporativos e flags KEV desta fixture são simulados.

## Escopo e limites

NVD, CISA KEV e FIRST EPSS são fontes públicas previstas na evolução; os IDs SIM-VULN e scores da carga demonstrada não são fatos dessas fontes. Cobertura de scanner desconhecida impede atribuir causa às anomalias. RLS, execução encadeada do pipeline e atualização agendada ponta a ponta não são declarados aprovados. Não há dados reais de instituição financeira, certificação regulatória ou aprovação automática de risco.
