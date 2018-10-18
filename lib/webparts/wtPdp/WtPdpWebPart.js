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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'WtPdpWebPartStrings';
import WtPdp from './components/WtPdp';
var WtPdpWebPart = (function (_super) {
    __extends(WtPdpWebPart, _super);
    function WtPdpWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WtPdpWebPart.prototype.render = function () {
        var element = React.createElement(WtPdp, {
            description: this.properties.description
        });
        ReactDom.render(element, this.domElement);
    };
    WtPdpWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(WtPdpWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    WtPdpWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return WtPdpWebPart;
}(BaseClientSideWebPart));
export default WtPdpWebPart;
//# sourceMappingURL=WtPdpWebPart.js.map