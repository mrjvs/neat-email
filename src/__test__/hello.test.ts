import { helloWorld } from "@entrypoint"
import { describe, expect, it } from "vitest";

describe("helloWorld()", () => {
  it('should say hello world', () => {
    expect(helloWorld()).toBe("Hello world!");
  })
});
