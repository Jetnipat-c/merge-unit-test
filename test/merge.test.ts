import { expect } from "chai";
import merge from "../src/merge";

describe("merge function", () => {
  it("should merge two sorted arrays", () => {
    const collection1 = [4, 1, 3, 5];
    const collection2 = [8, 2, 7, 9, 6];
    const result = merge(collection1, collection2);
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
