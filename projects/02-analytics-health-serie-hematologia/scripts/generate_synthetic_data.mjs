import fs from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..', 'data-sinteticos');
let seed = 20260819;
const random = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const int = (min, max) => Math.floor(random() * (max - min + 1)) + min;
const pick = (items) => items[int(0, items.length - 1)];
const csv = (headers, rows) => [headers.join(';'), ...rows.map(row => row.map(value => String(value).replaceAll(';', ',')).join(';'))].join('\n') + '\n';

const units = [
  ['U001', 'Unidade Norte', 'Norte'], ['U002', 'Unidade Sul', 'Sul'],
  ['U003', 'Unidade Leste', 'Leste'], ['U004', 'Unidade Oeste', 'Oeste'],
  ['U005', 'Unidade Central', 'Centro'], ['U006', 'Unidade Vale', 'Vale']
];
const exams = [
  ['E001', 'Hemoglobina', 'g/dL', 12.0, 17.5], ['E002', 'Hematócrito', '%', 36.0, 52.0],
  ['E003', 'Leucócitos', 'células/mm³', 4000, 11000], ['E004', 'Plaquetas', 'células/mm³', 150000, 450000],
  ['E005', 'Hemácias', 'milhões/mm³', 4.0, 6.0], ['E006', 'VCM', 'fL', 80.0, 100.0]
];

const dates = [];
for (let date = new Date(Date.UTC(2024, 0, 1)); date <= new Date(Date.UTC(2025, 11, 31)); date.setUTCDate(date.getUTCDate() + 1)) {
  dates.push(new Date(date));
}

const patients = Array.from({ length: 800 }, (_, index) => {
  const birthYear = int(1945, 2005);
  return [`P${String(index + 1).padStart(4, '0')}`, pick(['F', 'M', 'Não informado']), birthYear, pick(units)[0]];
});

const results = [];
for (let index = 1; index <= 12000; index++) {
  const exam = pick(exams);
  const patient = pick(patients);
  const date = pick(dates);
  const variation = random() < 0.12 ? (random() < 0.5 ? -0.22 : 0.22) : (random() - 0.5) * 0.16;
  const referenceMidpoint = (exam[3] + exam[4]) / 2;
  const value = Math.max(0.01, referenceMidpoint * (1 + variation));
  const status = value < exam[3] ? 'Abaixo da referência' : value > exam[4] ? 'Acima da referência' : 'Dentro da referência';
  results.push([
    `R${String(index).padStart(6, '0')}`, date.toISOString().slice(0, 10), patient[0], patient[3], exam[0],
    value.toFixed(exam[2] === 'células/mm³' ? 0 : 2), exam[2], exam[3], exam[4], status, pick(['Rotina', 'Monitoramento', 'Triagem'])
  ]);
}

await fs.mkdir(root, { recursive: true });
await Promise.all([
  fs.writeFile(path.join(root, 'dim_unidade.csv'), csv(['unidade_id', 'unidade_nome', 'regiao'], units), 'utf8'),
  fs.writeFile(path.join(root, 'dim_paciente_sintetico.csv'), csv(['paciente_id', 'sexo', 'ano_nascimento', 'unidade_id'], patients), 'utf8'),
  fs.writeFile(path.join(root, 'dim_exame.csv'), csv(['exame_id', 'exame_nome', 'unidade_medida', 'referencia_min', 'referencia_max'], exams), 'utf8'),
  fs.writeFile(path.join(root, 'dim_calendario.csv'), csv(['data', 'ano', 'mes_numero', 'mes_nome', 'trimestre'], dates.map(date => [date.toISOString().slice(0, 10), date.getUTCFullYear(), date.getUTCMonth() + 1, date.toLocaleString('pt-BR', { month: 'long', timeZone: 'UTC' }), `T${Math.floor(date.getUTCMonth() / 3) + 1}`])), 'utf8'),
  fs.writeFile(path.join(root, 'fato_resultados_hematologia.csv'), csv(['resultado_id', 'data', 'paciente_id', 'unidade_id', 'exame_id', 'resultado_valor', 'unidade_medida', 'referencia_min', 'referencia_max', 'classificacao', 'finalidade'], results), 'utf8')
]);

console.log(`Generated ${results.length} fully synthetic hematology results.`);
