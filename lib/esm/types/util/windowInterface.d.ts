export interface CustomWindow extends Window {
    Startup: {
        Init: () => void;
        AfterResult: (resultCallback: (result: any) => void) => void;
        AfterFailure: (errorCallback: (error: any) => void) => void;
        SetFormFieldPrepend: (prefix: string) => void;
        Trigger: (anchorTag: string, eventCallback?: (event: object) => void) => void | undefined;
        Store: (name: string, value: string) => void;
        Field: (fieldName: string, element: string) => void;
        Pause: () => void;
        Resume: () => void;
    };
}
//# sourceMappingURL=windowInterface.d.ts.map