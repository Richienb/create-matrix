"use strict"

const assertPositiveInteger = input => {
	if (!(typeof input === "number" && Number.isInteger(input) && input > 0)) {
		throw new TypeError(`Expected a positive integer, got ${typeof input}`)
	}
}

const empty = Symbol("Empty array")

module.exports = (rows, columns, value = empty) => {
	assertPositiveInteger(rows)
	assertPositiveInteger(columns)

	const row = value === empty ? new Array(columns) : new Array(columns).fill(value)
	return new Array(rows).fill(row)
}
