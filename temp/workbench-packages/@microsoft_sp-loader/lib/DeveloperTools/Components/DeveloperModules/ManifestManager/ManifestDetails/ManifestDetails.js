var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './ManifestDetails.module.scss';
var ManifestDetails = (function (_super) {
    __extends(ManifestDetails, _super);
    function ManifestDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManifestDetails.prototype.render = function () {
        var manifest = this.props.manifest.debugManifest || this.props.manifest.manifest;
        var manifestText = manifest ? JSON.stringify(manifest, undefined, 2) : '';
        return React.createElement("div", { className: styles.container },
            React.createElement("div", { className: styles.manifestIdHeading }, this.props.manifest.id),
            React.createElement("textarea", { className: styles.manifestTextBox, readOnly: true, value: manifestText }));
    };
    return ManifestDetails;
}(React.Component));
export default ManifestDetails;
