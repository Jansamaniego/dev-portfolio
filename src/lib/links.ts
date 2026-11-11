export function isReadyValue(value?: string): value is string {
  if (!value) return false;
  const trimmed = value.trim();
  return trimmed.length > 0 && !trimmed.startsWith("TODO");
}

export function isReadyLink(url?: string): url is string {
  return isReadyValue(url);
}
