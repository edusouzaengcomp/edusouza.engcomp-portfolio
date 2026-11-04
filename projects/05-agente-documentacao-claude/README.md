# Agente de Documentação de Produtos de Dados com Claude

Case de engenharia e IA aplicada à documentação e governança de produtos Power BI. Segue a narrativa do case Databricks: contexto, fluxo, saídas, IA, arquitetura e evidências.

## Problema e objetivo

Transformar arquivos PBIX/PBIT/PBIP em conhecimento rastreável sobre origens, modelo, medidas e dependências. Automatizar inventário, diagramas, documentação e QA, mantendo uma base para consulta com Claude.

## O que foi construído

Aplicação local com painel HTML, orquestração Python e extração por pbi-tools. O pipeline preserva o original, extrai TMDL/PBIR/M, inventaria o modelo, documenta DAX e dependências, gera diagramas e base canônica Markdown e produz documentação e QA em artefatos separados.

```text
Power BI → cópia e integridade → Python + pbi-tools
       → metadados → inventário → diagramas → base Markdown
       → documentação técnica + QA + apresentação + painel

Base selecionada → Claude Code → enriquecimento ou conversa
```

## Papel do Claude

Python executa o pipeline documental. No modo econômico, são zero chamadas Claude; enriquecimento opcional usa no máximo uma chamada com JSON técnico compacto. A arquitetura de conversa seleciona até seis trechos da base por pergunta e depende de autenticação válida. Os PDFs fornecidos não demonstram uma resposta de chat ou enriquecimento bem-sucedido; essas capacidades estão descritas na arquitetura do agente.

## Evidências

Capturas de 03/11/2026 dos PDFs do painel fornecidos pelo autor:

- [Visão geral](evidencias/execucao.png): 23/23 etapas resolvidas e 16 artefatos.
- [QA](evidencias/qa.png): 7 critérios avaliados de 61 aplicáveis; 2 conformes, 5 não conformes e 54 não verificáveis; 28,6% de conformidade entre avaliados.
- 88 críticas registradas, sendo 10 altas. São apontamentos estáticos sujeitos a revisão técnica, sem comprovação automática de impacto em execução.

Os JSONs da execução V10.8 fornecida confirmam os números de QA. Os PDFs capturam uma execução posterior, em 03/11, embora estejam armazenados na pasta datada de 23/10. Não se atribui o tempo de uma retomada ao processamento integral de um produto novo.

## Entregas e organização

Original preservado, PBIT, evidências do modelo/relatório, diagramas, documentação e base de conhecimento, inventário JSON, logs, enriquecimento opcional e QA com checklist, evidências, não conformidades e sugestões.

## Limites e próximos passos

Documentação concluída não equivale a produto aprovado. A falta de evidências limita a cobertura do QA. Ampliar critérios verificáveis, validar respostas com referências aos objetos e comparar versões são próximos passos. O escopo comprovado é local; SharePoint e notificações são integrações separadas.

## Tecnologias

Python, pbi-tools, Power BI, TMDL, PBIR, Power Query M, DAX, Claude Code, JSON, Markdown, DOCX/PDF e painel HTML.

## Material público

Os PDFs do painel contêm caminhos de ambiente e informações de sessão e são demonstrados por recortes. Os documentos técnicos completos e o pacote operacional ficam locais.

## Saídas inteligentes a partir da base Markdown

A base canônica reúne o conhecimento extraído do produto e alimenta três entregas:

- **Documentação técnica completa:** arquitetura, origens, Power Query, modelo, relacionamentos e catálogo DAX. O site mostra as regras documentadas de Variação e Variação %.
- **Documentação de QA:** checklist, evidências, não conformidades e plano de correção. O exemplo público mostra como um apontamento de medida órfã leva à revisão de uso nos relatórios conectados.
- **Apresentação para o negócio:** [Apresentacao_Portfolio_DRE_Auditoria_v1.0.pdf](documentos/Apresentacao_Portfolio_DRE_Auditoria_v1.0.pdf), guia de 23 páginas com tabelas, medidas, análises prontas, boas práticas e glossário.

### Matriz de cruzamentos

A [página 19](documentos/Apresentacao_Portfolio_DRE_Auditoria_v1.0.pdf#page=19) apresenta 28 medidas versus quatro grupos de dimensões. O site destaca a [imagem original da matriz](evidencias/matriz-cruzamentos.png) e o exemplo de análise de Realizado da página 20.

As marcações são reproduzidas como geradas. A matriz resulta de análise estática e precisa de validação dos relacionamentos, dependências e efeitos dos filtros DAX no Power BI, especialmente para medidas derivadas. Não representa um teste de execução de todos os cruzamentos.

Os documentos usados nesta seção são da execução de 23/10/2026. As capturas do painel anteriores são de 03/11/2026; resultados de QA de versões distintas não são intercambiáveis.
