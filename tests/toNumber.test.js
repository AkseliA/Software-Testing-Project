import toNumber from "../src/toNumber"

describe("toNumber.js tests", () => {
    
    it("should return number when parameter is number", () => {
        expect(toNumber(3.2)).toBe(3.2)
    })
    it("should return number when parameter is number", () => {
        expect(toNumber(Number.MIN_VALUE)).toBe(5e-324)
    })
    it("should return Infinity when parameter is Infinity", () => {
        expect(toNumber(Infinity)).toBe(Infinity)
    })
    it("should return number when parameter is in string format", () => {
        expect(toNumber("3.2")).toBe(3.2)
    })

    it("should return NaN when parameter is Symbol", () => {
        expect(toNumber(Symbol.iterator)).toBe(NaN)
    })
    it("should return 0 when parameter is null", () => {
        expect(toNumber(null)).toBe(0)
    })
    it("should return Integer when parameter is in hex format", () => {
        expect(toNumber(0x0A)).toBe(10)
    })
    it("should return Integer when parameter is in binary format", () => {
        expect(toNumber(0b1010)).toBe(10)
    })
    it("should return Integer when parameter is in octal format", () => {
        expect(toNumber(0o12)).toBe(10)
    })

    it("should return NaN when parameter is null", () => {
        expect(toNumber({ "a": null })).toBe(NaN)
    })
    it("should return NaN when parameter is string", () => {
        expect(toNumber("abc")).toBe(NaN)
    })
    it("should return NaN when parameter is array widht string", () => {
        expect(toNumber(["abc"])).toBe(NaN)
    })
    it("should return NaN when parameter is array with multiple numbers", () => {
        expect(toNumber([1, 2, 3])).toBe(NaN)
    })
    it("should return number when parameter array containing single number", () => {
        expect(toNumber([1])).toBe(1)
    })

    it("should return (-)number when parameter is in string format and negative", () => {
        expect(toNumber("-1")).toBe(-1)
    })
    it("should return number when parameter is in string format and padded with spaces", () => {
        expect(toNumber("       1         ")).toBe(1)
    })
})