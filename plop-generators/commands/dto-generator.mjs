// dto-generator.js
import fs from 'fs';
import path from 'path';

const DtoGenerator = {
  description: 'Generate a new DTO within a module',

  prompts: [
    {
      type: 'input',
      name: 'module',
      message: 'What is the module name?',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the DTO name?',
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
        path: `${modulePath}/dto/{{kebabCase name}}.dto.ts`,
        templateFile: 'plop-generators/templates/dto/dto.ts.hbs',
      },
    ];
  },
};

export default DtoGenerator;