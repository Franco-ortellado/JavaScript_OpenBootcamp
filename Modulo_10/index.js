import { suma, multiplica } from "./controller.js";

const operacion = multiplica(suma(1, 2), suma(4, 5));

import chalk from "chalk";

console.log(chalk.green(operacion));
