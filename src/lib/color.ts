const DARK_TEXT = "#14122a";
const LIGHT_TEXT = "#ffffff";

function channel(value: number) {
  const scaled = value / 255;
  return scaled <= 0.03928 ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string) {
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!match) {
    throw new Error(`Expected a #rrggbb color, got "${hex}".`);
  }
  const value = parseInt(match[1], 16);
  const [r, g, b] = [value >> 16, (value >> 8) & 0xff, value & 0xff].map(channel);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a: number, b: number) {
  const [light, dark] = a > b ? [a, b] : [b, a];
  return (light + 0.05) / (dark + 0.05);
}

/** Picks whichever text color reads better on the given background. */
export function readableOn(background: string) {
  const bg = luminance(background);
  return contrast(bg, luminance(DARK_TEXT)) >= contrast(bg, luminance(LIGHT_TEXT)) ? DARK_TEXT : LIGHT_TEXT;
}
