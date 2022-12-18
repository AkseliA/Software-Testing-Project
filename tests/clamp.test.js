import clamp from "../src/clamp"

describe("clamp.js tests", () => {
    // With negatives and positives
    it("should return the lower bound", () => {
        expect(clamp(-10, -5, 5)).toBe(-5)
    })
    it("should return the upper bound", () => {
        expect(clamp(10, -5, 5)).toBe(5)
    })
    it("should return itself, since the number is within the bounds", () => {
        expect(clamp(2, -5, 3)).toBe(2)
    })
    it("should return the lower bound", () => {
        expect(clamp(-2, 2, 5)).toBe(2)
    })
    it("clamping with zero values", () => {
        expect(clamp(0, 0, 0)).toBe(0)
    })

    // Clamping with invalid parameters
    it("should return 0 when all parameters are null", () => {
        expect(clamp(null, null, null)).toBe(0)
    })
})