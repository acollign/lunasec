"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureFormContext = void 0;
const react_1 = __importDefault(require("react"));
// Note: The "default functions" here are only used by components that *don't* have a Provider in the component chain.
// Everything won't work _anyway_ if somebody does that, so we're OK not to. :pray:
// We redefine these functions in the SecureForm to set the state there
exports.SecureFormContext = react_1.default.createContext({
    addComponent: (component) => {
        console.log('Forwarded component:', component);
    },
    removeComponent: (frameId) => console.log('Removed component:', frameId),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJlRm9ybUNvbnRleHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZWN1cmVGb3JtQ29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBMEI7QUFXMUIsc0hBQXNIO0FBQ3RILG1GQUFtRjtBQUNuRix1RUFBdUU7QUFDMUQsUUFBQSxpQkFBaUIsR0FBRyxlQUFLLENBQUMsYUFBYSxDQUF5QjtJQUMzRSxZQUFZLEVBQUUsQ0FBQyxTQUFxQixFQUFFLEVBQUU7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ0QsZUFBZSxFQUFFLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQztDQUNqRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1NlY3VyZUlucHV0fSBmcm9tICcuL1NlY3VyZUlucHV0J1xuXG5leHBvcnQgdHlwZSBTZWN1cmVGb3JtQ29udGV4dFByb3BzID0ge1xuICBhZGRDb21wb25lbnQ6IChcbiAgICBjb21wb25lbnQ6IFNlY3VyZUlucHV0XG4gICkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgcmVtb3ZlQ29tcG9uZW50OiAoZnJhbWVJZDogc3RyaW5nKSA9PiB2b2lkO1xufTtcblxuLy8gTm90ZTogVGhlIFwiZGVmYXVsdCBmdW5jdGlvbnNcIiBoZXJlIGFyZSBvbmx5IHVzZWQgYnkgY29tcG9uZW50cyB0aGF0ICpkb24ndCogaGF2ZSBhIFByb3ZpZGVyIGluIHRoZSBjb21wb25lbnQgY2hhaW4uXG4vLyBFdmVyeXRoaW5nIHdvbid0IHdvcmsgX2FueXdheV8gaWYgc29tZWJvZHkgZG9lcyB0aGF0LCBzbyB3ZSdyZSBPSyBub3QgdG8uIDpwcmF5OlxuLy8gV2UgcmVkZWZpbmUgdGhlc2UgZnVuY3Rpb25zIGluIHRoZSBTZWN1cmVGb3JtIHRvIHNldCB0aGUgc3RhdGUgdGhlcmVcbmV4cG9ydCBjb25zdCBTZWN1cmVGb3JtQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8U2VjdXJlRm9ybUNvbnRleHRQcm9wcz4oe1xuICBhZGRDb21wb25lbnQ6IChjb21wb25lbnQ6U2VjdXJlSW5wdXQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRm9yd2FyZGVkIGNvbXBvbmVudDonLCBjb21wb25lbnQpO1xuICB9LFxuICByZW1vdmVDb21wb25lbnQ6IChmcmFtZUlkOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKCdSZW1vdmVkIGNvbXBvbmVudDonLCBmcmFtZUlkKSxcbn0pO1xuIl19