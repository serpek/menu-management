"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shell_component_1 = require("./shell.component");
class Shell {
    static childRoutes(routes) {
        return {
            path: '',
            component: shell_component_1.ShellComponent,
            children: routes,
            data: { reuse: true },
        };
    }
}
exports.Shell = Shell;
//# sourceMappingURL=shell.service.js.map