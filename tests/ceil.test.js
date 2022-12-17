import ceil from "../src/ceil"

describe("ceil.js tests", () => {
    //Basic ceil tests
    it("should return the number rounded up", () => {
        expect(ceil(4.006)).toBe(5)
    })
    it("should return the number itself", () => {
        expect(ceil(2)).toBe(2)
    })
    it("should return the number itself", () => {
        expect(ceil(-5)).toBe(-5)
    })
    it("should return sum when first number is negative and second is positive", () => {
        expect(ceil(-2, 5)).toBe(-2)
    })
    it("should return itself if there is no number to round up", () => {
        expect(ceil(5, 5)).toBe(5)
    })
    it("should return rounded up to the negative precision", () => {
        expect(ceil(6040, -2)).toBe(6100)
    })

    //Unusual cases
    it("should return rounded up to the negative precision", () => {
        expect(ceil(5000.1, -3)).toBe(6000)
    })
    it("should return rounded up to the negative precision", () => {
        expect(ceil(5000.1, -4)).toBe(10000)
    })
    it("should return itself if there is not enough decimals to round up from", () => {
        expect(ceil(6000.001, 8)).toBe(6000.001)
    })

    //Ceiling with invalid parameter(s)
    it("should return 0 when both parameters are null", () => {
        expect(ceil(null, null)).toBe(0)
    })
    it("should return 0 when only one parameter and it is null", () => {
        expect(ceil(null)).toBe(0)
    })
    it("should return given integer when first parameter is integer and second is null", () => {
        expect(ceil(5, null)).toBe(5)
    })

})