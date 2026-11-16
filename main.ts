import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

interface TestCase {
  id: string;
  markdown: string;
}

const inputDirectory = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const casesRaw = readFileSync(join(inputDirectory, 'cases.json'), 'utf8');
const casesList = JSON.parse(casesRaw) as TestCase[];

const htmlResults: string[] = new Array(casesList.length);
for (let i = 0; i < casesList.length; i++) {
  htmlResults[i] = parse(casesList[i].markdown);
}

writeFileSync(join(outputDirectory, 'html.json'), JSON.stringify(htmlResults));
