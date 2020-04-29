# create-matrix [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/create-matrix/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/create-matrix)

Create an array matrix.

[![NPM Badge](https://nodei.co/npm/create-matrix.png)](https://npmjs.com/package/create-matrix)

## Install

```sh
npm install create-matrix
```

## Usage

```js
const createMatrix = require("create-matrix");

createMatrix(2, 3, 0);
/*[
	[0, 0, 0],
	[0, 0, 0]
]*/
```

## API

### createMatrix(rows, columns, value?)

#### rows

Type: `positive integer`

The rows to create.

#### columns

Type: `positive integer`

The columns to create.

#### value

Type: `any`\
Default: `empty`

The default value to insert.
