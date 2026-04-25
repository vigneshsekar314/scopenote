/**
 * Trims a text to a specified length and appends ellipsis (...) at the end
 * @param text - Text to be trimmed
 * @param maxLen - Trim length of the text
 * @param continuationText - Custom string to replace ellipsis if needed
 */

function showEllipsis(text: string, maxLen: number, continuationText: string = '...'): string {
  if (text.length < maxLen) return text;
  return text.slice(0, maxLen) + continuationText;
}

export { showEllipsis };
