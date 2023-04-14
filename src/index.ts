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

const initializeScript = (secretKey: string) => {
    addDeviceTrackingTags(secretKey);
}

const initializeScriptAsync = (secretKey: string) => {
    return addDeviceTrackingTagsAsync(secretKey);
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


