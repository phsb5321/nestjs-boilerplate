// plopfile.js
import ModuleGenerator from './plop-generators/commands/module-generator.mjs';
import ServiceGenerator from './plop-generators/commands/service-generator.mjs';
import DtoGenerator from './plop-generators/commands/dto-generator.mjs';
import ControllerGenerator from './plop-generators/commands/controller-generator.mjs';

function PlopConfig(plop) {
  plop.setGenerator('module', ModuleGenerator);
  plop.setGenerator('service', ServiceGenerator);
  plop.setGenerator('dto', DtoGenerator);
  plop.setGenerator('controller', ControllerGenerator);
};

export default PlopConfig;
