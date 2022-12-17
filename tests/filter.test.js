import filter from "../src/filter"

describe("filter.js tests", () => {
    //basic tests
    it("should return an array of users with active = true", () => {
        expect(filter([
            { 'user': 'barney', 'active': true },
           { 'user': 'fred',   'active': false }
           ], ({ active }) => active)).toStrictEqual([
            { 'user': 'barney', 'active': true }
           ])
    })
    it("should return an array of users with active = true", () => {
        expect(filter([
            { 'user': 'barney', 'active': true },
           { 'user': 'fred',   'active': true }
           ], ({ active }) => active)).toStrictEqual([
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': true }
           ])
    })
    it("should return an array with an empty array inside", () => {
        expect(filter([
            { 'user': 'barney', 'active': false },
           { 'user': 'fred',   'active': false }
           ], ({ active }) => active)).toStrictEqual([[]])
    })


})