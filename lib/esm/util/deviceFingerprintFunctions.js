export const Init = () => {
    window.Startup.Init();
};
export const AfterResult = (resultCallback) => {
    window.Startup.AfterResult(resultCallback);
};
export const AfterFailure = (errorCallback) => {
    window.Startup.AfterFailure(errorCallback);
};
export const SetFormFieldPrepend = (prefix) => {
    window.Startup.SetFormFieldPrepend(prefix);
};
export const Trigger = (anchorTag, eventCallback) => {
    window.Startup.Trigger(anchorTag, eventCallback);
};
export const Store = (name, id) => {
    window.Startup.Store(name, id);
};
export const Field = (fieldName, element) => {
    window.Startup.Field(fieldName, element);
};
export const Pause = () => {
    window.Startup.Pause();
};
export const Resume = () => {
    window.Startup.Resume();
};
