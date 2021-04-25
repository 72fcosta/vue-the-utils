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

## Utils

1. String pt-BR date => Local date

### Register
```js
import { valueToDate } from 'vue-the-utils'
```

### Usage
```js
// const value = '25/12/2021'
// const value = '25-12-2021'
// const value = '25 12 2021'

// const value = '2021/12/2021'
// const value = '2021-25-12'
// const value = '2021 25 12'

const dateFromValue = valueToDate(value)
```
