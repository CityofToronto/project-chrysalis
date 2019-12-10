export function getValidId(inputId: string): string {
  return inputId.replace(/ /g, "-");
}
