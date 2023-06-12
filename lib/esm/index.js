import { Init, AfterResult, AfterFailure, SetFormFieldPrepend, Trigger, Store, Field, Pause, Resume, } from "./util/deviceFingerprintFunctions";
import { addDeviceTrackingTags, addDeviceTrackingTagsAsync } from "./util/domManipulation";
const initializeScript = (domain, secretKey) => {
    addDeviceTrackingTags(domain, secretKey);
};
const initializeScriptAsync = (domain, secretKey) => {
    return addDeviceTrackingTagsAsync(domain, secretKey);
};
export default {
    initializeScript,
    initializeScriptAsync,
    Init,
    AfterResult,
    AfterFailure,
    SetFormFieldPrepend,
    Trigger,
    Store,
    Field,
    Pause,
    Resume,
};
