/**
 * Function to transform BRL string value in number
 * @param string
 * @returns number
 */
export function formatBRLStringToNumeric(value: string): number {
  return parseFloat(value.replace('.', '').replace(',', '.'));
}
