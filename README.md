# uxcore-button

- tags: uxcore, button
- description: uxcore button
- maintainers: vincent.bian
- version: 0.3.0
- lastupdate: 2015/9/28
- screenshots:

---

## TL;DR

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/button
$ cd uxcore-tree
$ npm install
$ npm run dev
```

## Usage

```js
<div>
    <div>
        <span>{"default:"}</span>
        <Button>Confirm</Button>
    </div>
    <div>
        <span>{"size:"}</span>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
    </div>
    <div>
        <span>{"status:"}</span>
        <Button disabled>disabled</Button>
    </div>
    <div>
        <span>{"type:"}</span>
        <Button type="primary">default primary</Button>
        <Button type="secondary">secondary</Button>
    </div>
    <div>
        <span>{"add event:"}</span>
        <Button onClick={function(){alert('click me')}}>click me</Button>
    </div>
</div>
```

### demo
http://uxcore.github.io/button/

## API

### props

|参数|说明|类型|默认值|
|---|----|---|------|
|size|按钮大小(large medium small)|string|medium|
|type|类型(primary secondary)|string|blue|
|disabled|是否禁用(disabled或true false)|string|false|
