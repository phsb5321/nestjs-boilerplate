// controller-generator.js
import fs from 'fs';
import path from 'path';

const ControllerGenerator = {
  description: 'Generate a new controller within a module',

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
        path: `${modulePath}/controllers/{{kebabCase name}}.controller.ts`,
        templateFile: 'plop-generators/templates/controller/controller.ts.hbs',
      },
      {
        type: 'modify',
        path: `${modulePath}/{{kebabCase module}}.module.ts`,
        pattern: /(\/\/ Add controllers here)/,
        template:
          "import { {{pascalCase name}}Controller } from '@/modules/{{kebabCase module}}/controllers/{{kebabCase name}}.controller';\n$1",
      },
      {
        type: 'modify',
        path: `${modulePath}/{{kebabCase module}}.module.ts`,
        pattern: /(\/\/ Add controller providers here)/,
        template: '   {{pascalCase name}}Controller,\n$1',
      },
    ];
  },
};

export default ControllerGenerator;