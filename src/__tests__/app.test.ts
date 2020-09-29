import { helloWorld } from "../app";

describe("something", () => {
  it("should", () => {
    const res = helloWorld();

    expect(res).toBe("Hello World");
  });
});
