export default function getFuncName(fn?: { name?: string; displayName?: string; toString(): string }): string {
  if (!fn) return '';
  const name = fn.displayName || fn.name;
  if (name) return name;

  const match = /^\s*function\s*([^(]*)/im.exec(fn.toString());
  return match?.[1]?.trim() ?? '';
}
