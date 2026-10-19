/**
 * The hero backdrop: a Himachal meadow below a snow-capped range, drawn in
 * layers that read their colours from CSS custom properties (see index.css)
 * so the same scene turns into a starlit valley in dark mode. The sky itself
 * is painted by the .hero element so it can stretch above the scene.
 */

type Point = readonly [number, number];

// Ridge lines, left to right. The lowest y values are the summits.
const FAR_RANGE: Point[] = [
  [0, 318], [70, 286], [130, 300], [215, 236], [280, 268], [350, 218],
  [425, 276], [505, 246], [590, 296], [690, 230], [755, 258], [840, 196],
  [930, 262], [1005, 238], [1085, 284], [1170, 222], [1240, 258],
  [1330, 232], [1440, 280],
];

const MID_RANGE: Point[] = [
  [0, 372], [110, 330], [200, 352], [320, 298], [420, 344], [520, 318],
  [640, 362], [760, 316], [860, 346], [990, 300], [1100, 350],
  [1210, 322], [1330, 358], [1440, 330],
];

// Weathered standing stones, as found on the meadow near the pass.
const STONES: ReadonlyArray<readonly [number, number, number, number]> = [
  // x, baseline y, width, height
  [190, 486, 14, 46], [236, 482, 9, 22], [1188, 478, 12, 38],
  [1222, 474, 8, 18], [1262, 480, 10, 26], [612, 468, 7, 14],
];

function ridgePath(points: Point[]): string {
  const [first, ...rest] = points;
  return (
    `M${first[0]} ${first[1]} ` +
    rest.map(([x, y]) => `L${x} ${y}`).join(' ') +
    ' L1440 560 L0 560 Z'
  );
}

/** Snow caps for every summit whose neighbours are both lower. */
function snowCaps(points: Point[], depth: number): string[] {
  const caps: string[] = [];
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i];
    const [lx, ly] = points[i - 1];
    const [rx, ry] = points[i + 1];
    if (py >= ly || py >= ry) continue;
    const t = Math.min(depth, (Math.min(ly, ry) - py) / Math.max(ly - py, ry - py));
    const ax = px + (lx - px) * t;
    const ay = py + (ly - py) * t;
    const bx = px + (rx - px) * t;
    const by = py + (ry - py) * t;
    // A ragged lower edge so the snowline looks wind-blown, not ruled.
    const m1x = ax + (px - ax) * 0.45;
    const m2x = px + (bx - px) * 0.4;
    const midY = (ay + by) / 2;
    caps.push(
      `M${ax.toFixed(1)} ${ay.toFixed(1)} L${px} ${py} L${bx.toFixed(1)} ${by.toFixed(1)} ` +
        `L${m2x.toFixed(1)} ${(midY - 6).toFixed(1)} L${px} ${(midY + 4).toFixed(1)} ` +
        `L${m1x.toFixed(1)} ${(midY - 8).toFixed(1)} Z`,
    );
  }
  return caps;
}

export function Landscape() {
  return (
    <svg
      className="landscape"
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false">
      <defs>
        <linearGradient id="far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--scene-far-top)" />
          <stop offset="1" stopColor="var(--scene-far-bottom)" />
        </linearGradient>
        <linearGradient id="mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--scene-mid-top)" />
          <stop offset="1" stopColor="var(--scene-mid-bottom)" />
        </linearGradient>
        <linearGradient id="meadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--scene-meadow-top)" />
          <stop offset="1" stopColor="var(--scene-meadow-bottom)" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      <g className="landscape-clouds" filter="url(#soft)">
        <g className="cloud cloud-a">
          <ellipse cx="260" cy="150" rx="150" ry="34" />
          <ellipse cx="330" cy="128" rx="90" ry="38" />
          <ellipse cx="200" cy="136" rx="70" ry="28" />
        </g>
        <g className="cloud cloud-b">
          <ellipse cx="1080" cy="110" rx="170" ry="30" />
          <ellipse cx="1150" cy="88" rx="100" ry="36" />
          <ellipse cx="1010" cy="98" rx="70" ry="26" />
        </g>
        <g className="cloud cloud-c">
          <ellipse cx="700" cy="275" rx="260" ry="26" />
          <ellipse cx="620" cy="258" rx="110" ry="28" />
          <ellipse cx="800" cy="260" rx="120" ry="24" />
        </g>
      </g>

      <path d={ridgePath(FAR_RANGE)} fill="url(#far)" />
      <g fill="var(--scene-snow)">
        {snowCaps(FAR_RANGE, 0.42).map(d => (
          <path key={d} d={d} />
        ))}
      </g>

      <path d={ridgePath(MID_RANGE)} fill="url(#mid)" />
      <g fill="var(--scene-snow)" opacity="0.85">
        {snowCaps(MID_RANGE, 0.22).map(d => (
          <path key={d} d={d} />
        ))}
      </g>

      <path
        d="M0 418 C 160 384, 300 360, 470 392 S 780 446, 960 398 S 1290 352, 1440 392 V560 H0 Z"
        fill="var(--scene-hill-dark)"
      />
      <path
        d="M0 452 C 180 420, 330 414, 520 436 S 860 470, 1060 438 S 1330 418, 1440 436 V560 H0 Z"
        fill="var(--scene-hill)"
      />
      <path
        d="M0 488 C 260 456, 560 466, 860 474 S 1280 458, 1440 470 V560 H0 Z"
        fill="url(#meadow)"
      />

      <g fill="var(--scene-stone)">
        {STONES.map(([x, y, w, h]) => (
          <path
            key={`${x}-${y}`}
            d={`M${x} ${y} L${x + w * 0.1} ${y - h} Q${x + w * 0.5} ${y - h - w * 0.5} ${x + w * 0.9} ${y - h * 0.94} L${x + w} ${y} Z`}
          />
        ))}
      </g>
    </svg>
  );
}
