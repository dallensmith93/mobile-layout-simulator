import type { LayoutMode, ResponsiveSpec } from "../engine/responsiveEngine";

type LayoutCanvasProps = {
  width: number;
  mode: LayoutMode;
  spec: ResponsiveSpec;
};

export default function LayoutCanvas({ width, mode, spec }: LayoutCanvasProps) {
  const cards = mode === "mobile" ? 4 : mode === "tablet" ? 6 : 9;

  return (
    <div className={`layout-canvas mode-${mode}`} style={{ gap: `${spec.gap}px`, padding: `${spec.cardPadding}px` }}>
      {spec.navVisible ? <div className="top-nav">Top Navigation</div> : null}

      <div
        className="content-grid"
        style={{
          gridTemplateColumns: `repeat(${spec.columns}, minmax(0, 1fr))`,
          gap: `${spec.gap}px`,
        }}
      >
        {Array.from({ length: cards }).map((_, index) => (
          <article key={index} className="content-card">
            Card {index + 1}
          </article>
        ))}
      </div>

      {spec.sidebarVisible ? <aside className="sidebar">Sidebar</aside> : null}

      <footer className="canvas-footer">
        width: {width}px | cols: {spec.columns} | gap: {spec.gap}
      </footer>
    </div>
  );
}
