export function getQuantity(input: string[]) {
  const number = input.find((string) => {
    return Number(string);
  });

  if (!number) return "1";

  return number;
}
