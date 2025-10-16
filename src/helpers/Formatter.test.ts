import { makeBigFirstLetter } from "./letter-formatter";

describe("makeBigFirstletter", () => {
  it("Should make first letter big", () => {
    expect(makeBigFirstLetter("kyiv")).toBe("Kyiv");
  });
});
console.log(makeBigFirstLetter("kyiv"));
