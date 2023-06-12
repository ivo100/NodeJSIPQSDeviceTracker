import {CustomWindow} from "./windowInterface";

declare let window: CustomWindow;
export const Init = () => {
    window.Startup.Init();
};

export const AfterResult = (resultCallback: (result: any) => void) => {
    window.Startup.AfterResult(resultCallback);
}

export const AfterFailure = (errorCallback: (error: any) => void) => {
    window.Startup.AfterFailure(errorCallback);
}

export const SetFormFieldPrepend = (prefix: string) => {
     window.Startup.SetFormFieldPrepend(prefix);
};

export const Trigger = (anchorTag: string, eventCallback?: (event:object) => void | undefined) => {
    window.Startup.Trigger(anchorTag, eventCallback);
}

export const Store = (name: string, id: string) => {
    window.Startup.Store(name, id);
}

export const Field = (fieldName: string, element: string) => {
    window.Startup.Field(fieldName, element);
}

export const Pause = () => {
    window.Startup.Pause();
}

export const Resume = () => {
    window.Startup.Resume();
}