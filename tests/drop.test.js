import drop from "../src/drop"

describe("drop.js tests", () => {
    //basic dropping with valid integers
    it("should return an array without the first value", () => {
        expect(drop([2, 5])).toStrictEqual([5])
    })
    it("should return an array without the first value", () => {
        expect(drop([-2, -5])).toStrictEqual([-5])
    })
    it("should return an array without the first value", () => {
        expect(drop([2, 5], 1)).toStrictEqual([5])
    })
    it("should return an array without the first and second values", () => {
        expect(drop([1, 2, 3], 2)).toStrictEqual([3])
    })
    it("should return the original array", () => {
        expect(drop([1, 2, 3], 0)).toStrictEqual([1, 2, 3])
    })
    it("should return the original array", () => {
        expect(drop([1, 2, 3], -5)).toStrictEqual([1, 2, 3])
    })
    it("should return an empty array", () => {
        expect(drop([1, 2, 3], 5)).toStrictEqual([])
    })

    //Dropping with invalid parameter(s)
    it("should return an empty array", () => {
        expect(drop([null, null])).toStrictEqual([])
    })
    it("should return an empty array", () => {
        expect(drop([null, null], null)).toStrictEqual([])
    })
    it("should return an array without the first value", () => {
        expect(drop([null, 5])).toStrictEqual([5])
    })
    it("should return an empty array", () => {
        expect(drop([5, null])).toStrictEqual([])
    })

})