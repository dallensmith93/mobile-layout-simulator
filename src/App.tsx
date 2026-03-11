import { useMemo, useState } from "react";
import BreakpointPanel from "./components/BreakpointPanel";
import DeviceFrame from "./components/DeviceFrame";
import LayoutCanvas from "./components/LayoutCanvas";
import { breakpointSimulator, nearestDevice } from "./engine/breakpointSimulator";
import { getResponsiveSpec, responsiveEngine } from "./engine/responsiveEngine";

const presetWidths = [360, 393, 600, 768, 834, 1024, 1280, 1440];

export default function App() {
  const [width, setWidth] = useState(393);
  const [height, setHeight] = useState(852);

  const mode = responsiveEngine(width);
  const spec = getResponsiveSpec(mode);
  const simulation = useMemo(() => breakpointSimulator(presetWidths), []);
  const deviceHint = nearestDevice(width);

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Mobile Layout Simulator</h1>
        <p>Test responsive behavior in realistic device frames.</p>
      </header>

      <main className="layout-grid">
        <DeviceFrame
          width={width}
          height={height}
          mode={mode}
          onWidthChange={setWidth}
          onHeightChange={setHeight}
          deviceHint={deviceHint}
        >
          <LayoutCanvas width={width} mode={mode} spec={spec} />
        </DeviceFrame>

        <BreakpointPanel mode={mode} width={width} simulation={simulation} />
      </main>
    </div>
  );
}
