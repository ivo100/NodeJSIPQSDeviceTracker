import { DEVICE_FINGERPRINT_SCRIPT_ID, DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC } from "./const";
export const addDeviceTrackingTags = (domain, secretKey) => {
    document.head.appendChild(getScriptTagWindowIPQInit());
    document.head.appendChild(getScriptTagLoadSrc(domain, secretKey));
    document.head.appendChild(getNoscriptTag(domain, secretKey));
};
export const addDeviceTrackingTagsAsync = (domain, secretKey) => {
    return new Promise((resolve, reject) => {
        document.head.appendChild(getScriptTagWindowIPQInit());
        document.head.appendChild(getScriptTagLoadSrcAsync(domain, secretKey, resolve, reject));
        document.head.appendChild(getNoscriptTag(domain, secretKey));
    });
};
const getScriptTagWindowIPQInit = () => {
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("type", "text/javascript");
    const inlineScript = document.createTextNode(`
        window.IPQ = {
            Callback: function(){}
        };
    `);
    scriptTag.appendChild(inlineScript);
    return scriptTag;
};
const getScriptTagLoadSrc = (domain, secretKey) => {
    const srcFile = `https://www.ipqualityscore.com/api/${domain}/${secretKey}/learn.js`;
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute('src', srcFile);
    scriptTag.setAttribute('id', DEVICE_FINGERPRINT_SCRIPT_ID);
    scriptTag.setAttribute('crossorigin', 'anonymous');
    return scriptTag;
};
const getScriptTagLoadSrcAsync = (domain, secretKey, resolveCb, rejectCb) => {
    const srcFile = `https://www.ipqualityscore.com/api/${domain}/${secretKey}/learn.js`;
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute('src', srcFile);
    scriptTag.setAttribute('id', DEVICE_FINGERPRINT_SCRIPT_ID_ASYNC);
    scriptTag.setAttribute('crossorigin', 'anonymous');
    // For async
    scriptTag.onload = function () {
        resolveCb();
    };
    scriptTag.onerror = function () {
        rejectCb();
    };
    return scriptTag;
};
const getNoscriptTag = (domain, secretKey) => {
    const noscriptTag = document.createElement("noscript");
    noscriptTag.appendChild(generateImageTag(domain, secretKey));
    return noscriptTag;
};
const generateImageTag = (domain, secretKey) => {
    const imageTag = document.createElement("img");
    const srcImage = `https://www.ipqscdn.com/api/${domain}/${secretKey}/pixel.png`;
    imageTag.setAttribute('src', srcImage);
    return imageTag;
};
export default addDeviceTrackingTags;
