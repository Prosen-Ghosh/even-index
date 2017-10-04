# even-index
Returns an array with items evenly indexed

![npm](https://img.shields.io/npm/v/even-index.svg) ![license](https://img.shields.io/npm/l/even-index.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/even-index.svg)


![travis-status](https://img.shields.io/travis/Prosen-Ghosh/even-index.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/even-index.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/even-index.svg)

## Features


## `npm` Install

`npm install --save even-index`


## Script Tag

#### For Development
```js
<script src=""></script>
```
#### For Production
```js
<script src=""></script>
```

## Usage

```js

const evenIndex = require('even-index');

evenIndex([]);
//=> []

evenIndex([1]);
//=> [ 1 ]

evenIndex([1,-10]);
//=> [ 1 ]

evenIndex([1,-10,45]);
//=> [ 1, 45 ]

evenIndex(["foo","baz","bar","bob","tim"]);
//=> [ 'foo', 'bar', 'tim' ]

evenIndex(["foo","baz","bar",{a : 10},[10,20,30]]);
//=> [ 'foo', 'bar', [ 10, 20, 30 ] ]

evenIndex(["foo","baz","bar",[10,30],function(){}]);
//=> [ 'foo', 'bar', [Function] ]

evenIndex(); // without parameter this function will return a type error
//=> TypeError: expect an array got undefined

evenIndex({}); // this function only expect an array
//=> TypeError: expect an array got object

```

## Author

Prosen Ghosh <prosenghosh25@gmail.com> (https://bd.linkedin.com/in/prosen-ghosh-baba9aa8)

## License

 - **MIT**
