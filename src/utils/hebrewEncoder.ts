export function encodeHebrewForZemismart(text: string): string {
  const utf8Bytes = new TextEncoder().encode(text);
  return new TextDecoder('iso-8859-1').decode(utf8Bytes);
}
