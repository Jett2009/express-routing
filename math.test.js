const { getMean, getMedian, getMode } = require("./math");

describe("Test math functions", function () {
	let nums;
	beforeEach(function () {
		nums = [2, 3, 4, 4, 6, 7, 8, 10, 22];
	});

	test("Get mean of nums", function () {
		let result = getMean(nums);
		expect(result).toEqual(7.333333333333333);
	});

	test("Get median of nums", function () {
		let result = getMedian(nums);
		expect(result).toEqual(6);
	});

	test("Get mode of nums", function () {
		let result = getMode(nums);
		expect(result).toEqual(4);
	});
});
