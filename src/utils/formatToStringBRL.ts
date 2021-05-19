/**
 * Function to format decimal values from database on BRL values
 * @param value string
 * @returns string
 */
export function formatToStringBRL(value: string): string {
  const parsedValue = parseFloat(value);

  return parsedValue.toLocaleString('pt-br', {minimumFractionDigits: 2});
}
