/**
Create an array matrix.
@param rows The rows to create.
@param columns The columns to create.
@param value The default value to insert.
@example
```
const createMatrix = require("create-matrix");

createMatrix(2, 3, 0);
/*[
	[0, 0, 0],
	[0, 0, 0]
]*\/
```
*/
declare function createMatrix<ArrayItem>(rows: number, columns: number, value?: ArrayItem): ArrayItem[][]

export = createMatrix
