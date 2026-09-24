# Databricks Genie AI — Oil & Gas Industrial Analytics 360

POC end-to-end de **Data Engineering + Analytics + BI + IA** desenvolvida no Databricks para demonstrar um fluxo completo de dados industriais de Oil & Gas.

## História do dado

A solução parte de duas naturezas de informação:

- **Dados públicos da ANP** para produção de petróleo e gás.
- **Dados sintéticos industriais** para sensores, ativos e manutenção.

O fluxo foi estruturado como um produto de dados:

```text
ANP + Sensores + Manutenção
          ↓
       Ingestão
          ↓
        Bronze
          ↓
        Silver
          ↓
         Gold
          ↓
      Analytics
       /      \
Dashboard    Genie
```

## O que foi construído

- Ingestão e preparação com Python/PySpark
- Arquitetura Medallion em Delta Lake
- Catálogo e organização por camadas
- Regras de qualidade e integridade
- Modelo Gold com fatos e dimensões
- Views específicas para consumo analítico
- AI/BI Dashboard com 6 páginas
- Genie para perguntas em linguagem natural

## Dashboard

Páginas entregues:

1. Visão Executiva
2. Análise de Produção
3. Gás e Eficiência Operacional
4. Ativos e Confiabilidade
5. Manutenção
6. Sensores Industriais

Exemplo de indicadores da POC:

- Queima e perdas: **5,28%**
- Taxa de reinjeção: **33,37%**
- Ativos monitorados: **4**
- Falhas registradas: **8**
- Downtime total: **75,15 h**
- Anomalias de sensores: **48**

## Genie

O **Oil & Gas Industrial Data Assistant** consulta views governadas do schema `analytics`.

Exemplos de perguntas:

- Qual UF apresentou maior produção de petróleo?
- Como evoluiu a produção de gás?
- Quais ativos apresentaram mais falhas?
- Qual ativo teve maior downtime?
- Existe relação entre anomalias de sensores e falhas?
- Faça um resumo executivo da operação.

## Stack

Databricks · Unity Catalog · Delta Lake · PySpark · Spark SQL · AI/BI Dashboards · Genie · Python · Git/GitHub

## Dados

Nenhum dado corporativo ou confidencial é publicado. Dados industriais de sensores, ativos e manutenção são **sintéticos** e os dados reais utilizados são provenientes de fonte pública.
