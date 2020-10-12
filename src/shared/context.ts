import { Subject, Observable, BehaviorSubject } from "rxjs";

export enum ContextType {
    User = 'user',
    Primary = 'primary',
    Secondary = 'secondary'
}

export interface AlltrObject {
    context: ParentAppContext
}

export interface ParentAppContext extends ChildAppContext {
    setUser(user: any): void
}

export interface ChildAppContext {
    user: Observable<any>;
}

export class AppContext implements ParentAppContext {
    constructor() {
        this.contexts.set(ContextType.User, new BehaviorSubject<any>({}));
    }

    public get user(): Observable<any> {
        const userContext = this.contexts.get(ContextType.User);
        return userContext ?? new BehaviorSubject({});
    }

    public setUser(user: any): void {
        if (this.contexts.has(ContextType.User)) {
            this.contexts.get(ContextType.User)?.next(user);
        } else {
            AppContext.throwError(ContextType.User);
        }
    }

    private contexts = new Map<ContextType, Subject<any>>();

    private static throwError(contextType: ContextType) {
        throw new Error(`'${contextType}' context is not found.`);
    }
}