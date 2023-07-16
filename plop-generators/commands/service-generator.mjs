// service-generator.js
import fs from 'fs';
import path from 'path';

const ServiceGenerator = {
  description: 'Generate a new service within a module',

  prompts: [
    {
      type: 'input',
      name: 'module',
      message: 'What is the module name?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the service name?',
    },
    {
      type: 'input',
      name: 'feature',
      message: 'What is the feature name?',
    },
  ],

  actions: (data) => {
    const modulePath = `src/modules/${data.module}`;
    const servicePath = `${modulePath}/services/${data.name}-${data.feature}`;

    if (!fs.existsSync(path.resolve(modulePath))) {
      console.error(
        `Module '${data.module}' does not exist. Please create it first.`,
      );
      return [];
    }

    if (!fs.existsSync(path.resolve(servicePath))) {
      fs.mkdirSync(path.resolve(servicePath), { recursive: true });
    }

    return [
      {
        type: 'addMany',
        destination: servicePath,
        base: 'templates',
        templateFiles: 'templates/*.ts',
        data,
      },
      {
        type: 'modify',
        path: `${modulePath}/{{kebabCase module}}.module.ts`,
        pattern: /(\/\/ Add services imports here)/,
        template:
          "import { {{pascalCase name}}{{pascalCase feature}}Service } from './services/{{kebabCase name}}-{{kebabCase feature}}/{{kebabCase name}}-{{kebabCase feature}}.service';\n$1",
      },
      {
        type: 'modify',
        path: `${modulePath}/{{kebabCase module}}.module.ts`,
        pattern: /(\/\/ Add new services here)/,
        template: '   {{pascalCase name}}{{pascalCase feature}}Service,\n$1',
      },
    ];
  },
};

export default ServiceGenerator;
