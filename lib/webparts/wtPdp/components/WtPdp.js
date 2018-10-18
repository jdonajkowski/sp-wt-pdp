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
import styles from './WtPdp.module.scss';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { Image, Segment, Step, Transition, Button } from 'semantic-ui-react';
var WtPdp = (function (_super) {
    __extends(WtPdp, _super);
    function WtPdp(props) {
        var _this = _super.call(this, props) || this;
        /**
         *
         */
        _this.handleClick = function (e, _a) {
            var title = _a.title;
            return _this.setState({ active: title });
        };
        _this.HandleNextClick = function (e) { return _this.setState({ active: _this.state.Next }); };
        _this.state = { active: "Welcome", Next: "Proformance", User: "Jacob Donajkowski", Manager: "Kevin Roberts" };
        SPComponentLoader.loadCss('https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css');
        return _this;
    }
    WtPdp.prototype.render = function () {
        var _a = this.state, active = _a.active, User = _a.User, Manager = _a.Manager;
        return (React.createElement("div", { className: styles.container },
            React.createElement(Step.Group, { attached: 'top', fluid: true, size: 'mini' },
                React.createElement(Step, { active: active === 'Welcome', onClick: this.handleClick, title: 'Welcome' },
                    React.createElement(Step.Content, null,
                        React.createElement(Step.Title, null, "Welcome"))),
                React.createElement(Step, { active: active === 'Proformance', onClick: this.handleClick, title: 'Proformance' },
                    React.createElement(Step.Content, null,
                        React.createElement(Step.Title, null, "Proformance"))),
                React.createElement(Step, { active: active === 'Career Development', onClick: this.handleClick, title: 'Career Development' },
                    React.createElement(Step.Content, null,
                        React.createElement(Step.Title, null, "Career Development"))),
                React.createElement(Step, { active: active === 'Goals & Expectactions', onClick: this.handleClick, title: 'Goals & Expectactions' },
                    React.createElement(Step.Content, null,
                        React.createElement(Step.Title, null, "Goals & Expectactions"))),
                React.createElement(Step, { active: active === 'Safety', onClick: this.handleClick, title: 'Safety' },
                    React.createElement(Step.Content, null,
                        React.createElement(Step.Title, null, "Safety"))),
                React.createElement(Step, { active: active === 'Training', onClick: this.handleClick, title: 'Training' },
                    React.createElement(Step.Content, null,
                        React.createElement(Step.Title, null, "Training"))),
                React.createElement(Step, { active: active === 'Review', onClick: this.handleClick, title: 'Review' },
                    React.createElement(Step.Content, null,
                        React.createElement(Step.Title, null, "Review")))),
            React.createElement(Transition, { visible: active === 'Welcome', animation: 'browse', duration: 1 },
                React.createElement(Segment, { attached: true },
                    React.createElement("div", { style: { width: '100%', height: '340px' } },
                        React.createElement("p", null,
                            "Welcome  ",
                            User,
                            ","),
                        React.createElement(Image, { size: 'medium', floated: 'right', src: 'https://via.placeholder.com/350x350' }),
                        React.createElement("p", null,
                            "The Wade Trim Professional Development Program (PDP) focuses on continuous improvement, training and career development. To start the process, complete the employee section of the PDP. Once you complete your portion, your responses will be forwarded to your supervisor/evaluator(s) ",
                            Manager,
                            " and they will contact you to schedule a meeting."),
                        React.createElement("p", null, "Click Next to start your PDP.")))),
            React.createElement(Transition, { visible: active === 'Proformance', animation: 'browse', duration: 1 },
                React.createElement(Segment, { attached: true },
                    React.createElement("div", null, "Preformance"))),
            React.createElement(Transition, { visible: active === 'Career Development', animation: 'browse', duration: 1 },
                React.createElement(Segment, { attached: true }, "Career")),
            React.createElement(Transition, { visible: active === 'Goals & Expectactions', animation: 'browse', duration: 1 },
                React.createElement(Segment, { attached: true }, "Goals & Expectactions")),
            React.createElement(Transition, { visible: active === 'Safety', animation: 'browse', duration: 1 },
                React.createElement(Segment, { attached: true }, "Safety")),
            React.createElement(Transition, { visible: active === 'Training', animation: 'browse', duration: 1 },
                React.createElement(Segment, { attached: true }, "Training")),
            React.createElement(Transition, { visible: active === 'Review', animation: 'browse', duration: 1 },
                React.createElement(Segment, { attached: true }, "Review")),
            React.createElement("div", { style: { paddingTop: '10px' } },
                React.createElement(Button, { floated: 'right', color: 'linkedin', onClick: this.HandleNextClick }, "Next"))));
    };
    return WtPdp;
}(React.Component));
export default WtPdp;
//# sourceMappingURL=WtPdp.js.map