import eq from "../src/eq"
describe("eq.js tests", () => {
    const obj = {"a": 1}
    const other= {"a": 1}
    const num1 = new Number(2)
    const num2 = new Number(2)

    it("should return true if comparing with itself", () => {
        expect(eq(obj, obj)).toBe(true)
    })
    it("should return true if comparing with itself", () => {
        expect(eq("a", "a")).toBe(true)
    })
    it("should return true if comparing with itself", () => {
        expect(eq(NaN, NaN)).toBe(true)
    })

    it("should return false when comparing different types", () => {
        expect(eq("a", Object("a"))).toBe(false)
    })
    it("should return false when comparing different types", () => {
        expect(eq(obj, other)).toBe(false)
    })
    it("should return false when comparing different types", () => {
        expect(eq(0, null)).toBe(false)
    })
    it("should return false when comparing different objects", () => {
        expect(eq(num2, num1)).toBe(false)
    })
    
    it("should return true if comparing same values", () => {
        expect(eq(num1, num1)).toBe(true)
    })
    it("should return true if comparing same values", () => {
        expect(eq(num1, 2)).toBe(true)
    })
    it("should return true if comparing same values", () => {
        expect(eq(1, "1")).toBe(true)
    })
    it("should return true if comparing same values", () => {
        expect(eq([1, 2, 3], [1, 2, 3])).toBe(true)
    })
})