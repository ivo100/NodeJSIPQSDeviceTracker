"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deviceFingerprintFunctions_1 = require("./util/deviceFingerprintFunctions");
const domManipulation_1 = require("./util/domManipulation");
const initializeScript = (domain, secretKey) => {
    (0, domManipulation_1.addDeviceTrackingTags)(domain, secretKey);
};
const initializeScriptAsync = (domain, secretKey) => {
    return (0, domManipulation_1.addDeviceTrackingTagsAsync)(domain, secretKey);
};
exports.default = {
    initializeScript,
    initializeScriptAsync,
    Init: deviceFingerprintFunctions_1.Init,
    AfterResult: deviceFingerprintFunctions_1.AfterResult,
    AfterFailure: deviceFingerprintFunctions_1.AfterFailure,
    SetFormFieldPrepend: deviceFingerprintFunctions_1.SetFormFieldPrepend,
    Trigger: deviceFingerprintFunctions_1.Trigger,
    Store: deviceFingerprintFunctions_1.Store,
    Field: deviceFingerprintFunctions_1.Field,
    Pause: deviceFingerprintFunctions_1.Pause,
    Resume: deviceFingerprintFunctions_1.Resume,
};
