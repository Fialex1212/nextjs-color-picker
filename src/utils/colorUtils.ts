export const rgbToHex = (r: number, g: number, b: number): string => {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
};

export const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
};

export const hexToCmyk = (hex: string) => {
  const { r, g, b } = hexToRgb(hex);
  const c = 1 - r / 255;
  const m = 1 - g / 255;
  const y = 1 - b / 255;
  const k = Math.min(c, m, y);

  return {
    c: ((c - k) / (1 - k)) * 100,
    m: ((m - k) / (1 - k)) * 100,
    y: ((y - k) / (1 - k)) * 100,
    k: k * 100,
  };
};

export const hexToHsv = (hex: string) => {
  const { r, g, b } = hexToRgb(hex);
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const diff = max - min;

  let h = 0;
  if (diff !== 0) {
    if (max === rNorm) {
      h = (gNorm - bNorm) / diff;
    } else if (max === gNorm) {
      h = (bNorm - rNorm) / diff + 2;
    } else {
      h = (rNorm - gNorm) / diff + 4;
    }
    h = (h * 60 + 360) % 360;
  }

  const s = max === 0 ? 0 : (diff / max) * 100;
  const v = max * 100;

  return { h, s, v };
};

export const hexToHsl = (hex: string) => {
  const { r, g, b } = hexToRgb(hex);
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const diff = max - min;
  const l = (max + min) / 2;

  let h = 0;
  if (diff !== 0) {
    if (max === rNorm) {
      h = (gNorm - bNorm) / diff;
    } else if (max === gNorm) {
      h = (bNorm - rNorm) / diff + 2;
    } else {
      h = (rNorm - gNorm) / diff + 4;
    }
    h = (h * 60 + 360) % 360;
  }

  const s = diff === 0 ? 0 : (diff / (1 - Math.abs(2 * l - 1))) * 100;

  return { h, s, l };
};
