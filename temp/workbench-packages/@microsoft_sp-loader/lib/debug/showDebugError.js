import ensureDebugComponents from './ensureDebugComponents';
export default function showDebugError(innerError, errorText, title) {
    return ensureDebugComponents().then(function (debugComponents) {
        debugComponents.showError(innerError, errorText, title);
    });
}
