# NPM Device Fingerprint Tracker Package for React

This is the NPM/Yarn package for implementing the Device Fingerprint Tracker API in React

## Further Reading

* [Creating a Device Fingerprint Tracker](https://www.ipqualityscore.com/user/tracker/new)
* [Device Fingerprint Overview](https://www.ipqualityscore.com/device-fingerprinting)
* [Device Fingerprint API](https://www.ipqualityscore.com/documentation/device-fingerprint/overview)

## Installation

npm i ipqs_device_tracker

## Initialization

To initialize the Device Tracker Package, you can do it in one of two ways

### Asynchronously (recommended)

```javascript
import DeviceFingerprint from 'ipqs_device_tracker';

function App() {
    const domain = `example.com`;
    const secretKey = `YourSecretKey`;
    useEffect(() => {
        DeviceFingerprint.initializeScriptAsync(domain, secretKey).then(() => {
            DeviceFingerprint.Init();
        }).catch((err) => {
            // Any errors loading the external script will be caught here
            console.error(err);
        });
    });
}
```

### Synchronously (not recommended)

This is not recommended as this will not tell you when the external script has been loaded, nor will it be easy to catch any errors loading an external script

```javascript
import DeviceFingerprint from 'ipqs_device_tracker';

function App() {
    useEffect(() => {
        DeviceFingerprint.initializeScript();
        setTimeout( function() {
          DeviceFingerprint.AfterResult(afterResult);
          DeviceFingerprint.Init();
        }, 1000);
    });
}
```

## Other Methods

**NOTE**: The following methods will only work after `initializeScriptAsync()` or `initializeScriptAsync()` have successfully loaded

### Init();

Initializes the Device Tracker

```javascript
DeviceFingerprint.initializeScriptAsync(domain, secretKey).then(() => {
    const callback = (result) => {
        console.log(result);
    }
    DeviceFingerprint.AfterResult(callback);
    DeviceFingerprint.Init();
});
```

### AfterResult(callback);

Enables a callback function to be called when DeviceFingerprint.Init() succeeds

```javascript
DeviceFingerprint.initializeScriptAsync(domain, secretKey).then(() => {
    const callback = (result) => {
        console.log(result);
    }
    DeviceFingerprint.AfterResult(callback);
    DeviceFingerprint.Init();
});
```

### AfterFailure(callback);

Enables a callback function to be called when DeviceFingerprint.Init() fails

```javascript
DeviceFingerprint.initializeScriptAsync(domain, secretKey).then(() => {
    const callback = (result) => {
        console.log(result);
    }
    DeviceFingerprint.AfterFailure(callback);
    DeviceFingerprint.Init();
});
```

### Pause();

Pauses the Device Tracker

```javascript
DeviceFingerprint.initializeScriptAsync(domain, secretKey).then(() => {
    DeviceFingerprint.Init();
    DeviceFingerprint.Pause();
});
```

### Resume();

Resumes the Device Tracker. This works in conjunction with `Resume()`

```javascript
DeviceFingerprint.initializeScriptAsync(domain, secretKey).then(() => {
    DeviceFingerprint.Init();
    DeviceFingerprint.Pause();
    DeviceFingerprint.Resume();
});
```

### Trigger(formId, callback);

Sets a trigger on a form based on a specific id, and assigns a callback for when that form is submitted.

If used in conjunction with `AfterResult()`, you will not fire the result callback until that specific form is submitted.

This must be called before `Init()`

```javascript
DeviceFingerprint.initializeScriptAsync(domain, secretKey).then(() => {
    const formId = "someFormId";
    const callback = (event) => {
        event.preventDefault();
    }
    DeviceFingerprint.Trigger(`#${formId}`, callback);
    DeviceFingerprint.Init();
});
```

```html
<form id={formId}>
    <button type="submit">Submit</button>
</form>
```

### SetFormFieldPrepend(prefix: string);

Sets the Form Field Prepend prefix for form submission triggers.

This works in conjunction with `Trigger()` and must be called before `Init()`

```javascript
DeviceFingerprint.initializeScriptAsync(domain, secretKey).then(() => {
    const prefix = "somePrefix";
    DeviceFingerprint.SetFormFieldPrepend(prefix);
    
    const formId = "someFormId";
    const callback = (event) => {
        event.preventDefault();
    }
    DeviceFingerprint.Trigger(`#${formId}`, callback);
    DeviceFingerprint.Init();
});
```

```html
<form id={formId}>
    <button type="submit">Submit</button>
</form>
```

### Field(fieldName: string, fieldId: number);

Allows you to specify additional fields for order submission and payment processing

```javascript
DeviceFingerprint.initializeScriptAsync(domain, secretKey).then(() => {
    const fieldName = "someField";
    const fieldId = "#someFieldId";
    DeviceFingerprint.Field(fieldName, fieldId);
    DeviceFingerprint.Init();
});
```
