import merge from "../src/merge";

describe("Merge Function", () => {
  it("should merge two sorted arrays correctly", () => {
    const collection1 = [1, 3, 5, 7];
    const collection2 = [2, 4, 6, 8];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should handle empty input arrays", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([]);
  });

  it("should handle one empty input arrays", () => {
    const collection1: number[] = [];
    const collection2: number[] = [2, 4, 6, 8, 10];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([2, 4, 6, 8, 10]);
  });

  it("should handle one another empty input arrays", () => {
    const collection1: number[] = [1, 3, 5, 7];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 3, 5, 7]);
  });

  it("should merge arrays with different lengths", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6, 8];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });
});
