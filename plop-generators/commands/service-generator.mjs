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
  ],

  actions: (data) => {
    const modulePath = `src/modules/${data.module}`;
    if (!fs.existsSync(path.resolve(modulePath))) {
      console.error(
        `Module '${data.module}' does not exist. Please create it first.`,
      );
      return [];
    }
    return [
      {
        type: 'add',
        path: `${modulePath}/services/{{kebabCase name}}/{{kebabCase name}}.service.ts`,
        templateFile: 'plop-generators/templates/service/service.ts.hbs',
      },
      {
        type: 'modify',
        path: `${modulePath}/{{kebabCase module}}.module.ts`,
        pattern: /(\/\/ Add services here)/,
        template:
          "import { {{pascalCase name}}Service } from '@/modules/{{kebabCase module}}/services/{{kebabCase name}}/{{kebabCase name}}.service';\n$1",
      },
      {
        type: 'modify',
        path: `${modulePath}/{{kebabCase module}}.module.ts`,
        pattern: /(\/\/ Add service providers here)/,
        template: '   {{pascalCase name}}Service,\n$1',
      },
    ];
  },
};

export default ServiceGenerator;