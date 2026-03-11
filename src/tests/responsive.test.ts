import { describe, expect, it } from "vitest";
import { breakpointSimulator } from "../engine/breakpointSimulator";
import { getResponsiveSpec, responsiveEngine } from "../engine/responsiveEngine";

describe("responsiveEngine", () => {
  it("returns mobile for small widths", () => {
    expect(responsiveEngine(375)).toBe("mobile");
  });

  it("returns tablet for medium widths", () => {
    expect(responsiveEngine(800)).toBe("tablet");
  });

  it("returns desktop for large widths", () => {
    expect(responsiveEngine(1280)).toBe("desktop");
  });
});

describe("getResponsiveSpec", () => {
  it("enables sidebar only on desktop", () => {
    expect(getResponsiveSpec("mobile").sidebarVisible).toBe(false);
    expect(getResponsiveSpec("tablet").sidebarVisible).toBe(false);
    expect(getResponsiveSpec("desktop").sidebarVisible).toBe(true);
  });
});

describe("breakpointSimulator", () => {
  it("simulates responsive metadata per width", () => {
    const result = breakpointSimulator([360, 768, 1280]);

    expect(result[0].mode).toBe("mobile");
    expect(result[1].columns).toBe(2);
    expect(result[2].sidebarVisible).toBe(true);
  });
});
