// controller-generator.js
import fs from 'fs';
import path from 'path';

const ControllerGenerator = {
  description: 'Generate a new standalone controller within a module',

  prompts: [
    {
      type: 'input',
      name: 'module',
      message: 'What is the module name?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the controller name?',
    },
    {
      type: 'input',
      name: 'feature',
      message: 'What is the feature name?',
    },
  ],

  actions: (data) => {
    const modulePath = `src/modules/${data.module}`;
    const controllerPath = `${modulePath}/controllers/${data.name}-${data.feature}`;

    if (!fs.existsSync(path.resolve(modulePath))) {
      console.error(
        `Module '${data.module}' does not exist. Please create it first.`,
      );
      return [];
    }

    if (!fs.existsSync(path.resolve(controllerPath))) {
      fs.mkdirSync(path.resolve(controllerPath), { recursive: true });
    }

    return [
      {
        type: 'addMany',
        destination: controllerPath,
        base: 'templates',
        templateFiles: 'templates/*.ts',
        data,
      },
      {
        type: 'modify',
        path: `${modulePath}/{{kebabCase module}}.module.ts`,
        pattern: /(\/\/ Add controllers imports here)/,
        template:
          "import { {{pascalCase name}}{{pascalCase feature}}Controller } from './controllers/{{kebabCase name}}-{{kebabCase feature}}/{{kebabCase name}}-{{kebabCase feature}}.controller';\n$1",
      },
      {
        type: 'modify',
        path: `${modulePath}/{{kebabCase module}}.module.ts`,
        pattern: /(\/\/ Add new controllers here)/,
        template: '   {{pascalCase name}}{{pascalCase feature}}Controller,\n$1',
      },
    ];
  },
};

export default ControllerGenerator;
