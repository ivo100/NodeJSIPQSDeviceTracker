import {
    Init,
    AfterResult,
    AfterFailure,
    SetFormFieldPrepend,
    Trigger,
    Store,
    Field,
    Pause,
    Resume,
} from "./util/deviceFingerprintFunctions";
import {addDeviceTrackingTags, addDeviceTrackingTagsAsync} from "./util/domManipulation";

const initializeScript = (domain: string, secretKey: string) => {
    addDeviceTrackingTags(domain, secretKey);
}

const initializeScriptAsync = (domain: string, secretKey: string) => {
    return addDeviceTrackingTagsAsync(domain, secretKey);
}
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
