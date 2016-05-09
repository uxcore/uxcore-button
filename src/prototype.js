
const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "按钮",
    category: "*",
    icon: require("./logo.svg"), // todo: require("./logo.svg"),
    componentName: "Button",
    canHovering: true,
    canSelecting: true,
    canDraging: true,
    isInline: true,
    isContainer: false,
    canDropto: true,
    canDroping: false,
    configure: [{
            name: "size",
            title: "尺寸",
            defaultValue: 'medium',
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <ChoiceSetter options={[{value:'small'},{value:'medium'},{value:'large'}]} />
        }, {
            name: "style",
            title: "样式",
            defaultValue: {},
            required: false,
            fieldStyle: "accordion",
            fieldCollapsed: false,
            setter: <JsonSetter />
        }, {
            name: "type",
            title: "类型",
            defaultValue: 'primary',
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <ChoiceSetter options={[{value:'primary'},{value:'secondary'},{value:'outline'},{value:'disabled'}]} />
        }, {
            name: "children",
            title: "内容",
            defaultValue: 'Button',
            required: false,
            fieldStyle: "block",
            fieldCollapsed: false,
            setter: <TextSetter multiline={true} rows={2} />
        }]
});
