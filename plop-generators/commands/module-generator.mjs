// module-generator.js
const ModuleGenerator = {
  description: "Create a new module",

  prompts: [
    {
      type: "input",
      name: "name",
      message: "What is the name of the new module?"
    }
  ],

  actions: [
    {
      type: "addMany",
      destination: "src/modules/{{kebabCase name}}",
      base: "plop-generators/templates/module",
      templateFiles: "plop-generators/templates/module/**"
    },
    {
      type: "modify",
      path: "src/modules/modules.module.ts",
      pattern: /(\/\/ Add imports here)/,
      template:
        "import { {{pascalCase name}}Module } from '@/modules/{{kebabCase name}}/{{camelCase name}}.module';\n$1"
    },
    {
      type: "modify",
      path: "src/modules/modules.module.ts",
      pattern: /(\/\/ Add modules here)/,
      template: "{{pascalCase name}}Module,\n    $1"
    },
    {
      type: "append",
      path: "prisma/schema.prisma",
      templateFile: "plop-generators/templates/prisma-entity-template.prisma"
    }
  ]
};

export default ModuleGenerator;