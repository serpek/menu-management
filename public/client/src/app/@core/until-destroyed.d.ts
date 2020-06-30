import { Observable } from 'rxjs';
export declare function untilDestroyed(instance: object, destroyMethodName?: string): <T>(source: Observable<T>) => Observable<T>;
