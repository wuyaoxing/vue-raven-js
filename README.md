# vue-raven-js
vue应用通过`vue-raven-js`使用`raven-js`捕获javascript异常，上报(sentry)[https://docs.sentry.io]。

## Installation
```
npm install vue-raven-js --save
#or
yarn add vue-raven-js
```

## Usage
```
import Vue from 'vue'
import VueRavenjs from 'vue-raven-js'

Vue.use(VueRavenjs, {
    dsn: 'https://<key>@sentry.io/<project>',
    disable: process.env.NODE_ENV !== 'production',
    config: {
        release: ''
        …
    }
})
```
tip：可以通过`this.$raven`访问`Raven`对象。

## Options
Option|Type|Default|Info
dsn|`string`|`null`|`https://<key>@sentry.io/<project>`
config|`object`|`null`|`Raven`支持的config
disable|`boolean`|`null`|禁用`Raven`
