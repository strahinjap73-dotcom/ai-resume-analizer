// Human-readable file size formatter
// Converts bytes to KB, MB, or GB using base 1024

const trimTrailingZeros = (numStr: string) => numStr.replace(/\.0+$|(?<=\.[0-9]*?)0+$/g, "");

const formatValue = (value: number) => {
  if (value >= 100) return Math.round(value).toString();
  if (value >= 10) return trimTrailingZeros(value.toFixed(1));
  return trimTrailingZeros(value.toFixed(2));
};

/**
 * Format a size in bytes into a human readable string in KB, MB, or GB.
 * - Uses base 1024.
 * - Values under 1 KB are shown as 0 KB (or 0 for non-positive/invalid input).
 * - Decimals are trimmed (e.g., 1.50 MB -> 1.5 MB, 12.0 MB -> 12 MB).
 */
export function formatSize(bytes?: number | null): string {
  if (typeof bytes !== "number" || !isFinite(bytes) || bytes <= 0) {
    return "0 KB";
  }

  const kb = bytes / 1024;
  if (kb < 1024) return `${formatValue(kb)} KB`;

  const mb = kb / 1024;
  if (mb < 1024) return `${formatValue(mb)} MB`;

  const gb = mb / 1024;
  return `${formatValue(gb)} GB`;
}

export const generateUUID = () => crypto.randomUUID();

export default formatSize;
