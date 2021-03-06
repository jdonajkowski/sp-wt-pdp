import strings from './../DeveloperTools.resx';
var DeveloperToolsTab = (function () {
    function DeveloperToolsTab(parameters) {
        var _this = this;
        this._isLoading = false;
        this.loadComponent = function () {
            if (!_this._componentInitializer) {
                return Promise.resolve(undefined);
            }
            if (!_this._componentInitializerPromise) {
                _this._isLoading = true;
                _this._componentInitializerPromise =
                    new Promise(_this._componentInitializer)
                        .then(function (component) {
                        _this._isLoading = false;
                        _this._component = component;
                    })
                        .catch(function (error) {
                        _this._isLoading = false;
                        _this._loadError = error;
                    });
            }
            return _this._componentInitializerPromise;
        };
        this._title = parameters.title;
        var componentParameters = parameters;
        var promiseParameters = parameters;
        if (promiseParameters.componentInitializer) {
            this._componentInitializer = promiseParameters.componentInitializer;
            this._isLoading = true;
        }
        else if (componentParameters.component) {
            this._component = componentParameters.component;
        }
        else {
            throw new Error(strings.missingDeveloperToolsTabInitFunctionError);
        }
    }
    Object.defineProperty(DeveloperToolsTab.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsTab.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsTab.prototype, "component", {
        get: function () {
            return this._component;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeveloperToolsTab.prototype, "loadError", {
        get: function () {
            return this._loadError;
        },
        enumerable: true,
        configurable: true
    });
    return DeveloperToolsTab;
}());
export default DeveloperToolsTab;
