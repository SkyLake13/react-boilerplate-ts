import { Component } from "react";
import { AlltrObject, ParentAppContext } from "./context";

export abstract class BaseComponent<T, U> extends Component<T, U> {

    private static get alltrWindowObject(): AlltrObject {
        return (window as any).__alltr__ as AlltrObject;
    }

    protected getAppContext(): ParentAppContext {
        const alltrObject = BaseComponent.alltrWindowObject;
        return alltrObject.context;
    }
}