import type { SimulatedBreakpoint } from "../engine/breakpointSimulator";
import type { LayoutMode } from "../engine/responsiveEngine";

type BreakpointPanelProps = {
  mode: LayoutMode;
  width: number;
  simulation: SimulatedBreakpoint[];
};

export default function BreakpointPanel({ mode, width, simulation }: BreakpointPanelProps) {
  return (
    <aside className="panel">
      <h2>Breakpoint Panel</h2>
      <p className="current-mode">Current: <strong>{mode}</strong> at {width}px</p>

      <ul className="breakpoint-list">
        {simulation.map((item) => (
          <li key={item.width} className={item.mode === mode ? "active" : ""}>
            <span>{item.width}px</span>
            <span>{item.mode}</span>
            <span>{item.columns} cols</span>
            <span>{item.navVisible ? "nav on" : "nav off"}</span>
            <span>{item.sidebarVisible ? "sidebar on" : "sidebar off"}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
