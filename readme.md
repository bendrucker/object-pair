# object-pair [![Build Status](https://travis-ci.org/bendrucker/object-pair.svg?branch=master)](https://travis-ci.org/bendrucker/object-pair)

> Create an object from a key/value pair

Best used in ES5. In ES6-compatible environments just do this:

```js
{[key]: value}
```

## Install

```
$ npm install --save object-pair
```


## Usage

```js
var pair = require('object-pair')

pair('foo', 'bar')
//=> {foo: 'bar'}
```

## API

#### `pair(key, value)` -> `object`

##### key

*Required*  
Type: `string`

##### value

*Required*  
Type: `any`


## License

MIT © [Ben Drucker](http://bendrucker.me)
