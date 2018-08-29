// forEach method, could be shipped as part of an Object Literal/Module
export const forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]); // passes back stuff we need
	}
};

// assert for testing
export const assert = function (condition, message) {
	if (!condition) {
		throw message || "Assertion failed!";
	}

	return (condition);
}

export const delay = function (ms: number) {
 return new Promise(resolve => setTimeout(resolve, ms));
}
