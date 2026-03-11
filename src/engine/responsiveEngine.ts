export type LayoutMode = "mobile" | "tablet" | "desktop";

export type BreakpointMap = {
  mobileMax: number;
  tabletMax: number;
};

export type ResponsiveSpec = {
  columns: number;
  gap: number;
  cardPadding: number;
  navVisible: boolean;
  sidebarVisible: boolean;
};

export const defaultBreakpoints: BreakpointMap = {
  mobileMax: 639,
  tabletMax: 1023,
};

export function responsiveEngine(width: number, map: BreakpointMap = defaultBreakpoints): LayoutMode {
  if (width <= map.mobileMax) return "mobile";
  if (width <= map.tabletMax) return "tablet";
  return "desktop";
}

export function getResponsiveSpec(mode: LayoutMode): ResponsiveSpec {
  if (mode === "mobile") {
    return {
      columns: 1,
      gap: 8,
      cardPadding: 10,
      navVisible: false,
      sidebarVisible: false,
    };
  }

  if (mode === "tablet") {
    return {
      columns: 2,
      gap: 12,
      cardPadding: 12,
      navVisible: true,
      sidebarVisible: false,
    };
  }

  return {
    columns: 3,
    gap: 16,
    cardPadding: 14,
    navVisible: true,
    sidebarVisible: true,
  };
}
