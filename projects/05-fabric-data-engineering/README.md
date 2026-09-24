# Microsoft Fabric Data Engineering — Wind Power Analytics

> **Status: Em desenvolvimento**

Projeto prático que será implementado durante o curso **Microsoft Fabric - A Formação Completa 2026**, com foco em construir uma arquitetura de dados end-to-end usando os principais artefatos do Microsoft Fabric.

## Objetivo

Construir uma solução de engenharia de dados para analisar a produção de eletricidade gerada por turbinas eólicas, cobrindo ingestão, transformação, modelagem, visualização e orquestração.

## Arquitetura prevista

```text
CSV / Fonte Web
      ↓
Lakehouse Bronze
      ↓
Notebook de transformação
      ↓
Lakehouse Silver
      ↓
Notebook de transformação
      ↓
Lakehouse Gold
      ↓
Modelo Semântico
      ↓
Power BI

          +
          ↓
Pipeline de Orquestração
          ↓
Execução agendada diariamente
```

## Etapas do projeto

1. **Ingestão de dados** — carregar dados de arquivo CSV no Lakehouse Bronze.
2. **Arquitetura Medallion** — transformar os dados de Bronze para Silver e depois para Gold usando notebooks.
3. **Modelo semântico e Power BI** — criar o modelo semântico e relatórios para análise da produção de eletricidade das turbinas eólicas.
4. **Atualização diária** — desenvolver notebook para buscar dados atualizados em uma fonte na internet.
5. **Pipeline de orquestração** — automatizar todo o fluxo e agendar a execução, por exemplo, diariamente às 7h.

## Tecnologias previstas

Microsoft Fabric · Lakehouse · Notebooks · Pipelines · Power BI · Modelo Semântico · Python/PySpark · SQL

## Status atual

Estrutura definida. Implementação será construída e documentada conforme a evolução do curso.
