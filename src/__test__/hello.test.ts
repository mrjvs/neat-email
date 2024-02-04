import { describe, expect, it } from "vitest";
import { helloWorld } from "@/index";

describe("helloWorld()", () => {
  it('should say hello world', () => {
    expect(helloWorld()).toBe("hello-world");
  })
});
