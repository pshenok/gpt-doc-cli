# GPT Doc CLI

A command-line interface (CLI) for generating technical documentation from code using OpenAI's GPT model.

## Installation

To install the package globally, run:

```bash
npm install -g gpt-doc-cli
```

## Usage
### Using globally installed package

To generate technical documentation from a code file, run the following command:
```bash
gpt-doc-cli --path="path/to/your/codefile.ext" --api-key="your_openai_api_key"
```

### Using npx (without installing globally)

To generate technical documentation from a code file without installing the package globally, run the following command:
```bash
npx gpt-doc-cli --path="path/to/your/codefile.ext" --api-key="your_openai_api_key"
```

Replace `path/to/your/codefile.ext` with the path to your code file and `your_openai_api_key` with your OpenAI API key.

The CLI supports various file types, and the language is determined based on the file extension.

A Markdown file (.md) containing the generated technical documentation will be created in the same directory as the input code file. The name of the documentation file will be the same as the code file, but with a .md extension.