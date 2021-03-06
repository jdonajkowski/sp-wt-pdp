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
import { DetailsList, SelectionMode, Selection, ConstrainMode } from 'office-ui-fabric-react/lib-es2015/DetailsList';
import ManifestStore from './../../../../stores/ManifestStore';
import normalizeComponentId from './../../../../utilities/normalizeComponentId';
import ManifestDetails from './ManifestDetails/ManifestDetails';
import styles from './ManifestManager.module.scss';
import strings from './ManifestManager.resx';
var ManifestManager = (function (_super) {
    __extends(ManifestManager, _super);
    function ManifestManager(props) {
        var _this = _super.call(this, props) || this;
        _this._selection = new Selection({
            getKey: function (item) { return item.id; },
            onSelectionChanged: function () {
                var selectedModule = _this._selection.getSelection()[0];
                if (!selectedModule) {
                    ManifestManager._selectedManifestId = undefined;
                }
                else {
                    ManifestManager._selectedManifestId = normalizeComponentId(selectedModule.id, selectedModule.version);
                }
                _this.setState(_this.getUpdatedState());
            }
        });
        _this.state = _this.getUpdatedState();
        return _this;
    }
    ManifestManager.prototype.render = function () {
        var selectedManifest = this.state.selectedManifest;
        var manifestDetailsBox = selectedManifest
            ? React.createElement(ManifestDetails, { manifest: selectedManifest })
            : React.createElement("div", { className: styles.noManifestSelectedContainer },
                React.createElement("div", null, strings.noManifestSelected));
        var columns = [{
                key: 'alias',
                name: 'alias',
                fieldName: 'alias',
                minWidth: 100,
                maxWidth: 150,
                onRender: function (item) { return React.createElement("span", null, (item.debugManifest || item.manifest).alias); }
            },
            {
                key: 'id',
                name: 'id',
                fieldName: 'id',
                minWidth: 300,
                maxWidth: 300
            }];
        return React.createElement("div", { className: styles.container },
            React.createElement("div", { className: styles.manifestListContainer },
                React.createElement(DetailsList, { items: this.state.manifests, columns: columns, isHeaderVisible: false, selectionMode: SelectionMode.single, selection: this._selection, setKey: 'set', constrainMode: ConstrainMode.unconstrained })),
            React.createElement("div", { className: styles.manifestDetailsContainer }, manifestDetailsBox));
    };
    ManifestManager.prototype.getUpdatedState = function () {
        var manifestMap = ManifestStore.instance._getManifestMap();
        var manifests = [];
        manifestMap.forEach(function (entry) { return manifests.push(entry); });
        return {
            manifests: manifests,
            selectedManifest: ManifestManager._selectedManifestId ?
                manifestMap.get(ManifestManager._selectedManifestId) :
                undefined
        };
    };
    ManifestManager._selectedManifestId = undefined;
    return ManifestManager;
}(React.Component));
export default ManifestManager;
