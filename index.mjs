import { OpenAIApi, Configuration } from 'openai';
import { promises as fs } from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv))
  .option('path', {
    alias: 'p',
    type: 'string',
    description: 'Path to the code file',
    demandOption: true,
  })
  .option('api-key', {
    alias: 'k',
    type: 'string',
    description: 'OpenAI API key',
    demandOption: true,
  }).argv;

  const gptClient = new OpenAIApi(new Configuration({
    apiKey: argv['api-key'],
  }))

const generateDocumentation = async (path) => {
  const code = await fs.readFile(path, 'utf-8');
  const language = path.split('.').pop();

  const response = await gptClient.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate technical documentation in Markdown format for the following ${language} code:\n\n\`\`\`${language}\n${code}\n\`\`\`\n`,
    max_tokens: 1000,
    n: 1,
    stop: null,
    temperature: 0.5,
  });

  const documentation = response.data.choices[0].text.trim();
  const outputPath = path.replace(/\.[^.]+$/, '.md');
  await fs.writeFile(outputPath, documentation, 'utf-8');
  console.log(`Documentation saved in file: ${outputPath}`);
};

generateDocumentation(argv.path);
