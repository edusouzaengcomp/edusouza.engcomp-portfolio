# Bases sintéticas — Série Hematologia

Este diretório contém exclusivamente dados sintéticos, criados para demonstração, testes e construção de um modelo semântico no Microsoft Fabric.

Nenhum arquivo contém pacientes reais, nomes, identificadores clínicos, marcas, imagens ou dados corporativos.

## Estrutura sugerida para o modelo semântico

- `fato_resultados_hematologia.csv`: tabela fato com resultados de exames.
- `dim_paciente_sintetico.csv`: dimensão anônima de pacientes sintéticos.
- `dim_unidade.csv`: dimensão de unidades genéricas.
- `dim_exame.csv`: catálogo de exames e faixas de referência demonstrativas.
- `dim_calendario.csv`: dimensão de calendário.

Relacionamentos sugeridos: fato → paciente, unidade, exame e calendário, todos por suas respectivas chaves.
