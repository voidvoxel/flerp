import { assertEquals } from "jsr:@std/assert";
import { lerp } from "./main.ts";

Deno.test(function lerpTest() {
  assertEquals(lerp(2, 5, 0.5), 3.5);
});
