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
|size|按钮大小(`large` `medium` `small`)|string|medium|
|type|类型(`primary` `secondary` `outline` `white`)|string|primary|
|disabled|是否禁用(`disabled` 或 `true` `false`)|string|false|
|ghost|是否显示为幽灵按钮|bool|false|
|danger|是否显示为危险按钮|bool|false|
|className|增加额外的class|string|''|
|htmlType|html dom 的 type 属性(`submit` `button` `reset`)|string|button|
|style|style 属性|object||
|loading|loading状态|bool|false|

