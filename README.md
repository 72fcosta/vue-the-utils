# vue-the-utils

## Installation

### Install via NPM
```sh
$ npm install vue-the-utils --save
```

### Install via NPM
```sh
$ yarn add vue-the-utils
```

## <p align="center">Value to date</p>
String pt-BR date => Local date

### Register
```js
import { valueToDate } from 'vue-the-utils'
```

### Usage
```js
// pt-BR
// const value = '25/12/2021'
// const value = '25-12-2021'
// const value = '25 12 2021'

// en-US
// const value = '2021/12/2021'
// const value = '2021-25-12'
// const value = '2021 25 12'

const date = valueToDate(value)
```

## <p align="center">Object to array</p>
Object => Array

### Register
```js
import { objectToArray } from 'vue-the-utils'
```

### Usage
```js
const array = objectToArray(object)
```

## <p align="center">Translate en-US to pt-BR</p>
Translate en-US => pt-BR

### Register
```js
import { translateUsToBr } from 'vue-the-utils'
```

### Usage
```js
const messageBr = translateUsToBr(messageUs)
```

## License
Vue-The-Utils is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)

## Support
Hello, I'm Fábio Costa the maintainer of this project in my free time, if this project does help you in any way please consider to support me. Thanks :smiley:

[One-time donation via Paypal](https://www.paypal.com/donate?hosted_button_id=LNB6FSZRGZAFW)