export interface CustomWindow extends Window {
    Startup: {
        Init: () => void,
        AfterResult: (resultCallback: () => void) => void,
        AfterFailure: (resultCallback: () => void) => void,
        SetFormFieldPrepend: (prefix: string) => void,
        Trigger: (anchorTag: string, eventCallback?: (event:object) => void) => void | undefined,
        Store: (name: string, value: string) => void,
        Field: (fieldName: string, element: string) => void,
        Pause: () => void,
        Resume: () => void,
    }
}