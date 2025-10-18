import { makeBigFirstLetter } from "./letter-formatter";

describe("makeBigFirstletter", () => {
  it("Should make first letter big", () => {
    expect(makeBigFirstLetter("kyiv")).toBe("Kyiv");
  });
  it("Should return empty string", () => {
    expect(makeBigFirstLetter("")).toBe("Your Location");
  });
  it("Something", () => {
    expect(makeBigFirstLetter("vedmfkvmelwks")).toBe("Vedmfkvmelwks");
  });
});
