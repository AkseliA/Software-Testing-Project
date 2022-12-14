import add from "../src/add"

describe("add.js tests", () => {
    //basic addition with valid integers
    it("should return sum of two positive numbers", () => {
        expect(add(2, 5)).toBe(7)
    })
    it("should return sum of two negative numbers", () => {
        expect(add(-2, -5)).toBe(-7)
    })
    it("should return sum when first number is positive and second is negative", () => {
        expect(add(2, -5)).toBe(-3)
    })
    it("should return sum when first number is negative and second is positive", () => {
        expect(add(-2, 5)).toBe(3)
    })

    //addition with invalid parameter(s)
    it("should return 0 when both parameters are null", () => {
        expect(add(null, null)).toBe(0)
    })
    it("should return given integer when first parameter is null and second is integer", () => {
        expect(add(null, 5)).toBe(5)
    })
    it("should return given integer when first parameter is integer and second is null", () => {
        expect(add(5, null)).toBe(5)
    })

    //Addition with floating point number(s)
    it("should return sum of two (+)floating point numbers", () => {
        expect(add(0.2, 0.5)).toBe(0.7)
    })
    it("should return sum of two (+)floating point numbers", () => {
        expect(add(0.0029, 0.051)).toBe(0.0539)
    })
    it("should return sum of two (+)floating point numbers", () => {
        expect(add(0.029, 0.051)).toBe(0.08)
    })
    it("should return sum of two (-)floating point numbers", () => {
        expect(add(-0.2, -0.5)).toBe(-0.7)
    })
    it("should return sum of two (+)(-)floating point numbers", () => {
        expect(add(0.2, -0.5)).toBe(-0.3)
    })
    it("should return sum of two (-)(+)floating point numbers", () => {
        expect(add(-0.2, 0.5)).toBe(0.3)
    })

    //Addition with non numeric inputs
    it("should concatenate two strings into one", () => {
        expect(add("a", "b")).toBe("ab")
    })
    it("should return number when other is not number", () => {
        expect(add(10, "b")).toBe("10b")
    })
    it("should return sum when both are numbers in string format", () => {
        expect(add("5", "5")).toBe(10)
    })
    it("should add two hexadecimal numbers", () => {
        expect(add(0x0A, 0x01)).toBe(11)
    })
    it("should add number objects", () => {
        expect(add(new Number(1), new Number(4))).toBe(5)
    })
})