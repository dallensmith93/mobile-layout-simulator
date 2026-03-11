import type { PropsWithChildren } from "react";
import type { LayoutMode } from "../engine/responsiveEngine";

type DeviceFrameProps = PropsWithChildren<{
  width: number;
  height: number;
  mode: LayoutMode;
  onWidthChange: (width: number) => void;
  onHeightChange: (height: number) => void;
  deviceHint: { name: string; width: number; height: number };
}>;

export default function DeviceFrame({
  children,
  width,
  height,
  mode,
  onWidthChange,
  onHeightChange,
  deviceHint,
}: DeviceFrameProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <h2>Device Frame</h2>
        <span className={`mode-pill ${mode}`}>{mode}</span>
      </div>

      <div className="device-controls">
        <label>
          Width
          <input
            type="range"
            min={320}
            max={1600}
            value={width}
            onChange={(event) => onWidthChange(Number(event.target.value))}
          />
          <span>{width}px</span>
        </label>

        <label>
          Height
          <input
            type="range"
            min={480}
            max={1200}
            value={height}
            onChange={(event) => onHeightChange(Number(event.target.value))}
          />
          <span>{height}px</span>
        </label>
      </div>

      <p className="hint">Closest device: {deviceHint.name} ({deviceHint.width}x{deviceHint.height})</p>

      <div className="frame-shell" style={{ width, height }}>
        {children}
      </div>
    </section>
  );
}
