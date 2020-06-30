"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const untilDestroyedSymbol = Symbol('untilDestroyed');
function untilDestroyed(instance, destroyMethodName = 'ngOnDestroy') {
    return (source) => {
        const originalDestroy = instance[destroyMethodName];
        const hasDestroyFunction = typeof originalDestroy === 'function';
        if (!hasDestroyFunction) {
            throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
        }
        if (!instance[untilDestroyedSymbol]) {
            instance[untilDestroyedSymbol] = new rxjs_1.Subject();
            instance[destroyMethodName] = function () {
                if (hasDestroyFunction) {
                    originalDestroy.apply(this, arguments);
                }
                instance[untilDestroyedSymbol].next();
                instance[untilDestroyedSymbol].complete();
            };
        }
        return source.pipe(operators_1.takeUntil(instance[untilDestroyedSymbol]));
    };
}
exports.untilDestroyed = untilDestroyed;
//# sourceMappingURL=until-destroyed.js.map