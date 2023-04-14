import {
    AfterFailure,
    AfterResult,
    Field,
    SetFormFieldPrepend,
    Init,
    Pause,
    Resume,
    Store,
    Trigger
} from './deviceFingerprintFunctions';

let windowSpy;

// TODO These could either be part of one object or you could try to use jest mocks instead?
let initCalled: boolean;
let setFormFieldPrefix: string;
let deviceName: string;
let deviceId: number;
let deviceFieldName: string;
let deviceElement: string;
let pauseCalled: boolean;
let resumeCalled: boolean;

// import {CustomWindow} from "./windowInterface";
//
// declare let window: CustomWindow;

describe('deviceFingerprintFunctions', () => {
    beforeEach(() => {
        windowSpy = jest.spyOn(window, "window", "get");
        initCalled = false;
        setFormFieldPrefix = "";
        deviceName = "";
        deviceId = 0;
        deviceFieldName = "";
        deviceElement = "";
        pauseCalled = false;
        resumeCalled = false;
        windowSpy.mockImplementation(() => ({
            Startup: {
                Init: () => {
                    initCalled = true;  // TODO This should be a jest.fn() but I couldn't get it to work with toHaveBeenCalled
                },
                AfterResult: (cb: () => void) => cb(),
                AfterFailure: (cb: () => void) => cb(),
                SetFormFieldPrepend: (prefix) => {
                    setFormFieldPrefix = prefix;  // TODO This should be a jest.fn() but I couldn't get it to work with toHaveBeenCalled
                },
                Trigger: (anchorTag: string, eventCb: (event) => void) => {
                    const event = "event";
                    eventCb(event);
                },
                Store: (name: string, id: number) => {
                    deviceName = name;
                    deviceId = id;
                },
                Field: (fieldName: string, element: string) => {
                    deviceFieldName = fieldName;
                    deviceElement = element;
                },
                Pause: () => {
                    pauseCalled = true;  // TODO This should be a jest.fn() but I couldn't get it to work with toHaveBeenCalled
                },
                Resume: () => {
                    resumeCalled = true;  // TODO This should be a jest.fn() but I couldn't get it to work with toHaveBeenCalled
                },
            }
        }));
    });
    afterEach(() => {
        windowSpy.mockRestore();
    });
    it('should be able to fire window.Startup.Init()', () => {
       Init();
       expect(initCalled).toBe(true);
    });
    it('should be able to fire window.Startup.AfterResult()', () => {
        let testValue = false;
        const cb = () => {
            testValue = true;
        }
        AfterResult(cb);
        expect(testValue).toBe(true);
    });
    it('should be able to fire window.Startup.AfterFailure()', () => {
        let testValue = false;
        const cb = () => {
            testValue = true;
        }
        AfterFailure(cb);
        expect(testValue).toBe(true);
    });
    it('should be able to fire window.Startup.SetFormFieldPrepend()', () => {
        const prefix = 'prefix'
        SetFormFieldPrepend(prefix);
        expect(setFormFieldPrefix).toBe(prefix);
    });
    it('should be able to fire window.Startup.Trigger()', () => {
        let testValue = "";
        const event = "event";
        const cb = (event) => {
            testValue = event;
        }
        Trigger(event, cb);
        expect(testValue).toBe(event);
    });
    it('should be able to fire window.Startup.Store()', () => {
        const testName = "mobile";
        const testId = 12345;
        Store(testName, testId);
        expect(deviceName).toBe(testName);
        expect(deviceId).toBe(testId);
    });
    it('should be able to fire window.Startup.Field()', () => {
        const testFieldName = "field";
        const testElement = "element";
        Field(testFieldName, testElement);
        expect(deviceFieldName).toBe(testFieldName);
        expect(deviceElement).toBe(testElement);
    });
    it('should be able to fire window.Startup.Pause()', () => {
        Pause();
        expect(pauseCalled).toBe(true);
    });
    it('should be able to fire window.Startup.Pause()', () => {
        Resume();
        expect(resumeCalled).toBe(true);
    });
});