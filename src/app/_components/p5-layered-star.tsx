type P5LayeredStarProps = {
  className?: string;
  /** Width in px; height scales to star aspect ratio */
  size?: number;
};

const CX = 120;
const CY = 142;

/** Five-point star with one elongated tip — P5-style */
function buildStarPoints(
  outerR: number,
  innerR: number,
  tipStretch = 1.48,
): string {
  const points: [number, number][] = [];

  for (let i = 0; i < 10; i++) {
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const radius = i % 2 === 0 ? outerR : innerR;
    let x = CX + radius * Math.cos(angle);
    let y = CY + radius * Math.sin(angle);
    points.push([x, y]);
  }

  // Find the lowest outer tip and stretch it downward
  let lowestOuter = 0;
  for (let i = 0; i < 10; i += 2) {
    if (points[i][1] > points[lowestOuter][1]) lowestOuter = i;
  }

  const [lx, ly] = points[lowestOuter];
  const stretch = tipStretch - 1;
  points[lowestOuter] = [lx + 3, ly + outerR * stretch];

  // Nudge adjacent inner points for a sharper elongated spike
  const prev = (lowestOuter + 9) % 10;
  const next = (lowestOuter + 1) % 10;
  points[prev][0] += lowestOuter === 6 ? -5 : 4;
  points[next][0] += lowestOuter === 6 ? 5 : -4;
  points[prev][1] += outerR * 0.08;
  points[next][1] += outerR * 0.08;

  return points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
}

const OUTER_POINTS = buildStarPoints(118, 44, 1.5);

const LAYERS: { scale: number; fill: string }[] = [
  { scale: 1, fill: "#e60026" },
  { scale: 0.83, fill: "#111111" },
  { scale: 0.66, fill: "#e60026" },
  { scale: 0.49, fill: "#111111" },
  { scale: 0.32, fill: "#e60026" },
];

export default function P5LayeredStar({
  className = "",
  size = 280,
}: P5LayeredStarProps) {
  const height = Math.round(size * (280 / 240));

  return (
    <svg
      viewBox="0 0 240 280"
      width={size}
      height={height}
      className={className}
      aria-hidden
    >
      <g transform="rotate(-8 120 142)">
        {LAYERS.map((layer) => (
          <polygon
            key={layer.scale}
            points={OUTER_POINTS}
            fill={layer.fill}
            transform={`translate(${CX} ${CY}) scale(${layer.scale}) translate(${-CX} ${-CY})`}
          />
        ))}
      </g>
    </svg>
  );
}
