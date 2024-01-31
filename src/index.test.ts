import { formatDate } from "$lib";
import { describe, it, expect } from "vitest";

describe("date format test", () => {
  it("formats as dd/mm/yyyy", () => {
    const date = new Date(2024, 0, 3);

    expect(formatDate(date)).toBe("3/1/2024");
  });
});
