# uxcore-button

---

## TL;DR

button ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-button
$ cd uxcore-button
$ npm install
$ npm start
```

### demo
http://uxcore.github.io/uxcore/css/button/

## API

### PROPS

#### Button

|参数|说明|类型|默认值|
|---|----|---|------|
|size|按钮大小(`large` `middle` `small`)|string|medium|
|type|类型(`primary` `secondary` `outline` `white` `text`)|string|primary|
|disabled|是否禁用(`disabled` 或 `true` `false`)|string|false|
|ghost|是否显示为幽灵按钮|bool|false|
|danger|是否显示为危险按钮|bool|false|
|className|增加额外的class|string|''|
|htmlType|html dom 的 type 属性(`submit` `button` `reset`)|string|button|
|style|style 属性|object||
|loading|loading状态, loading 为 true 时不会触发 onClick 动作 |bool|false|
|countDown|按钮倒计时功能,单位为秒（s）,倒计时结束之后会触发`onCountDownEnd`回调函数|number|undefined|
|onCountDownEnd|倒计时结束之后的回调函数|function|noop|

