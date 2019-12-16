import * as utils from "../utils";

describe("getValidId", () => {
  it("should format a valid id given a string", () => {
    const input = "invalid id with spaces";
    const result = "invalididwithspaces";
    expect(utils.getValidId(input)).toEqual(result);
  });
});
