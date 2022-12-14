import isEmpty from "../src/isEmpty"
describe("isEmpty.js tests", () => {

    it("should return true on null input", () => {
        expect(isEmpty(null)).toBe(true)
    })
    it("should return true on boolean input", () => {
        expect(isEmpty(true)).toBe(true)
    })
    it("should return true on digit input", () => {
        expect(isEmpty(1)).toBe(true)
    })
    it("should return true on negative digit input", () => {
        expect(isEmpty(-1)).toBe(true)
    })
    it("should return true on Number.MAX_SAFE_INTEGER", () => {
        expect(isEmpty(Number.MAX_SAFE_INTEGER)).toBe(true)
    })
    it("should return false on simple array input", () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
    })
    it("should return false on string input", () => {
        expect(isEmpty("abc")).toBe(false)
    })
    it("should return false on non empty object input", () => {
        expect(isEmpty({ "a": 1 })).toBe(false)
    })
    it("should return false on non empty object input", () => {
        expect(isEmpty({a: null})).toBe(false)
    })
    it("should return false on non empty object input", () => {
        let nonEmptyObject = new Object()
        nonEmptyObject.attrib = "something"
        expect(isEmpty(nonEmptyObject)).toBe(false)
    })
    it("should return true on empty object input", () => {
        expect(isEmpty(new Object)).toBe(true)
    })
    it("should return true on empty array input", () => {
        expect(isEmpty([])).toBe(true)
    })

    it("should return true on Function input", () => {
        expect(isEmpty(Function)).toBe(true)
    })

    it("should return true on empty map", () => {
        expect(isEmpty(new Map())).toBe(true)
    })
    it("should return false on non empty map", () => {
        const nonEmptyMap = new Map()
        nonEmptyMap.set("a", 1)
        expect(isEmpty(nonEmptyMap)).toBe(false)
    })

    it("should return true on empty set", () => {
        expect(isEmpty(new Set())).toBe(true)
    })
    it("should return true on empty set containing an array", () => {
        expect(isEmpty(new Set([]))).toBe(true)
    })
    it("should return false on non empty set", () => {
        expect(isEmpty(new Set(["a", 1, "b", "c", 2]))).toBe(false)
    })

    it("should return true on empty prototype", () => {
        const emptyFunc = () => {}
        expect(isEmpty(emptyFunc.prototype)).toBe(true)
    })

    it("should return false on non empty prototype", () => {
        const nonEmptyFunc = (param) => {
            console.log(param)
        }
        nonEmptyFunc.prototype.value="param"
        expect(isEmpty(nonEmptyFunc.prototype)).toBe(false)
    })

    it("should return true on empty set", () => {
        expect(isEmpty(new Uint32Array)).toBe(true)
    })

})
