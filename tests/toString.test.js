import toString from "../src/toString"

describe("toString.js tests", () => {
    
    it("should return string when parameter is string", () => {
        expect(toString('3.2')).toBe('3.2')
    })
    it("should return string when parameter is in number format", () => {
        expect(toString(3.2)).toBe('3.2')
    })
    it("should return string when parameter is in number format", () => {
        expect(toString(-0)).toBe('-0')
    })
    it("should return string when parameter is an array of numbers", () => {
        expect(toString([1,2,3])).toBe('1,2,3')
    })

    it("should return empty string when parameter is null", () => {
        expect(toString(null)).toBe('')
    })
    it("should return empty string when parameter is null", () => {
        expect(toString(Symbol.iterator)).toBe('Symbol(Symbol.iterator)')
    })

})