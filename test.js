const test = require("ava")
const createMatrix = require(".")

test("main", t => {
	t.deepEqual(createMatrix(2, 3, 0), [
		[0, 0, 0],
		[0, 0, 0]
	])
})
