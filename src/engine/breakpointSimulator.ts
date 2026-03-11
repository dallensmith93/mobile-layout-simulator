import { getResponsiveSpec, responsiveEngine, type LayoutMode } from "./responsiveEngine";

export type SimulatedBreakpoint = {
  width: number;
  mode: LayoutMode;
  columns: number;
  gap: number;
  navVisible: boolean;
  sidebarVisible: boolean;
};

export function breakpointSimulator(widths: number[]): SimulatedBreakpoint[] {
  return widths.map((width) => {
    const mode = responsiveEngine(width);
    const spec = getResponsiveSpec(mode);

    return {
      width,
      mode,
      columns: spec.columns,
      gap: spec.gap,
      navVisible: spec.navVisible,
      sidebarVisible: spec.sidebarVisible,
    };
  });
}

export function nearestDevice(width: number): { name: string; width: number; height: number } {
  const devices = [
    { name: "iPhone SE", width: 375, height: 667 },
    { name: "iPhone 14 Pro", width: 393, height: 852 },
    { name: "iPad Mini", width: 768, height: 1024 },
    { name: "iPad Pro 11", width: 834, height: 1194 },
    { name: "Laptop", width: 1280, height: 800 },
    { name: "Desktop", width: 1440, height: 900 },
  ];

  return devices.reduce((nearest, device) =>
    Math.abs(device.width - width) < Math.abs(nearest.width - width) ? device : nearest
  );
}
