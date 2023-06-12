declare const _default: {
    initializeScript: (domain: string, secretKey: string) => void;
    initializeScriptAsync: (domain: string, secretKey: string) => Promise<void>;
    Init: () => void;
    AfterResult: (resultCallback: (result: any) => void) => void;
    AfterFailure: (errorCallback: (error: any) => void) => void;
    SetFormFieldPrepend: (prefix: string) => void;
    Trigger: (anchorTag: string, eventCallback?: ((event: object) => void | undefined) | undefined) => void;
    Store: (name: string, id: string) => void;
    Field: (fieldName: string, element: string) => void;
    Pause: () => void;
    Resume: () => void;
};
export default _default;
//# sourceMappingURL=index.d.ts.map