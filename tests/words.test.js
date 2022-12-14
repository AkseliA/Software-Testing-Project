import words from "../src/words"

describe("words.js tests", () => {

    it("should only return the words of the string (if pattern is not given)", () => {
        expect(words("fred, barney, & pebbles"))
            .toStrictEqual(["fred", "barney", "pebbles"])
    })
    it("should split the string in accordion with given pattern", () => {
        expect(words("fred, barney, & pebbles", /[^, ]+/g))
            .toStrictEqual(["fred", "barney", "&", "pebbles"])
    })

    it("should return empty array if parameter string is empty", () => {
        expect(words("")).toStrictEqual([])
    })
    it("should return empty array if null is parameter", () => {
        expect(words(null)).toStrictEqual([])
    })
    it("should return empty array if undefined is parameter", () => {
        expect(words(undefined)).toStrictEqual([])
    })
    it("should return empty array if ' ' is parameter", () => {
        expect(words(" ")).toStrictEqual([])
    })

    it("should return empty array if parameter string is empty but pattern is given", () => {
        expect(words("", /[^,]+/g)).toStrictEqual([])
    })

    it("should split string on capital letters", () => {
        expect(words("ThisSentenceDoesNotHaveSpaces."))
            .toStrictEqual(["This", "Sentence", "Does", "Not", "Have", "Spaces"])
    })

    it("should strip unicode entities using pattern", () => {
        expect(words("Unicode%20text%20example", /[^%20]+/g))
            .toStrictEqual(["Unicode", "text", "example"])
    })

    it("should return empty array if parameter is an array of strings", () => {
        expect(words(["This is", "an", "array of", "words"]))
            .toStrictEqual([])
    })
})